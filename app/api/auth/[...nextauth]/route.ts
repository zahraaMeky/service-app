import NextAuth, { NextAuthOptions, Profile, Account } from "next-auth";

// Define a custom Profile interface that extends the default Profile
interface DescopeProfile extends Profile {
    picture?: string; // Adding the 'picture' field to the Profile type
}

const authOptions: NextAuthOptions = {
    providers: [
        {
            id: "descope",
            name: "Descope",
            type: "oauth",
            wellKnown: `https://api.descope.com/P2hakMnuvlRb7FqaGxVbZrRHOs6w/.well-known/openid-configuration`,
            authorization: { params: { scope: "openid email profile" } },
            idToken: true,
            clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
            clientSecret: process.env.DESCOPE_ACCESS_KEY,
            // https://app.descope.com/accesskeys
            checks: ["pkce", "state"],
            profile(profile: DescopeProfile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                };
            },
        },
    ],
    callbacks: {
        async jwt({ token, account, profile }) {
            if (account) {
                token = {
                    ...token,
                    access_token: account.access_token,
                    expires_at: Math.floor(Date.now() / 1000 + (account.expires_in as number)),
                    refresh_token: account.refresh_token,
                    profile: {
                        name: (profile as DescopeProfile)?.name,
                        email: (profile as DescopeProfile)?.email,
                        image: (profile as DescopeProfile)?.picture,
                    },
                };
            } else if (Date.now() < token.expires_at * 1000) {
                return token;
            } else {
                try {
                    const response = await fetch("https://api.descope.com/oauth2/v1/token", {
                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                        body: new URLSearchParams({
                            client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
                            client_secret: process.env.DESCOPE_ACCESS_KEY,
                            grant_type: "refresh_token",
                            refresh_token: token.refresh_token,
                        }),
                        method: "POST",
                    });

                    const tokens = await response.json();

                    if (!response.ok) throw tokens;

                    token = {
                        ...token,
                        access_token: tokens.access_token,
                        expires_at: Math.floor(Date.now() / 1000 + tokens.expires_in),
                        refresh_token: tokens.refresh_token ?? token.refresh_token,
                    };
                } catch (error) {
                    console.error("Error refreshing access token", error);
                    token.error = "RefreshAccessTokenError";
                }
            }
            return token;
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
