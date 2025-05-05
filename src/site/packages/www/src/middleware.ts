import type { NextRequest } from 'next/server';

import { auth0 } from "./lib/auth0";
import { anonymousAuthenticationMiddleware, clearCartAfterCheckoutMiddleware, marketMiddleware } from '@jhoose-commerce/core-nextjs';

 export async function middleware(request: NextRequest) {
  const authRes = await auth0.middleware(request)

  if (request.nextUrl.pathname.startsWith("/auth")) {
    return authRes
  }

  const anonymouseRes = await anonymousAuthenticationMiddleware(request,authRes);
  const marketRes = await marketMiddleware(request,anonymouseRes);
  const clearCartRes = await clearCartAfterCheckoutMiddleware(request,marketRes);

  return clearCartRes;
}
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|commerceapi).*)']
}

