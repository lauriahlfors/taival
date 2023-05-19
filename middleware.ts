import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  async function middleware(req) {
    // Get NextAuth JWT token
    const token = await getToken({ req });

    // Check if token returns a value
    const isAuth = !!token;

    // Store auth page url's
    const isAuthPage =
      req.nextUrl.pathname.startsWith('/signin') ||
      req.nextUrl.pathname.startsWith('/signup');

    // Check if user is on auth page
    if (isAuthPage) {
      // Check if user is signed in
      if (isAuth) {
        // Redirect user in to trips page
        return NextResponse.redirect(new URL('/trips', req.url));
      }
      // If user is not signed in return null
      return null;
    }

    // Check if user is not logged in
    if (!isAuth) {
      // Redirect user to signin page
      return NextResponse.redirect(new URL('/signin', req.url));
    }
  },
  {
    callbacks: {
      // Will call the middleware function always as true is returned here
      async authorized() {
        return true;
      },
    },
  }
);
