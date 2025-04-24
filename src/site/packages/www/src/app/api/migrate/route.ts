
import { auth0 } from '@/lib/auth0';
import { AuthenticationContextType, migrateCart } from '@jhoose-commerce/core';
import { generateCustomerContext, getAnonymousIdCookie, getCustomerContextFromCookie, removeAnonymousIdCookie, removeLocalStorageCart, setCustomerContextCookie } from '@jhoose-commerce/core-nextjs';
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  
    const searchParams = request.nextUrl.searchParams
    const anonymousIdFromQuery = searchParams.get('anonymousId')
    const returnTo = searchParams.get('returnTo') ?? '/'

    var anonymousId = await getAnonymousIdCookie();
    var session = await auth0.getSession();;

    if (anonymousId === anonymousIdFromQuery && session) {
      
        if (session.tokenSet.idToken) {
            // Set the customer context for the authenticated user
            var authenticatedContext = await updateCustomerContext(session.tokenSet.idToken, true);
        
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

    redirect(returnTo);
    
}

async function updateCustomerContext(accessToken: string, ignoreCookie: boolean = false) : Promise<AuthenticationContextType | undefined> {

    if (!ignoreCookie) {
      // Check if the customer context is already set
  
      var customerContext = await getCustomerContextFromCookie();
      
      if (customerContext) {
          customerContext.token = accessToken;
          customerContext.isAnonymous = false;
  
          await setCustomerContextCookie(customerContext);
          return customerContext;
      }
    }
  
    // Fetch the customer context from the server
    customerContext = await generateCustomerContext(accessToken, false);

    if (customerContext) {
        await setCustomerContextCookie(customerContext);
  
        return customerContext;
    }

    return undefined;
}