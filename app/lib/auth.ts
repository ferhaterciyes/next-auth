import { NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_DOMAIN!, 
      authorization: {
        params: {
          scope: "openid profile email",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.user = user;
        
        // Example of role assignment - you'd typically get this from Auth0
        // In Auth0 dashboard, you can assign roles to users
        token.role = user.email?.includes("admin") ? "admin" : "user";
      }
      return token;
    },
    async session({ session, token } :any) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      session.role = token.role;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};