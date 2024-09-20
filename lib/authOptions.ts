// import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  callbacks: {
    async session({ session, user }:any) {
      // console.log({ session, user })
      if (session.user) {
        session.user.id = user.id;
        session.user.role = (user).role;
      }
      return session;
    },
    async signIn({  account, profile }:any) {
      if (account?.provider === 'google' && profile?.email) {
        try {
          const existingUser = await prisma.user.findUnique({
            where: { email: profile.email },
          });
          // console.log({ existingUser })

          if (!existingUser) {
            await prisma.user.create({
              data: {
                name: profile.name,
                email: profile.email,
                image: profile.image,
              },
            });
          }
          return true;
        } catch (error) {
          console.error('Error during sign-in:', error);
          return false;
        }
      }
      return false;
    },
    // async redirect({ url, baseUrl }:any) {
    //   console.log(url)
    //   // Ensure URL is valid
    //   if (url.startsWith(baseUrl)) {
    //     return url;
    //   }
    //   return baseUrl;
    // },
    
    
  },
  debug: true,
  pages: {
    error: '/error',
  },
  secret: process.env.NEXTAUTH_SECRET, 
};
