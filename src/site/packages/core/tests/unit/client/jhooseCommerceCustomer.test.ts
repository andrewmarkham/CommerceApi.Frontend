import { describe, it, expect, vi, Mock } from 'vitest';
import { JhooseCommerceCustomer } from '../../../src/client/jhooseCommerceCustomer';
import { get, post, put, remove } from '../../../src/http';
import { AuthenticationContextType, Customer, CustomerResponse, CommerceAddress, CommerceAddressResponse, MarketContextType, DeleteCustomerAddressRequest } from '../../../src/types';

vi.mock('@jhoose-commerce/core/http', () => ({
    post: vi.fn(),
    get: vi.fn(),
    put: vi.fn(),
    remove: vi.fn()
}));

const mockAuthContext: AuthenticationContextType = {
    isAnonymous: false,
    endpoint: 'http://mockapi.com',
    token: 'mockToken',
    customerContext: 'mockCustomerContext'
};

const mockMarketContext: MarketContextType = {
    currency: '',
    language: '',
    market: '',
    countries: []
};

describe('JhooseCommerceCustomer', () => {
    const customerClient = new JhooseCommerceCustomer(mockAuthContext, mockMarketContext);

    it('should get customer', async () => {
        const mockResponse: CustomerResponse = { };
        (get as Mock).mockResolvedValue(mockResponse);

        const response = await customerClient.getCustomer();
        expect(response).toEqual(mockResponse);
        expect(get).toHaveBeenCalledWith(
            'http://mockapi.com/commerceapi/customer',
            'mockToken',
            'mockCustomerContext'
        );
    });

    it('should add customer', async () => {
        const mockCustomer: Customer = {
            id: '',
            email: '',
            fullName: '',
            firstName: '',
            lastName: ''
        }; 
        const mockResponse: CustomerResponse = { };
        (post as Mock).mockResolvedValue(mockResponse);

        const response = await customerClient.addCustomer(mockCustomer);
        expect(response).toEqual(mockResponse);
        expect(post).toHaveBeenCalledWith(
            'http://mockapi.com/commerceapi/customer',
            mockCustomer,
            'mockToken',
            'mockCustomerContext'
        );
    });

    it('should update customer', async () => {
        const mockCustomer: Customer = {
            id: '',
            email: '',
            fullName: '',
            firstName: '',
            lastName: ''
        };
        const mockResponse: CustomerResponse = { };
        (put as Mock).mockResolvedValue(mockResponse);

        const response = await customerClient.updateCustomer(mockCustomer);
        expect(response).toEqual(mockResponse);
        expect(put).toHaveBeenCalledWith(
            'http://mockapi.com/commerceapi/customer',
            mockCustomer,
            'mockToken',
            'mockCustomerContext'
        );
    });

    it('should get customer addresses', async () => {
        const mockResponse: CommerceAddressResponse = {  };
        (get as Mock).mockResolvedValue(mockResponse);

        const response = await customerClient.getCustomerAddresses();
        expect(response).toEqual(mockResponse);
        expect(get).toHaveBeenCalledWith(
            'http://mockapi.com/commerceapi/customer/addresses',
            'mockToken',
            'mockCustomerContext'
        );
    });

    it('should add customer address', async () => {
        const mockAddress: CommerceAddress = {
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
            addressTypes: []
        };
        const mockResponse: CommerceAddressResponse = { customerAddresses: [mockAddress] };
        (post as Mock).mockResolvedValue(mockResponse);

        const response = await customerClient.addCustomerAddress(mockAddress);
        expect(response).toEqual(mockResponse);
        expect(post).toHaveBeenCalledWith(
            'http://mockapi.com/commerceapi/customer/addresses',
            mockAddress,
            'mockToken',
            'mockCustomerContext'
        );
    });

    it('should update customer address', async () => {
        const mockAddress: CommerceAddress = {
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
            addressTypes: []
        };
        const mockResponse: CommerceAddressResponse = { customerAddresses: [mockAddress] };
        (put as Mock).mockResolvedValue(mockResponse);

        const response = await customerClient.updateCustomerAddress(mockAddress);
        expect(response).toEqual(mockResponse);
        expect(put).toHaveBeenCalledWith(
            'http://mockapi.com/commerceapi/customer/addresses',
            mockAddress,
            'mockToken',
            'mockCustomerContext'
        );
    });

    it('should remove customer address', async () => {
        const mockRequest: DeleteCustomerAddressRequest = { addressId: "123" };
        const mockResponse: CommerceAddressResponse = { customerAddresses: [] };
        (remove as Mock).mockResolvedValue(mockResponse);

        const response = await customerClient.removeCustomerAddress(mockRequest);
        expect(response).toEqual(mockResponse);
        expect(remove).toHaveBeenCalledWith(
            'http://mockapi.com/commerceapi/customer/addresses/123',
            'mockToken',
            'mockCustomerContext'
        );
    });
});