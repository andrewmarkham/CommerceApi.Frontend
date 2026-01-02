import { describe, it, expect, vi, Mock, beforeEach, afterEach, beforeAll } from 'vitest';

import { JhooseCommerceClient, AddToCartRequest, AnonymousAuthenticationResponse, CartResponse, CouponRequest, CustomerContextResponse, JhooseCommerceAuthentication, JhooseCommerceCart, UpdateLineCartRequest, PaymentMethodsRequest, PaymentMethodsResponse, AddPaymentRequest } from '@jhoose-commerce/core';
import { AuthenticationContextType, Cart, MarketContextType } from '@jhoose-commerce/core';

import { AddShipmentRequest, AddShippingAddressRequest, AddShippingMethodRequest, RemoveShipmentRequest, ShippingMethodRequest, ShippingMethodsResponse, SplitShipmentRequest } from '../../../src/types/checkout';

describe('JhooseCommerceCheckout', () => {
    
    const mockStorage = vi.hoisted(() => {
        return {
            getStorageItem: vi.fn(),
        }
    })
    
    vi.mock('@jhoose-commerce/core/storage/storageHelper', () => ({
        getStorageItem: mockStorage.getStorageItem,
        setStorageItem: vi.fn()
    }));

    const authenticationKey = process.env.VITE_COMMERCE_AUTHORIZATION_KEY ?? "";
    const endpoint = process.env.VITE_COMMERCE_ENDPOINT ?? "";
    var token = 'test-token';

    let jhooseClient: JhooseCommerceClient;
    let cart: Cart;

    const response: CartResponse = {
        cart: {
            id: 0,
            name: '',
            customerId: '',
            market: '',
            currency: {
                code: '',
                symbol: ''
            },
            totalPrice: 0,
            subTotalPrice: 0,
            taxTotal: 0,
            orderDiscountTotal: 0,
            shippingTotal: 0,
            shippingDiscountTotal: 0,
            shippingSubTotal: 0,
            forms: [],
            notes: []
        },
        hasErrors: false,
        errors: []
    };

 
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

        jhooseClient = new JhooseCommerceClient(authenticationContext, marketContext);
    });

    beforeEach(async () => {
            mockStorage.getStorageItem.mockReturnValue(null);

            cart = await jhooseClient.cart.getDefaultCart(true) as Cart;
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

            await jhooseClient.cart.addToCart(request) as CartResponse;
    });

    afterEach(async() => {
        await jhooseClient.cart.deleteCart(cart.id);
    });

    it('should return shipping methods on successful request', async () => {
        const request: ShippingMethodRequest = {
            marketId: cart.market,
            shippingCountry: 'US',
            cartId: cart.id
        };

        const result = await jhooseClient.checkout.getShippingMethods(request) as ShippingMethodsResponse;

        expect(result.shippingMethods).not.to.empty;

    });

    it('should return HttpError on failed request', async () => {
        const request: ShippingMethodRequest = {
            marketId: '',
            shippingCountry: '',
            cartId: 0
        };

        const result = await jhooseClient.checkout.getShippingMethods(request);

        expect(result).toEqual({ code: '400', message: 'Bad Request' });
    });

    it('should set shipping method successfully', async () => {

        const shippingMethodRequest: ShippingMethodRequest = {
            marketId: cart.market,
            shippingCountry: 'US',
            cartId: cart.id
        };

        const shippingMethodsResponse = await jhooseClient.checkout.getShippingMethods(shippingMethodRequest) as ShippingMethodsResponse;
        var shippingMethodId = shippingMethodsResponse.shippingMethods[0].id;
        
        const request: AddShippingMethodRequest = {
            methodId: shippingMethodId,
            cartId: cart.id,
        };

        const result = await jhooseClient.checkout.setShippingMethod(request) as CartResponse;

        expect(result.cart.forms[0].shipments[0].shippingMethodId).toEqual(shippingMethodId);
    });

    it('should set shipping method successfully on specifc shipment', async () => {

        const shippingMethodRequest: ShippingMethodRequest = {
            marketId: cart.market,
            shippingCountry: 'US',
            cartId: cart.id
        };

        const shippingMethodsResponse = await jhooseClient.checkout.getShippingMethods(shippingMethodRequest) as ShippingMethodsResponse;
        var shippingMethodId = shippingMethodsResponse.shippingMethods[0].id;
        
        var cartResponse = await jhooseClient.checkout.addShipment({ cartId: cart.id }) as CartResponse;
        expect(cartResponse.cart.forms[0].shipments.length).toEqual(2);

        const request: AddShippingMethodRequest = {
            methodId: shippingMethodId,
            cartId: cart.id,
            shipmentId: cartResponse.cart.forms[0].shipments[1].id
        };

        const result = await jhooseClient.checkout.setShippingMethod(request) as CartResponse;

        expect(result.cart.forms[0].shipments[1].shippingMethodId).toEqual(shippingMethodId);

    });

    it('should return HttpError when setting shipping method fails', async () => {
        const request: AddShippingMethodRequest = {
            methodId: '',
            cartId: cart.id
        };

        const result = await jhooseClient.checkout.setShippingMethod(request);

        expect(result).toEqual({ code: '400', message: 'Bad Request' });

    });

    it('should set shipping address successfully', async () => {
        const request: AddShippingAddressRequest = {
            address: {
                id: '',
                firstName: 'fname',
                lastName: 'lname',
                address: {
                    address1: 'line1',
                    address2: '',
                    address3: '',
                    city: 'city',
                    postcode: 'pocode',
                    state: 'state',
                    country: {
                        code: 'US',
                        name: ''
                    }
                },
                phone: '01234',
                email: 'a@m.com',
                addressTypes: ['Shipping']
            },
            cartId: cart.id
        };

        const result = await jhooseClient.checkout.setShippingAddress(request) as CartResponse;

        expect(result.cart.forms[0].shipments[0].shippingAddress.firstName).toEqual("fname");
    });

    it('should set shipping address successfully on specific shipment', async () => {

        var cartResponse = await jhooseClient.checkout.addShipment({ cartId: cart.id }) as CartResponse;
        expect(cartResponse.cart.forms[0].shipments.length).toEqual(2);

        const request: AddShippingAddressRequest = {
            address: {
                id: '',
                firstName: 'fname',
                lastName: 'lname',
                address: {
                    address1: 'line1',
                    address2: '',
                    address3: '',
                    city: 'city',
                    postcode: 'pocode',
                    state: 'state',
                    country: {
                        code: 'US',
                        name: ''
                    }
                },
                phone: '01234',
                email: 'a@m.com',
                addressTypes: ['Shipping']
            },
            cartId: cart.id,
            shipmentId: cartResponse.cart.forms[0].shipments[1].id
        };

        const result = await jhooseClient.checkout.setShippingAddress(request) as CartResponse;

        expect(result.cart.forms[0].shipments[1].shippingAddress.firstName).toEqual("fname");
    });

    it('should add shipment successfully', async () => {
        const request: AddShipmentRequest = {
            cartId: cart.id
        };

        const result = await jhooseClient.checkout.addShipment(request) as CartResponse;

        expect(result.cart.forms[0].shipments.length).toEqual(2);
    });

    it('should remove shipment successfully', async () => {

        const addRequest: AddShipmentRequest = {
            cartId: cart.id
        };

        const addResult = await jhooseClient.checkout.addShipment(addRequest) as CartResponse;

        expect(addResult.cart.forms[0].shipments.length).toEqual(2);

        const removeRequest: RemoveShipmentRequest = {
            cartId: cart.id,
            shipmentId: addResult.cart.forms[0].shipments[1].id
        };

        const result = await jhooseClient.checkout.removeShipment(removeRequest) as CartResponse;

        expect(result.cart.forms[0].shipments.length).toEqual(1);


    });

    it('should split shipment successfully', async () => {

        const addResult = await jhooseClient.checkout.addShipment({cartId: cart.id}) as CartResponse;

        expect(addResult.cart.forms[0].shipments.length).toEqual(2);

        const request: SplitShipmentRequest = {
            cartId: cart.id,
            sku: 'SKU-41071811',
            shipmentId: addResult.cart.forms[0].shipments[1].id
        };

        const result = await jhooseClient.checkout.splitShipment(request) as CartResponse;

        expect(result.cart.forms[0].shipments[0].lines.length).toEqual(1);
        expect(result.cart.forms[0].shipments[1].lines.length).toEqual(1);
        expect(result.cart.forms[0].shipments[1].lines[0].sku).toEqual('SKU-41071811');
    });

    it('should return payment methods on successful request', async () => {
        const request: PaymentMethodsRequest = {
            marketId: cart.market,
            languageId: 'en',
            shippingCountry: 'US',
            cartId: cart.id
        };

        const result = await jhooseClient.checkout.getPaymentMethods(request) as PaymentMethodsResponse;

        expect(result.paymentMethods).not.to.empty;
    });

    it('should set shipping address successfully', async () => {

        const shippingMethodRequest: ShippingMethodRequest = {
            marketId: cart.market,
            shippingCountry: 'US',
            cartId: cart.id
        };

        const shippingMethodsResponse = await jhooseClient.checkout.getShippingMethods(shippingMethodRequest) as ShippingMethodsResponse;
        var shippingMethodId = shippingMethodsResponse.shippingMethods[0].id;
        
        const shippingMethodrequest: AddShippingMethodRequest = {
            methodId: shippingMethodId,
            cartId: cart.id,
        };

        await jhooseClient.checkout.setShippingMethod(shippingMethodrequest) as CartResponse;

        const request: AddShippingAddressRequest = {
            address: {
                id: '',
                firstName: 'fname',
                lastName: 'lname',
                address: {
                    address1: 'line1',
                    address2: '',
                    address3: '',
                    city: 'city',
                    postcode: 'pocode',
                    state: 'state',
                    country: {
                        code: 'US',
                        name: ''
                    }
                },
                phone: '01234',
                email: 'a@m.com',
                addressTypes: ['Shipping']
            },
            cartId: cart.id
        };

        await jhooseClient.checkout.setShippingAddress(request) as CartResponse;

        var noteRequest = {cartId: cart.id,title: 'test title',message: 'test note'};
            
        var noteResponse = await jhooseClient.checkout.addNote(noteRequest) as CartResponse;

        expect(noteResponse.cart.notes.length).toEqual(1);
        expect(noteResponse.cart.notes[0].title).toEqual('test title');
        expect(noteResponse.cart.notes[0].message).toEqual('test note');

        var paymentRequest = {
            cartId: cart.id,
            paymentMethodId: "a8a5b1b2-80aa-459c-b888-50a9634a6110",
            amount: 100,
            useShippingAddress: true,
            authorizationCode: 'test',
            status: 'Processed',
            transactionID: 'transid', 
            transactionType: 'Sale'
        } as AddPaymentRequest; 
         
        var paymentResponse = await jhooseClient.checkout.addPayment(paymentRequest) as CartResponse;

        expect(paymentResponse.cart.forms[0].payments.length).toEqual(1);
        expect(paymentResponse.cart.forms[0].payments[0].amount).toEqual(100);
        expect(paymentResponse.cart.forms[0].payments[0].status).toEqual('Processed');
        expect(paymentResponse.cart.forms[0].payments[0].transactionID).toEqual('transid'); 
        expect(paymentResponse.cart.forms[0].payments[0].transactionType).toEqual('Sale');
        expect(paymentResponse.cart.forms[0].payments[0].authorizationCode).toEqual('test');
        expect(paymentResponse.cart.forms[0].payments[0].paymentMethodId).toEqual('a8a5b1b2-80aa-459c-b888-50a9634a6110');
    });
});  