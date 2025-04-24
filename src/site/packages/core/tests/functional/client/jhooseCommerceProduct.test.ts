import { describe, it, expect, beforeAll } from 'vitest';
import { PriceInventoryRequest, PriceInventoryResponse, JhooseCommerceProduct, AuthenticationContextType, MarketRequest, MarketResponse, MarketsResponse ,JhooseCommerceMarket, JhooseCommerceAuthentication, CustomerContextResponse, AnonymousAuthenticationResponse, MarketContextType } from '@jhoose-commerce/core';


const authenticationKey = process.env.VITE_COMMERCE_AUTHORIZATION_KEY ?? "";
const endpoint = process.env.VITE_COMMERCE_ENDPOINT ?? "";
var token = 'test-token';

describe('JhooseCommerceProduct', () => {

    let productService:JhooseCommerceProduct;

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

        productService = new JhooseCommerceProduct(authenticationContext, marketContext);
    });

    it('should return price and inventory response', async () => {
        const request: PriceInventoryRequest = {
            productCode: 'P-39813617',
            marketId: 'US',
            currencyCode: 'USD'
        };
        const result = await productService.getPriceAndInventory(request) as PriceInventoryResponse;

        expect(result.skuWithPriceAndInventory.length).toBeGreaterThan(0);
    });

    it('should return HttpError when post fails', async () => {
        const request: PriceInventoryRequest = {
            productCode: 'not-valid-code',
            marketId: 'US',
            currencyCode: 'USD'
        };

        const result = await productService.getPriceAndInventory(request);

        expect(result).toEqual({ code: '404', message: 'Not Found' });
    });
}); 