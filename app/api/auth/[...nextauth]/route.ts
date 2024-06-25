import NextAuth from "next-auth/next";
import { NextAuthOptions, Profile as NextAuthProfile, Account, User } from "next-auth";

// Extend the Profile type to include 'picture'
interface Profile extends NextAuthProfile {
  picture?: string;
}

const authOptions: NextAuthOptions = {
  providers: [
    {
      id: "descope",
      name: "Descope",
      type: "oauth",
      wellKnown: `https://api.descope.com/` + process.env.DESCOPE_CLIENT_ID + `/.well-known/openid-configuration`,
      authorization: { params: { scope: "openid email profile" } },
      idToken: true,
      clientId: process.env.DESCOPE_CLIENT_ID,
      clientSecret: "<Descope Access Key>",
      checks: ["pkce", "state"],
      profile(profile): User {
        const typedProfile = profile as Profile; // Type assertion for profile
        return {
          id: typedProfile.sub || "", // Ensure id is a string
          name: typedProfile.name || "", // Ensure name is a string
          email: typedProfile.email || "", // Ensure email is a string
          image: typedProfile.picture || "", // Ensure image is a string
        };
      },
    },
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        const typedAccount = account as Account & { expires_in: number }; // Type assertion for `expires_in`
        const typedProfile = profile as Profile; // Type assertion for profile
        return {
          ...token,
          access_token: typedAccount.access_token,
          expires_at: Math.floor(Date.now() / 1000 + typedAccount.expires_in),
          refresh_token: typedAccount.refresh_token,
          profile: {
            name: typedProfile?.name,
            email: typedProfile?.email,
            image: typedProfile?.picture,
          },
        };
      } else if (Date.now() < token.expires_at * 1000) {
        return token;
      } else {
        try {
          const response = await fetch("https://api.descope.com/oauth2/v1/token", {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
              client_id: process.env.DESCOPE_CLIENT_ID,
              client_secret: process.env.DESCOPE_ACCESS_KEY,
              grant_type: "refresh_token",
              refresh_token: token.refresh_token,
            }),
            method: "POST",
          });

          const tokens = await response.json();

          if (!response.ok) throw tokens;

          return {
            ...token,
            access_token: tokens.access_token,
            expires_at: Math.floor(Date.now() / 1000 + tokens.expires_in),
            refresh_token: tokens.refresh_token ?? token.refresh_token,
          };
        } catch (error) {
          console.error("Error refreshing access token", error);
          return { ...token, error: "RefreshAccessTokenError" };
        }
      }
    },

    async session({ session, token }) {
      if (token.profile) {
        session.user = token.profile;
      }

      session.error = token.error;
      session.accessToken = token.access_token;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
