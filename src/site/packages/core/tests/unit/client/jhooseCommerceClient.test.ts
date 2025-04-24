import { describe, it, expect, beforeEach } from 'vitest';
import { JhooseCommerceClient } from '../../../src/client/jhooseCommerceClient';
import { AuthenticationContextType, MarketContextType } from '../../../src/types';
import { JhooseCommerceCart } from '../../../src/client/jhooseCommerceCart';
import { JhooseCommerceProduct } from '../../../src/client/jhooseCommerceProduct';
import { JhooseCommerceMarket } from '../../../src/client/jhooseCommerceMarket';
import { JhooseCommerceCheckout } from '../../../src/client/jhooseCommerceCheckout';

describe('JhooseCommerceClient', () => {
    let authenticationContext: AuthenticationContextType;
    let marketContext: MarketContextType;
    let client: JhooseCommerceClient;

    beforeEach(() => {
        authenticationContext = { 
            isAnonymous: true, 
            token: 'mockToken', 
            customerContext: '', 
            endpoint: 'mockEndpoint' 
        };
        marketContext = { 
            currency: 'USD', 
            language: 'en', 
            market: 'US', 
            countries: [] 
        };
        client = new JhooseCommerceClient(authenticationContext, marketContext);
    });

    it('should initialize with given authentication and market contexts', () => {
        expect(client.authenticationContext).toBe(authenticationContext);
        expect(client.marketContext).toBe(marketContext);
    });

    it('should lazily initialize and return cart instance', () => {
        expect(client.cart).toBeInstanceOf(JhooseCommerceCart);
        expect(client.cart).toBe(client.cart); // should return the same instance
    });

    it('should lazily initialize and return product instance', () => {
        expect(client.product).toBeInstanceOf(JhooseCommerceProduct);
        expect(client.product).toBe(client.product); // should return the same instance
    });

    it('should lazily initialize and return market instance', () => {
        expect(client.market).toBeInstanceOf(JhooseCommerceMarket);
        expect(client.market).toBe(client.market); // should return the same instance
    });

    it('should lazily initialize and return checkout instance', () => {
        expect(client.checkout).toBeInstanceOf(JhooseCommerceCheckout);
        expect(client.checkout).toBe(client.checkout); // should return the same instance
    });
});