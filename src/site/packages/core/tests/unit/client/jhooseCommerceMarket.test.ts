import { describe, it, expect, vi, Mock } from 'vitest';
import { JhooseCommerceMarket } from '../../../src/client/jhooseCommerceMarket';
import { get, post } from '../../../src/http';
import { AuthenticationContextType, MarketRequest, MarketResponse, MarketsResponse } from '../../../src/types';

vi.mock('@jhoose-commerce/core/http', () => ({
    post: vi.fn(),
    get: vi.fn()
}));

describe('JhooseCommerceMarket', () => {
    const mockAuthContext: AuthenticationContextType = {
        endpoint: 'https://api.example.com',
        token: 'test-token',
        customerContext: 'test-customer',
        isAnonymous: false
    };

    const jhooseCommerceMarket = new JhooseCommerceMarket(mockAuthContext);

    describe('getMarkets', () => {
        it('should return market data when API call is successful', async () => {
            const mockResponse: MarketsResponse = { markets: [] };
            (get as Mock).mockResolvedValue(mockResponse);

            const result = await jhooseCommerceMarket.getMarkets();

            expect(get).toHaveBeenCalledWith(
                `${mockAuthContext.endpoint}/commerceapi/market/`,
                mockAuthContext.token,
                mockAuthContext.customerContext
            );
            expect(result).toEqual(mockResponse);
        });

        it('should return an error when API call fails', async () => {
            (get as Mock).mockResolvedValue(null);

            const result = await jhooseCommerceMarket.getMarkets();

            expect(result).toEqual({ code: '500', message: 'void returned' });
        });
    });

    describe('determineMarket', () => {
        it('should return market data when API call is successful', async () => {
            const mockRequest: MarketRequest = {
                requestUrl: '',
                metaData: {}
            };
            const mockResponse: MarketResponse = {
                marketDetails: {
                    currency: '',
                    market: '',
                    language: '',
                    marketName: '',
                    countries: []
                }
            };
            (post as Mock).mockResolvedValue(mockResponse);

            const result = await jhooseCommerceMarket.determineMarket(mockRequest);

            expect(post).toHaveBeenCalledWith(
                `${mockAuthContext.endpoint}/commerceapi/market/determinemarket`,
                mockRequest,
                mockAuthContext.token,
                mockAuthContext.customerContext
            );
            expect(result).toEqual(mockResponse);
        });

        it('should return an error when API call fails', async () => {
            const mockRequest: MarketRequest = {
                requestUrl: '',
                metaData: {}
            };
            (post as Mock).mockResolvedValue(null);

            const result = await jhooseCommerceMarket.determineMarket(mockRequest);

            expect(result).toEqual({ code: '500', message: 'Network Error' });
        });
    });
});