import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';

import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import prisma from './prisma-client';

export const nextAuthOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    // Will be called when the session is checked
    async session({ session, token }) {
      // Check if token exists
      if (token) {
        // Set the session user properties as the data from the token
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }

      return session;
    },

    // Will be called whenever a JSON Web Token is created
    async jwt({ token, user }) {
      // Get user from the database based on the email associated with the JWT token
      const dbUser = await prisma.user.findFirst({
        where: {
          email: token.email,
        },
      });

      // Check if the user has been found from the database
      if (!dbUser) {
        // If user is not found from the database, check if user is found from the the JWT token
        if (user) {
          // Set token id as user id
          token.id = user?.id;
        }
        return token;
      }

      // Return the JWT token with user data from database
      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        image: dbUser.image,
      };
    },
  },
};
