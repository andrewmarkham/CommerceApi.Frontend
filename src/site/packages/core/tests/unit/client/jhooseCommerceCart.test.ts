import { describe, expect, vi, test, afterEach } from 'vitest';
import { JhooseCommerceCart } from '@jhoose-commerce/core';
import { AuthenticationContextType, Cart, MarketContextType } from '@jhoose-commerce/core';

import { getStorageItem, setStorageItem } from '../../../src/storage/storageHelper';
import { get, HttpError, post } from '../../../src/http';


const mockStorage = vi.hoisted(() => {
    return {
        getStorageItem: vi.fn(),
    }
  })


vi.mock('@jhoose-commerce/core/storage/storageHelper', () => ({
    getStorageItem: mockStorage.getStorageItem,
    setStorageItem: vi.fn()
}));

const mockHttp = vi.hoisted(() => {
    return {
        get: vi.fn(),
        post: vi.fn()
    }
  })


vi.mock('@jhoose-commerce/core/http', () => ({
    get: mockHttp.get,
    post: mockHttp.post
}));

  
describe('JhooseCommerceCart', () => {
    
    afterEach(() => {
        vi.clearAllMocks();
        //vi.resetAllMocks();
        //vi.restoreAllMocks();
      });

    const authenticationContext: AuthenticationContextType = {
        isAnonymous: true,
        endpoint: 'https://api.example.com',
        token: 'test-token',
        customerContext: 'test-customer-context'
    };

    const marketContext: MarketContextType = {
        market: 'US',
        currency: 'USD',
        language: 'en',
        countries: [],
    };

    const cart = new JhooseCommerceCart(authenticationContext, marketContext);

    test('should create a new cart', async () => {
        expect(cart).toBeDefined();
    });
   
    test('should get cart from storage', async () => {

        mockStorage.getStorageItem.mockReturnValue({
            id: 1,
            name: 'Default',
            market: 'US',
            lines: []
        });

        var response = await cart.getDefaultCart(false);
        expect(response).toBeDefined();
        expect(response).toHaveProperty('id');
        expect((response as Cart).id).toBe(1);

        expect(get).toHaveBeenCalledTimes(0);

        expect(getStorageItem).toHaveBeenCalledOnce();
        expect(getStorageItem).toHaveBeenCalledWith('cart');
    });

    test('should get cart from server when market is different', async () => {
        
        mockStorage.getStorageItem.mockReturnValue({
            id: 1,
            name: 'Default',
            market: 'FR',
            lines: []
        });

        mockHttp.get.mockReturnValue([{
            id: 2,
            name: 'Default',
            market: 'US',
            lines: []
        }]);

        var response = await cart.getDefaultCart(false);

        expect(response).toBeDefined();
        expect(response).toHaveProperty('id');
        expect((response as Cart).id).toBe(2);

        expect(getStorageItem).toHaveBeenCalledOnce();
        expect(getStorageItem).toHaveBeenCalledWith('cart');

        expect(setStorageItem).toHaveBeenCalledOnce();

        expect(get).toHaveBeenCalledOnce();
    });

    test('should get cart from server when market is different, but errors', async () => {
        
        mockStorage.getStorageItem.mockReturnValue({
            id: 1,
            name: 'Default',
            market: 'FR',
            lines: []
        });

        mockHttp.get.mockReturnValue({
            code: "500",
            message: 'Internal Server Error'
        });

        var response = await cart.getDefaultCart(false);

        expect(response).toBeDefined();
        expect((response as HttpError).code).toBe("500");
        expect((response as HttpError).message).toBe('Internal Server Error');

        expect(getStorageItem).toHaveBeenCalledOnce();
        expect(getStorageItem).toHaveBeenCalledWith('cart');

        expect(setStorageItem).not.toHaveBeenCalledOnce();

        expect(get).toHaveBeenCalledOnce();
    });

    test('should create a cart', async () => {
        
        mockStorage.getStorageItem.mockReturnValue(null);
        mockHttp.post.mockReturnValue({
            id: 3,
            name: 'Default',
            market: 'US',
            lines: []
        });

        var response = await cart.getDefaultCart(true);

        expect(response).toBeDefined();
        expect(response).toHaveProperty('id');
        expect((response as Cart).id).toBe(3);

        expect(getStorageItem).toHaveBeenCalledOnce();
        expect(getStorageItem).toHaveBeenCalledWith('cart');

        expect(setStorageItem).toHaveBeenCalledOnce();

        expect(post).toHaveBeenCalledOnce();
    });

    test('create cart with httperror', async () => {
        
        mockStorage.getStorageItem.mockReturnValue(null);
        mockHttp.post.mockReturnValue({
            code: "500",
            message: 'Internal Server Error'
        });
        var response = await cart.getDefaultCart(true);

        expect(response).toBeDefined();
        expect((response as HttpError).code).toBe("500");
        expect((response as HttpError).message).toBe('Internal Server Error');

        expect(getStorageItem).toHaveBeenCalledOnce();
        expect(getStorageItem).toHaveBeenCalledWith('cart');

        expect(setStorageItem).not.toHaveBeenCalled();

        expect(post).toHaveBeenCalledOnce();
    });

    test('create cart with null', async () => {
        
        mockStorage.getStorageItem.mockReturnValue(null);
        mockHttp.post.mockReturnValue(null);

        var response = await cart.getDefaultCart(true);

        expect(response).toBeDefined();
        expect((response as HttpError).code).toBe("500");
        expect((response as HttpError).message).toBe('void returned');

        expect(getStorageItem).toHaveBeenCalledOnce();
        expect(getStorageItem).toHaveBeenCalledWith('cart');

        expect(setStorageItem).not.toHaveBeenCalled();

        expect(post).toHaveBeenCalledOnce();
    });
});