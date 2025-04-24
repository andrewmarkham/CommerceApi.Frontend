import { describe, it, expect, vi, Mock } from 'vitest';
import { JhooseCommerceProduct } from '../../../src/client/jhooseCommerceProduct';
import { post } from '../../../src/http';
import { AuthenticationContextType, MarketContextType } from '../../../src/types';
import { PriceInventoryRequest, PriceInventoryResponse } from '../../../src/types/product';

vi.mock('@jhoose-commerce/core/http', () => ({
    post: vi.fn()
}));

describe('JhooseCommerceProduct', () => {
    const authenticationContext: AuthenticationContextType = {
        endpoint: 'https://api.example.com',
        token: 'test-token',
        customerContext: 'test-customer',
        isAnonymous: false
    };

    const marketContext: MarketContextType = {
        market: 'test-market',
        currency: '',
        language: '',
        countries: []
    };

    const product = new JhooseCommerceProduct(authenticationContext, marketContext);

    it('should return price and inventory response', async () => {
        const request: PriceInventoryRequest = {
            productCode: 'test-product',
            marketId: '',
            currencyCode: ''
        };

        const response: PriceInventoryResponse = {
            skuWithPriceAndInventory: []
        };

        (post as Mock).mockResolvedValue(response);

        const result = await product.getPriceAndInventory(request);

        expect(result).toEqual(response);
        expect(post).toHaveBeenCalledWith(
            `${authenticationContext.endpoint}/commerceapi/product/${request.productCode}/`,
            request,
            authenticationContext.token,
            authenticationContext.customerContext
        );
    });

    it('should return HttpError when post fails', async () => {
        const request: PriceInventoryRequest = {
            productCode: 'test-product',
            marketId: '',
            currencyCode: ''
        };

        (post as Mock).mockResolvedValue(null);

        const result = await product.getPriceAndInventory(request);

        expect(result).toEqual({ code: '500', message: 'Network Error' });
    });
});