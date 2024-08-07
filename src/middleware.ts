import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  
  const url = new URL(request.url);
  const queryParams = url.searchParams;
  const category = queryParams.get('category');

  headers.set("x-current-path", request.nextUrl.pathname);
  headers.set("x-current-category", category);

  return NextResponse.next({ headers });
};

export const config = {
  matcher: [
    // match all routes except static files and APIs
    "/((?!api|_next/static|_next/image|favicon.ico|favicon-dark.svg|favicon.svg).*)",
  ],
};
