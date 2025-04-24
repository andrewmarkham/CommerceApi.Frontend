import { hasTokenExpired, IN_LOGIN_FLOW_COOKIE } from '@jhoose-commerce/core';

import { NextRequest, NextResponse } from 'next/server';

import { generateCustomerContext, getCustomerContextFromCookie, hasCustomerContextCookie, setCustomerContextCookie } from '../helpers/context';
import { generateAnonymousToken, setAnonymousIdCookie } from '../helpers/anonymous';

export async function anonymousAuthenticationMiddleware(request: NextRequest, prevResponse: NextResponse) : Promise<NextResponse> {
    var response = NextResponse.next(prevResponse);

    console.log("anonymousAuthenticationMiddleware");
    // check if the user is in the login flow, if we are then stop the middleware, as we don't want to generate a new anonymous token
    if (request.cookies.has(IN_LOGIN_FLOW_COOKIE)) {
        response.cookies.delete(IN_LOGIN_FLOW_COOKIE);

        console.log("anonymousAuthenticationMiddleware - in login flow");
        return response;
    }

    if (!await hasCustomerContextCookie(request)) {
        
        console.log("anonymousAuthenticationMiddleware - no customer context cookie");
        // get a new anonymous token
        let token = await generateAnonymousToken();
        
        if (token) {
            console.log("anonymousAuthenticationMiddleware - generate anonymous token");
            await setAnonymousIdCookie(token,response);

            let customerContext = await generateCustomerContext(token, true);
            if (customerContext) {
                await setCustomerContextCookie(customerContext, response);
            }
        }

    } else {
        let customerContext = await getCustomerContextFromCookie(request);

        if (customerContext && customerContext.isAnonymous && hasTokenExpired(customerContext.token)) {

            // get a new anonymous token and reassign the customer context
            let token = await generateAnonymousToken();

            if (token) {
                await setAnonymousIdCookie(token,response);
                customerContext.token = token ?? "";

                await setCustomerContextCookie(customerContext, response)
            };
        }
    }

    return response;
}