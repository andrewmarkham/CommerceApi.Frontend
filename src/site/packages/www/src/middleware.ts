import { anonymousAuthenticationMiddleware, clearCartAfterCheckoutMiddleware, CustomMiddleware, marketMiddleware } from "@jhoose-commerce/core-nextjs";

import type { NextRequest } from 'next/server';

import { auth0 } from "./lib/auth0";

 export async function middleware(request: NextRequest) {
  const authRes = await auth0.middleware(request)

  if (request.nextUrl.pathname.startsWith("/auth")) {
    return authRes
  }

  var anonymouseRes = await anonymousAuthenticationMiddleware(request,authRes);
  var marketRes = await marketMiddleware(request,anonymouseRes);
  var clearCartRes = await clearCartAfterCheckoutMiddleware(request,marketRes);

  return clearCartRes;
}
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|commerceapi).*)']
}
