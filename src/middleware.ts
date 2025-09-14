import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const cookies = request.cookies.get('theme')?.value;
  console.log('cookies', cookies);
  if (!cookies) {
    request.cookies.set('theme', 'dark');
  } else {
    request.cookies.set('theme', 'light');
  }

  // simple auth and always do it in middleware
  const token = request.cookies.get('toks')?.value as string;

  if (token?.includes('toks')) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: '/dashboard/:path*',
};
