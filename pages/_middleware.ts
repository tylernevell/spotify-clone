import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req: any) {
  // token exists if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;

  // allow the requests if one of the following is true
  // 1. token exists
  // 2. it's a request for next-auth session and provider fetching
  if (token || pathname.includes('/api/auth')) {
    return NextResponse.next();
  }

  // redirect to login if no token and are requesting protected route
  if (!token && pathname !== '/login') {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.rewrite(url);
  }
}
