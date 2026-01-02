import { describe, it, expect, beforeAll } from 'vitest';

import { JhooseCommerceCustomer, JhooseCommerceAuthentication, AnonymousAuthenticationResponse,CustomerContextResponse, AuthenticationContextType, Customer, CustomerResponse, CommerceAddress, CommerceAddressResponse, MarketContextType, post } from '@jhoose-commerce/core';

const endpoint = process.env.VITE_COMMERCE_ENDPOINT ?? "";
var token = 'test-token';

const auth0Url = process.env.VITE_AUTH0_URL ?? "";

const auth0ClientId = process.env.VITE_AUTH0_CLIENT_ID ?? "";
const auth0ClientSecret = process.env.VITE_AUTH0_CLIENT_SECRET ?? "";

const username = process.env.VITE_AUTH0_USERNAME ?? "";
const password = process.env.VITE_AUTH0_PASSWORD ?? "";

let customerService: JhooseCommerceCustomer;

describe('JhooseCommerceCustomer', async () => {

    beforeAll(async () => {

        const auth0Token = btoa(`${auth0ClientId}:${auth0ClientSecret}`);
        token = await Auth0Login(auth0Url, auth0Token, username, password);
        console.log(username)
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
    
        customerService = new JhooseCommerceCustomer(authenticationContext, marketContext);
    });

    it('should get customer', async () => {

        const response = await customerService.getCustomer() as CustomerResponse;
        expect(response.customer?.email).toEqual(username);
    });

    it('should update customer', async () => {
         
        const customerResponse = await customerService.getCustomer() as CustomerResponse;
        console.log(customerResponse.customer);
        customerResponse.customer!.firstName = 'John';

        const response = await customerService.updateCustomer(customerResponse.customer!) as CustomerResponse;
        console.log(response);
        expect(response.customer?.firstName).toEqual('John');
    });

    it('should get customer addresses', async () => {
        const response = await customerService.getCustomerAddresses() as CommerceAddressResponse;
        expect(response.customerAddresses?.length).greaterThan(0);

    });

    it('should add customer address', async () => {

        const addressesResponse = await customerService.getCustomerAddresses() as CommerceAddressResponse;

        const mockAddress: CommerceAddress = {
            id: '',
            firstName: 'Test',
            lastName: 'Test',
            address: {
                line1: 'line1',
                line2: '',
                line3: '',
                city: 'city',
                postcode: 'postcode',
                state: 'state',
                country: {
                    code: 'US',
                    name: ''
                }  
            },
            phone: 'phone',
            email: 'email',
            addressTypes: ['Shipping']
        };

        const response = await customerService.addCustomerAddress(mockAddress) as CommerceAddressResponse;
        
        expect(response.customerAddresses?.length).toEqual(addressesResponse.customerAddresses!.length + 1);
        expect(response.customerAddresses?.find(x => x.firstName === 'Test')).not.toBeNull();
        var address = response.customerAddresses?.find(x => x.firstName === 'Test');

        const deleteResponse = await customerService.removeCustomerAddress({
                addressId: address!.id
            }) as CommerceAddressResponse;


        expect(deleteResponse.customerAddresses?.length).toEqual(addressesResponse.customerAddresses!.length);
        
    });

    it('should update customer address', async () => {
        const addressesResponse = await customerService.getCustomerAddresses() as CommerceAddressResponse;

        const mockAddress: CommerceAddress = {
            id: '',
            firstName: 'Test',
            lastName: 'Test',
            address: {
                line1: 'line1',
                line2: '',
                line3: '',
                city: 'city',
                postcode: 'postcode',
                state: 'state',
                country: {
                    code: 'US',
                    name: ''
                }  
            },
            phone: 'phone',
            email: 'email',
            addressTypes: ['Shipping']
        };

        const response = await customerService.addCustomerAddress(mockAddress) as CommerceAddressResponse;
        
        expect(response.customerAddresses?.length).toEqual(addressesResponse.customerAddresses!.length + 1);
        expect(response.customerAddresses?.find(x => x.firstName === 'Test')).not.toBeNull();
        var address = response.customerAddresses?.find(x => x.firstName === 'Test');

        address!.firstName = 'Test 1';
        const updateAddressResponse = await customerService.updateCustomerAddress(address!) as CommerceAddressResponse;
        expect(updateAddressResponse.customerAddresses?.find(x => x.firstName === 'Test 1')).not.toBeNull();

        const deleteResponse = await customerService.removeCustomerAddress({
                addressId: address!.id
            }) as CommerceAddressResponse;


        expect(deleteResponse.customerAddresses?.length).toEqual(addressesResponse.customerAddresses!.length);
    });
});

async function Auth0Login(url: string, token: string, username: string, password: string) {
    
    const bodyData = {
        grant_type: 'password',
        username: username,
        password: password,
        scope: 'openid profile email',
        audience: 'https://test.api'
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${token}`,
        },
        body: new URLSearchParams(bodyData).toString()
    });

    if (!response.ok) {
        console.log(await response.text());
        //throw new Error(`HTTP error! status: ${response.status}`);
    }

    var json = await response.json();
    return json.access_token;
}
