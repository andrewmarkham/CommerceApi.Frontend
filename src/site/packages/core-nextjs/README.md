# Jhoose Commerce Core Javascript API - Next.JS extensions

This library contains several functions that support using the Core Javascript framework with Next.JS

### anonymousAuthenticationMiddleware

This middleware manages anonymous user sessions in a Next.js e-commerce application. Let me break down how it works:

**High-Level Flow**
The middleware ensures every visitor has a valid authentication token and customer context, even before they log in. Think of it as giving every visitor a temporary "guest pass" to browse the store.

### clearCartAfterCheckoutMiddleware
This middleware handles cart cleanup after a successful checkout by setting a cookie that signals the cart should be removed.

**High-Level Purpose**
When a user completes checkout, they're typically redirected back to your site with a query parameter. This middleware detects that parameter and sets a cookie to trigger cart removal on the client side.

### marketMiddleware
This middleware manages market/locale detection and persistence for international e-commerce sites. It ensures users see content in the correct language and currency based on their location or preferences.

**High-Level Purpose**
Think of this as a "location detector" that:

Checks if the user already has a saved market preference (from a cookie)
Validates that preference matches the current URL language
Updates the market if there's a mismatch or if it's missing


### Example middleware
```javascript

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
```