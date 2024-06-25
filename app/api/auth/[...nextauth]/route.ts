import NextAuth from "next-auth/next";
import { NextAuthOptions, Profile as NextAuthProfile, Account, User } from "next-auth";

// Import JWT type directly from next-auth/next
import { JWT } from "next-auth/next";

// Extend the Profile type to include 'picture'
interface Profile extends NextAuthProfile {
  picture?: string;
}

// Extend the JWT type to include our custom properties
interface CustomJWT extends JWT {
  access_token?: string;
  expires_at?: number;
  refresh_token?: string;
  profile?: {
    name?: string;
    email?: string;
    image?: string;
  };
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
        } as CustomJWT;
      } else {
        const typedToken = token as CustomJWT; // Type assertion for token
        if (Date.now() < (typedToken.expires_at || 0) * 1000) {
          return typedToken;
        } else {
          try {
            const response = await fetch("https://api.descope.com/oauth2/v1/token", {
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: new URLSearchParams({
                client_id: process.env.DESCOPE_CLIENT_ID,
                client_secret: process.env.DESCOPE_ACCESS_KEY,
                grant_type: "refresh_token",
                refresh_token: typedToken.refresh_token || "",
              }),
              method: "POST",
            });

            const tokens = await response.json();

            if (!response.ok) throw tokens;

            return {
              ...typedToken,
              access_token: tokens.access_token,
              expires_at: Math.floor(Date.now() / 1000 + tokens.expires_in),
              refresh_token: tokens.refresh_token ?? typedToken.refresh_token,
            };
          } catch (error) {
            console.error("Error refreshing access token", error);
            return { ...typedToken, error: "RefreshAccessTokenError" };
          }
        }
      }
    },

    async session({ session, token }) {
      const typedToken = token as CustomJWT; // Type assertion for token
      if (typedToken.profile) {
        session.user = typedToken.profile;
      }

      session.error = typedToken.error;
      session.accessToken = typedToken.access_token;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
