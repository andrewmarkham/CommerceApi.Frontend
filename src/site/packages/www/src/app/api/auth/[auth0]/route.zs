//import { handleAuth, handleCallback, handleLogin, handleLogout, Session } from '@auth0/nextjs-auth0';
/*
import { removeCustomerContext } from '@jhoose-commerce/core-nextjs/src/helpers/context';
import { NextRequest } from 'next/server';
import { cookies, headers } from "next/headers";

import { getAnonymousIdCookie, removeAnonymousIdCookie } from '@jhoose-commerce/core-nextjs/src/helpers/anonymous';
import { IN_LOGIN_FLOW_COOKIE } from '@jhoose-commerce/core';

  /**
   * If the user has just authenticated, we need to set a cookie to indicate that they are in the login flow.
   */
/*
const afterCallback = async (req: NextRequest, session: Session, state: any) => {
  
  // Get the anonymous customer id
  var anonymousId = await getAnonymousIdCookie();

  if (anonymousId && session.idToken) {
      (await cookies()).set(IN_LOGIN_FLOW_COOKIE, "Y");
  }
  return session;
}


export const GET = handleAuth({
  callback: handleCallback({ afterCallback }),
  logout: handleLogout(() => {
      const currentHeaders = headers();

          // Tidyup
          removeAnonymousIdCookie();
          removeCustomerContext();
      return { 
        returnTo: '/en/', // should get the correct languageStem
       };
  }),
  login: handleLogin(async (req) => {
    const currentHeaders = await headers();
      const referrer = currentHeaders.get('referer') ?? '/en/';

      var anonymousId = getAnonymousIdCookie();
      var migrateUrl = `/api/migrate?anonymousId=${anonymousId}&returnTo=${referrer}`;
      
      return {  
        returnTo: migrateUrl,
      };
  })
});
*/