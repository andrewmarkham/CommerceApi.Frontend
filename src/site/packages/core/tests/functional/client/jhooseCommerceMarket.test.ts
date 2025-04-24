import { describe, it, expect, beforeAll } from 'vitest';
import { AuthenticationContextType, MarketRequest, MarketResponse, MarketsResponse ,JhooseCommerceMarket, JhooseCommerceAuthentication, CustomerContextResponse, AnonymousAuthenticationResponse, MarketContextType } from '@jhoose-commerce/core';

const authenticationKey = process.env.VITE_COMMERCE_AUTHORIZATION_KEY ?? "";
const endpoint = process.env.VITE_COMMERCE_ENDPOINT ?? "";
var token = 'test-token';

describe('JhooseCommerceMarket', () => {

    let jhooseCommerceMarket: JhooseCommerceMarket;

    beforeAll(async () => {
        var anonymousAuth = new JhooseCommerceAuthentication(endpoint);
        var response  = await anonymousAuth.getAnonymousUser(authenticationKey) as AnonymousAuthenticationResponse;
        token = response.accessToken;

        var auth = new JhooseCommerceAuthentication(endpoint, token);
        var customerContext = await auth.getCustomerContext() as CustomerContextResponse;

        const authenticationContext: AuthenticationContextType = {
            isAnonymous: customerContext.isAnonymous,
            endpoint: endpoint,
            token: auth.token,
            customerContext: customerContext.customerContext
        };
    
        const marketContext: MarketContextType = {
            market: 'US',
            currency: 'USD',
            language: 'en',
            countries: [],
        };

        jhooseCommerceMarket = new JhooseCommerceMarket(authenticationContext);
    });

    describe('getMarkets', () => {
        it('should return market data when API call is successful', async () => {
            const result = await jhooseCommerceMarket.getMarkets() as MarketsResponse;

            expect(result.markets).not.to.empty;
        });
    });

    describe('determineMarket', () => {
        it('should return market data when API call is successful', async () => {
            const request: MarketRequest = {
                requestUrl: 'https://localhost:5001/en/',
                metaData: {}
            };

            const result = await jhooseCommerceMarket.determineMarket(request) as MarketResponse;

            expect(result.marketDetails.market).toEqual("US");
        });

    });
});