import { JhooseCommerceMarket, Market, MARKET_COOKIE, MarketDetails } from "@jhoose-commerce/core";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { getCustomerContextFromCookie } from "./context";

/**
 * Retrieves the current market details from the cookie.
 *
 * This function checks if the market cookie is present. If it is, it parses the cookie value
 * as a JSON string and returns the corresponding `MarketDetails` object. If the cookie is not
 * present or the value is invalid, it returns `undefined`.
 *
 * @returns {MarketDetails | undefined} The current market details if available, otherwise `undefined`.
 */
export async function getCurrentMarketFromCookie(request?: NextRequest) : Promise<MarketDetails | undefined> {

    const cookieStore = request?.cookies ?? await cookies();

    if (cookieStore.has(MARKET_COOKIE)) {

        var currentMarketJson = cookieStore.get(MARKET_COOKIE)?.value;
        if (currentMarketJson) {
            var currentMarket = JSON.parse(currentMarketJson) as MarketDetails;

            return currentMarket;
        }
    }
    return undefined;
}

/**
 * Retrieves market details from the given request.
 *
 * @param {NextRequest} request - The incoming request object.
 * @returns {Promise<MarketDetails | undefined>} A promise that resolves to the market details if found, otherwise undefined.
 *
 * @remarks
 * This function logs the entry point and attempts to retrieve the customer context. If the customer context is not available, it returns undefined.
 * It then creates an instance of `JhooseCommerceMarket` with the authentication context and calls the `determineMarket` method with the request URL.
 * If the response contains market details, it returns them; otherwise, it returns undefined.
 */
export async function getMarketFromRequest(request: NextRequest) : Promise<MarketDetails | undefined> {

    const authenticationContext = await getCustomerContextFromCookie();
    
    if (!authenticationContext) {
        return undefined;
    }

    const marketClient = new JhooseCommerceMarket(authenticationContext);
  
    var response = await marketClient.determineMarket({requestUrl: request.nextUrl.pathname, metaData: {}});

    if (response && "marketDetails" in response) {
        return response.marketDetails;
    }

    return undefined;
}

export async function getAllMarkets() : Promise<Array<Market>> {

    const authenticationContext = await getCustomerContextFromCookie();
    
    if (!authenticationContext) {
        return [];
    }

    const marketClient = new JhooseCommerceMarket(authenticationContext);
  
    var response = await marketClient.getMarkets();

    if (response && "markets" in response) {
        return response.markets;
    }

    return [];
}

export function checkNotApiRequest(request: NextRequest) : boolean {
    return request.nextUrl.pathname.split('/')[1] !== 'commerceapi';
}
