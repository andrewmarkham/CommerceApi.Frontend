import { describe, expect, vi, test, beforeAll } from 'vitest';
import { AddToCartRequest, AnonymousAuthenticationResponse, CartResponse, CouponRequest, CustomerContextResponse, JhooseCommerceAuthentication, JhooseCommerceCart, UpdateLineCartRequest } from '@jhoose-commerce/core';
import { AuthenticationContextType, Cart, MarketContextType } from '@jhoose-commerce/core';

const mockStorage = vi.hoisted(() => {
    return {
        getStorageItem: vi.fn(),
    }
  })


vi.mock('@jhoose-commerce/core/storage/storageHelper', () => ({
    getStorageItem: mockStorage.getStorageItem,
    setStorageItem: vi.fn()
}));



let cartService: JhooseCommerceCart;

describe('JhooseCommerceCart', () => {
    
    const authenticationKey = process.env.VITE_COMMERCE_AUTHORIZATION_KEY ?? "";
    const endpoint = process.env.VITE_COMMERCE_ENDPOINT ?? "";
    var token = 'test-token';

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

        cartService = new JhooseCommerceCart(authenticationContext, marketContext);
    });

    describe('Cart Actions', () => {
        test('defaultCart should be null', async () => {

            mockStorage.getStorageItem.mockReturnValue(null);
    
            var cart = await cartService.getDefaultCart(false);
            expect(cart).toBeNull();
        });
       
        test('defaultCart should create when requested', async () => {
    
            mockStorage.getStorageItem.mockReturnValue(null);
    
            var cart = await cartService.getDefaultCart(true) as Cart;
            expect(cart).not.toBeNull();
    
            await cartService.deleteCart(cart.id);
        });
    
        test('create cart,  then delete', async () => {
    
            mockStorage.getStorageItem.mockReturnValue(null);
    
            var cart = await cartService.getDefaultCart(true) as Cart;
            expect(cart).not.toBeNull();
    
            await cartService.deleteCart(cart.id);
            var allCarts = await cartService.getCarts() as Cart[];
    
            expect(allCarts.length).to.equal(0);
        });
    });

    describe('Cart Line Actions', () => {
        test('create a cart and add a line', async () => {

            mockStorage.getStorageItem.mockReturnValue(null);

            let cart = await cartService.getDefaultCart(true) as Cart;
            expect(cart).not.toBeNull();

            var request: AddToCartRequest = {
                cartId: cart.id,
                items: [
                    {
                        sku: "SKU-39813617",
                        qty: 1
                    }
                ]
            };

            var cartResponse = await cartService.addToCart(request) as CartResponse;
            
            expect(cartResponse).not.toBeNull();
            expect(cartResponse.cart.forms[0].shipments[0].lines.length).to.equal(1);
            expect(cartResponse.cart.forms[0].shipments[0].lines[0].sku).to.equal("SKU-39813617");
            expect(cartResponse.cart.forms[0].shipments[0].lines[0].qty).to.equal(1);

            await cartService.deleteCart(cart.id);
        });

        test('create a cart and add a line, invalid sku', async () => {

            mockStorage.getStorageItem.mockReturnValue(null);

            let cart = await cartService.getDefaultCart(true) as Cart;
            expect(cart).not.toBeNull();

            var request: AddToCartRequest = {
                cartId: cart.id,
                items: [
                    {
                        sku: "SKU-XXXXXXXXX",
                        qty: 1
                    }
                ]
            };

            var cartResponse = await cartService.addToCart(request) as CartResponse;
            
            expect(cartResponse).not.toBeNull();
            //expect(cartResponse.hasErrors).to.equal(true);
            //expect(cartResponse.errors.length).to.equal(1);

            expect(cartResponse.cart.forms[0].shipments[0].lines.length).to.equal(0);

            await cartService.deleteCart(cart.id);
        });

        test('create a cart and add a line, and then update', async () => {

            mockStorage.getStorageItem.mockReturnValue(null);

            let cart = await cartService.getDefaultCart(true) as Cart;
            expect(cart).not.toBeNull();

            var request: AddToCartRequest = {
                cartId: cart.id,
                items: [
                    {
                        sku: "SKU-39813617",
                        qty: 1
                    },
                    {
                        sku: "SKU-41071811",
                        qty: 2
                    }
                ]
            };

            var cartResponse = await cartService.addToCart(request) as CartResponse;

            var updateRequest: UpdateLineCartRequest = {
                cartId: cartResponse.cart.id,
                lineId: cartResponse.cart.forms[0].shipments[0].lines[0].id,
                sku: "SKU-39813617",
                qty: 5
            };

            var cartResponse = await cartService.updateCartLine(updateRequest) as CartResponse;
            
            expect(cartResponse).not.toBeNull();
            expect(cartResponse.cart.forms[0].shipments[0].lines.length).to.equal(2);
            expect(cartResponse.cart.forms[0].shipments[0].lines[0].sku).to.equal("SKU-39813617");
            expect(cartResponse.cart.forms[0].shipments[0].lines[0].qty).to.equal(5);

            await cartService.deleteCart(cart.id);
        });

        test('create a cart and add a line, and then remove', async () => {

            mockStorage.getStorageItem.mockReturnValue(null);

            let cart = await cartService.getDefaultCart(true) as Cart;
            expect(cart).not.toBeNull();

            var request: AddToCartRequest = {
                cartId: cart.id,
                items: [
                    {
                        sku: "SKU-39813617",
                        qty: 1
                    },
                    {
                        sku: "SKU-41071811",
                        qty: 2
                    }
                ]
            };

            var cartResponse = await cartService.addToCart(request) as CartResponse;

            var cartResponse = await cartService.removeLineFromCart(cartResponse.cart.id,"SKU-39813617") as CartResponse;

            expect(cartResponse).not.toBeNull();
            expect(cartResponse.cart.forms[0].shipments[0].lines.length).to.equal(1);
            expect(cartResponse.cart.forms[0].shipments[0].lines[0].sku).to.equal("SKU-41071811");
            expect(cartResponse.cart.forms[0].shipments[0].lines[0].qty).to.equal(2);

            await cartService.deleteCart(cart.id);

            var allCarts = await cartService.getCarts() as Cart[];
            expect(allCarts.length).to.equal(0);
        });
    });

    describe('Cart Coupon Actions', () => {
        test('create a cart and add a coupon', async () => {

            mockStorage.getStorageItem.mockReturnValue(null);

            let cart = await cartService.getDefaultCart(true) as Cart;
            expect(cart).not.toBeNull();

            var cartRequest: AddToCartRequest = {
                cartId: cart.id,
                items: [
                    {
                        sku: "SKU-39813617",
                        qty: 1
                    }
                ]
            };

            var cartResponse = await cartService.addToCart(cartRequest) as CartResponse;

            var request: CouponRequest = {
                cartId: cart.id,
                couponCode: "newyear10"
            };
            var cartResponse = await cartService.addCoupon(request) as CartResponse;    

            expect(cartResponse).not.toBeNull();
            expect(cartResponse.cart.forms[0].coupons.length).to.equal(1);
            expect(cartResponse.cart.forms[0].coupons[0]).to.equal("newyear10");

            await cartService.deleteCart(cart.id);
        });

        test('create a cart and add a coupon, invalid coupon', async () => {

            mockStorage.getStorageItem.mockReturnValue(null);

            let cart = await cartService.getDefaultCart(true) as Cart;
            expect(cart).not.toBeNull();

            var cartRequest: AddToCartRequest = {
                cartId: cart.id,
                items: [
                    {
                        sku: "SKU-39813617",
                        qty: 1
                    }
                ]
            };

            var cartResponse = await cartService.addToCart(cartRequest) as CartResponse;


            var request: CouponRequest = {
                cartId: cart.id,
                couponCode: "INVALID-COUPON"
            };
            var cartResponse = await cartService.addCoupon(request) as CartResponse;

            expect(cartResponse).not.toBeNull();
            expect(cartResponse.cart.forms[0].coupons.length).to.equal(0);

            await cartService.deleteCart(cart.id);
        });

        test('create a cart and add a coupon, and then remove', async () => {

            mockStorage.getStorageItem.mockReturnValue(null);

            let cart = await cartService.getDefaultCart(true) as Cart;
            expect(cart).not.toBeNull();

            var cartRequest: AddToCartRequest = {
                cartId: cart.id,
                items: [
                    {
                        sku: "SKU-39813617",
                        qty: 1
                    }
                ]
            };

            var cartResponse = await cartService.addToCart(cartRequest) as CartResponse;

            var request: CouponRequest = {
                cartId: cart.id,
                couponCode: "newyear10"
            };
            var cartResponse = await cartService.addCoupon(request) as CartResponse;    

            expect(cartResponse).not.toBeNull();
            expect(cartResponse.cart.forms[0].coupons.length).to.equal(1);
            expect(cartResponse.cart.forms[0].coupons[0]).to.equal("newyear10");

            var cartResponse = await cartService.removeCoupon(request) as CartResponse;

            expect(cartResponse).not.toBeNull();
            expect(cartResponse.cart.forms[0].coupons.length).to.equal(0);

            await cartService.deleteCart(cart.id);
        });
    });
});