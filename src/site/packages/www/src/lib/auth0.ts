import { Auth0Client } from "@auth0/nextjs-auth0/server";
import { IN_LOGIN_FLOW_COOKIE } from "@jhoose-commerce/core";
import { getAnonymousIdCookie } from "@jhoose-commerce/core-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


import { AuthenticationContextType, migrateCart } from '@jhoose-commerce/core';
import { generateCustomerContext, getCustomerContextFromCookie, removeAnonymousIdCookie, removeLocalStorageCart, setCustomerContextCookie } from '@jhoose-commerce/core-nextjs';


export const auth0 = new Auth0Client({
    authorizationParameters: {
      allowInsecureRequests: true,
      scope: "openid profile email",
      //audience: "urn:custom:api",
    },
    async onCallback(error, context, session) {
        // redirect the user to a custom error page
        if (error) {
          return NextResponse.redirect(
            new URL(`/error?error=${error.message}`, process.env.APP_BASE_URL)
          )
        }
    
        // Get the anonymous customer id
        const anonymousId = await getAnonymousIdCookie();
    
        if (anonymousId && session?.tokenSet.idToken) {
            (await cookies()).set(IN_LOGIN_FLOW_COOKIE, "Y");

              if (session.tokenSet.idToken) {
                  // Set the customer context for the authenticated user
                  const authenticatedContext = await updateCustomerContext(session.tokenSet.idToken, true);
              
                  // Migrate the cart from the anonymous user to the authenticated user
                  if (authenticatedContext) {
                      await migrateCart(anonymousId, authenticatedContext);
                      console.log(authenticatedContext)
                      await removeAnonymousIdCookie();
                  }
          
                  await removeLocalStorageCart();
              } else {
                  if (session.tokenSet.idToken) {
                      await updateCustomerContext(session.tokenSet.idToken);
                  }
              }
          
        }
        return NextResponse.redirect(`${process.env.APP_BASE_URL}/en`)
        //return session;
      }
      //async onLogin(req, res) => {}
  })

  async function updateCustomerContext(accessToken: string, ignoreCookie: boolean = false) : Promise<AuthenticationContextType | undefined> {

    if (!ignoreCookie) {
      // Check if the customer context is already set
  
     const customerContext = await getCustomerContextFromCookie();
      
      if (customerContext) {
          customerContext.token = accessToken;
          customerContext.isAnonymous = false;
  
          await setCustomerContextCookie(customerContext);
          return customerContext;
      }
    }
  
    // Fetch the customer context from the server
    const customerContext = await generateCustomerContext(accessToken, false);

    if (customerContext) {
        await setCustomerContextCookie(customerContext);
  
        return customerContext;
    }

    return undefined;
}