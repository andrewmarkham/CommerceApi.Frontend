import { describe, it, expect, vi, Mock } from 'vitest';
import { JhooseCommerceCheckout } from '../../../src/client/jhooseCommerceCheckout';

import { AuthenticationContextType, CartResponse, MarketContextType } from '../../../src/types';
import { AddShipmentRequest, AddShippingAddressRequest, AddShippingMethodRequest, RemoveShipmentRequest, ShippingMethodRequest, ShippingMethodsResponse, SplitShipmentRequest } from '../../../src/types/checkout';
import { post, put, remove, patch } from '../../../src/http';

vi.mock('../../../src/http', () => ({
    post: vi.fn(),
    put: vi.fn(),
    remove: vi.fn(),
    patch: vi.fn()
}));

describe('JhooseCommerceCheckout', () => {
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
            notes: [],
        },
        hasErrors: false,
        errors: []
    };

    const checkout = new JhooseCommerceCheckout(authenticationContext, marketContext);

    it('should return shipping methods on successful request', async () => {
        const request: ShippingMethodRequest = {
            marketId: '',
            shippingCountry: '',
            cartId: 0
        };
        const response: ShippingMethodsResponse = {
            shippingMethods: []
        };

        (post as Mock).mockResolvedValue(response);

        const result = await checkout.getShippingMethods(request);

        expect(result).toEqual(response);
        expect(post).toHaveBeenCalledWith(
            `${authenticationContext.endpoint}/commerceapi/checkout/shippingmethods`,
            request,
            authenticationContext.token,
            authenticationContext.customerContext
        );
    });

    it('should return HttpError on failed request', async () => {
        const request: ShippingMethodRequest = {
            marketId: '',
            shippingCountry: '',
            cartId: 0
        };

        (post as Mock).mockResolvedValue(null);

        const result = await checkout.getShippingMethods(request);

        expect(result).toEqual({ code: '500', message: 'Network Error' });
        expect(post).toHaveBeenCalledWith(
            `${authenticationContext.endpoint}/commerceapi/checkout/shippingmethods`,
            request,
            authenticationContext.token,
            authenticationContext.customerContext
        );
    });

    it('should set shipping method successfully', async () => {
        const request: AddShippingMethodRequest = {
            cartId: 0,
            methodId: '1'
        };

        (put as Mock).mockResolvedValue(response);

        const result = await checkout.setShippingMethod(request);

        expect(result).toEqual(response);
        expect(put).toHaveBeenCalledWith(
            `${authenticationContext.endpoint}/commerceapi/checkout/${request.cartId}/shipping/method`,
            { methodId: request.methodId },
            authenticationContext.token,
            authenticationContext.customerContext
        );
    });

    it('should set shipping method successfully, with shipment id', async () => {
        const request: AddShippingMethodRequest = {
            cartId: 0,
            methodId: '1',
            shipmentId: 0
        };

        (put as Mock).mockResolvedValue(response);

        const result = await checkout.setShippingMethod(request);

        expect(result).toEqual(response);
        expect(put).toHaveBeenCalledWith(
            `${authenticationContext.endpoint}/commerceapi/checkout/${request.cartId}/shipping/${request.shipmentId}/method`,
            { methodId: request.methodId },
            authenticationContext.token,
            authenticationContext.customerContext
        );
    });

    it('should return HttpError when setting shipping method fails', async () => {
        const request: AddShippingMethodRequest = {
            cartId: 0,
            methodId: '1'
        };

        (put as Mock).mockResolvedValue(null);

        const result = await checkout.setShippingMethod(request);

        expect(result).toEqual({ code: '500', message: 'Network Error' });
        expect(put).toHaveBeenCalledWith(
            `${authenticationContext.endpoint}/commerceapi/checkout/${request.cartId}/shipping/method`,
            { methodId: request.methodId },
            authenticationContext.token,
            authenticationContext.customerContext
        );
    });

    it('should set shipping address successfully', async () => {
        const request: AddShippingAddressRequest = {
            address: {
                id: '',
                firstName: '',
                lastName: '',
                address: {
                    address1: '',
                    address2: '',
                    address3: '',
                    city: '',
                    postcode: '',
                    state: '',
                    country: {
                        code: '',
                        name: ''
                    }

                },
                phone: '',
                email: '',
                addressTypes: ['Shipping']
            },
            cartId: 0
        };

        (put as Mock).mockResolvedValue(response);

        const result = await checkout.setShippingAddress(request);

        expect(result).toEqual(response);
        expect(put).toHaveBeenCalledWith(
            `${authenticationContext.endpoint}/commerceapi/checkout/${request.cartId}/shipping/address`,
            { address: request.address },
            authenticationContext.token,
            authenticationContext.customerContext
        );
    });

    it('should set shipping address successfully, with shipment if', async () => {
        const request: AddShippingAddressRequest = {
            address: {
                id: '',
                firstName: '',
                lastName: '',
                address: {
                    address1: '',
                    address2: '',
                    address3: '',
                    city: '',
                    postcode: '',
                    state: '',
                    country: {
                        code: '',
                        name: ''
                    }
                },
                phone: '',
                email: '',
                addressTypes: ['Shipping']
            },
            cartId: 0,
            shipmentId: 0
        };

        (put as Mock).mockResolvedValue(response);

        const result = await checkout.setShippingAddress(request);

        expect(result).toEqual(response);
        expect(put).toHaveBeenCalledWith(
            `${authenticationContext.endpoint}/commerceapi/checkout/${request.cartId}/shipping/${request.shipmentId}/address`,
            { address: request.address },
            authenticationContext.token,
            authenticationContext.customerContext
        );
    });

    it('should return HttpError when setting shipping address fails', async () => {
        const request: AddShippingAddressRequest = {
            address: {
                id: '',
                firstName: '',
                lastName: '',
                address: {
                    address1: '',
                    address2: '',
                    address3: '',
                    city: '',
                    postcode: '',
                    state: '',
                    country: {
                        code: '',
                        name: ''
                    }
                },
                phone: '',
                email: '',
                addressTypes: ['Shipping']
            },
            cartId: 0
        };

        (put as Mock).mockResolvedValue(null);

        const result = await checkout.setShippingAddress(request);

        expect(result).toEqual({ code: '500', message: 'Network Error' });
        expect(put).toHaveBeenCalledWith(
            `${authenticationContext.endpoint}/commerceapi/checkout/${request.cartId}/shipping/address`,
            { address: request.address },
            authenticationContext.token,
            authenticationContext.customerContext
        );
    });

    it('should add shipment successfully', async () => {
        const request: AddShipmentRequest = {
            cartId: 0
        };

        (post as Mock).mockResolvedValue(response);

        const result = await checkout.addShipment(request);

        expect(result).toEqual(response);
        expect(post).toHaveBeenCalledWith(
            `${authenticationContext.endpoint}/commerceapi/checkout/${request.cartId}/shipping/`,
            null,
            authenticationContext.token,
            authenticationContext.customerContext
        );
    });

    it('should return HttpError when adding shipment fails', async () => {
        const request: AddShipmentRequest = {
            cartId: 0
        };

        (post as Mock).mockResolvedValue(null);

        const result = await checkout.addShipment(request);

        expect(result).toEqual({ code: '500', message: 'Network Error' });
        expect(post).toHaveBeenCalledWith(
            `${authenticationContext.endpoint}/commerceapi/checkout/${request.cartId}/shipping/`,
            null,
            authenticationContext.token,
            authenticationContext.customerContext
        );
    });

    it('should remove shipment successfully', async () => {
        const request: RemoveShipmentRequest = {
            cartId: 0,
            shipmentId: 0
        };
        
        (remove as Mock).mockResolvedValue(response);

        const result = await checkout.removeShipment(request);

        expect(result).toEqual(response);
        expect(remove).toHaveBeenCalledWith(
            `${authenticationContext.endpoint}/commerceapi/checkout/${request.cartId}/shipping/${request.shipmentId}`,
            authenticationContext.token,
            authenticationContext.customerContext
        );
    });

    it('should return HttpError when removing shipment fails', async () => {
        const request: RemoveShipmentRequest = {
            cartId: 0,
            shipmentId: 0
        };

        (remove as Mock).mockResolvedValue(null);

        const result = await checkout.removeShipment(request);

        expect(result).toEqual({ code: '500', message: 'Network Error' });
        expect(remove).toHaveBeenCalledWith(
            `${authenticationContext.endpoint}/commerceapi/checkout/${request.cartId}/shipping/${request.shipmentId}`,
            authenticationContext.token,
            authenticationContext.customerContext
        );
    });

    it('should split shipment successfully', async () => {
        const request: SplitShipmentRequest = {
            cartId: 0,
            sku: '',
            shipmentId: 0
        };

        (patch as Mock).mockResolvedValue(response);

        const result = await checkout.splitShipment(request);

        expect(result).toEqual(response);
        expect(patch).toHaveBeenCalledWith(
            `${authenticationContext.endpoint}/commerceapi/checkout/${request.cartId}/lines/${request.sku}`,
            { shipmentId: request.shipmentId },
            authenticationContext.token,
            authenticationContext.customerContext
        );
    });

    it('should return HttpError when splitting shipment fails', async () => {
        const request: SplitShipmentRequest = {
            cartId: 0,
            sku: '',
            shipmentId: 0
        };

        (patch as Mock).mockResolvedValue(null);

        const result = await checkout.splitShipment(request);

        expect(result).toEqual({ code: '500', message: 'Network Error' });
        expect(patch).toHaveBeenCalledWith(
            `${authenticationContext.endpoint}/commerceapi/checkout/${request.cartId}/lines/${request.sku}`,
            { shipmentId: request.shipmentId },
            authenticationContext.token,
            authenticationContext.customerContext
        );
    });
});