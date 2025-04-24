import { MARKET_COOKIE } from '@jhoose-commerce/core';
import { NextResponse } from 'next/server';
import type {NextRequest } from 'next/server';

import { checkNotApiRequest, getCurrentMarketFromCookie, getMarketFromRequest } from '../helpers/markets';
import { getLanguageFromRequest } from '../helpers/languages';

export async function marketMiddleware(request: NextRequest, prevResponse: NextResponse) : Promise<NextResponse> {    
    var response = NextResponse.next(prevResponse);

    var currentMarket = await getCurrentMarketFromCookie(request);
    if (currentMarket) {
        if (checkNotApiRequest(request) && currentMarket.language !== getLanguageFromRequest(request)) {
            var marketDetails = await getMarketFromRequest(request);
            if (marketDetails) {
                response.cookies.set(MARKET_COOKIE, JSON.stringify(marketDetails));
            }
        }
    } else {
        var marketDetails = await getMarketFromRequest(request);
        
        if (marketDetails) {
            response.cookies.set(MARKET_COOKIE, JSON.stringify(marketDetails));
        }
    }

    return response;
}