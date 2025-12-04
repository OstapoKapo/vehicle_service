import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET = new TextEncoder().encode(process.env.JWT_AT_SECRET!);
const PUBLIC_ROUTES = ['/login', '/signup'];

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('accessToken')?.value;
   console.log('Middleware token:', token);
  const pathname = req.nextUrl.pathname;
  console.log('Middleware pathname:', pathname);

  const isPublic = PUBLIC_ROUTES.includes(pathname);

  if (!token && !isPublic) {
    console.log('Redirecting to login because no token and route is not public');
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (token && isPublic) {
    try {
      await jwtVerify(token, SECRET);
      console.log('Token valid, redirecting to home from public route');
      return NextResponse.redirect(new URL('/', req.url));
    } catch (_e) {
      const res = NextResponse.next();
      console.log('Invalid token, allowing access to public route');
      return res;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/login', '/users/:path*', '/vehicles/:path*'],
};
