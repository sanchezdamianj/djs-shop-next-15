import bcryptjs from "bcryptjs";
import NextAuth, { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import prisma from "./lib/prisma";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/new-account",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      console.log({ auth });
      const isLoggedIn = !!auth?.user;
      console.log('loggedin', isLoggedIn );
      const isOnDashboard = nextUrl.pathname.startsWith('/checkout');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } 
      // else if (isLoggedIn && !isOnDashboard) {
      //   return Response.redirect(new URL('/checkout/address', nextUrl));
      // }
      return true;
    },
    jwt({ token, user }) {
      if (user) {
        token.data = user;
      }

      return token;
    },
    session({ session, token, user }) {
      session.user = token.data as any;

      // if somehitng has changed with the user data, we need to update the session because the user data was saved in the token and in the cookie
      return session;
    },
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          return null;
        }

        const { email, password } = parsedCredentials.data;

        //search email
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
          return null;
        }

        //check password
        if (!bcryptjs.compareSync(password, user.password)) return null;

        //return user without password
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: _, ...rest } = user;
        return rest;
      },
    }),
  ],
};

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);
