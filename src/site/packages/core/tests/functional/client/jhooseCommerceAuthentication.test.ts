import { describe, it, expect} from 'vitest';
import { AnonymousAuthenticationResponse, CustomerContextResponse, JhooseCommerceAuthentication } from '@jhoose-commerce/core';

describe('JhooseCommerceAuthentication', () => {
    const endpoint = process.env.VITE_COMMERCE_ENDPOINT ?? "";
    const token = 'test-token';
    const auth = new JhooseCommerceAuthentication(endpoint, token);

    describe('getAnonymousUser', () => {
        const authenticationKey = process.env.VITE_COMMERCE_AUTHORIZATION_KEY ?? "";

        it('should return anonymous authentication response if request is successful', async () => {
            const mockResponse = {
                tokenType: 'Bearer',
                accessToken: 'access-token',
                expiresIn: 7200,
                refreshToken: '',
            };

            const result = await auth.getAnonymousUser(authenticationKey) as AnonymousAuthenticationResponse;

            expect(result.tokenType).toEqual(mockResponse.tokenType);
            expect(result.accessToken).not.empty;
            expect(result.expiresIn).toEqual(mockResponse.expiresIn);
            expect(result.refreshToken).toEqual(mockResponse.refreshToken);
        });

        it('should return HttpError if request fails', async () => {
            const result = await auth.getAnonymousUser("invalid-key");

            expect(result).toEqual({ code: '401', message: 'Unauthorized' });
        });
    });


    describe('getCustomerContext', () => {
        it('should return customer context if available', async () => {
            const authenticationKey = 'Y2QxYjc1Nzc2ODQ5NDg1MGEzYzI4MGFkZGE2MDczNzM=';
            const mockResponse = { isAnonymous: true, customerContext: 'test-context' };

            var authResponse = await auth.getAnonymousUser(authenticationKey) as AnonymousAuthenticationResponse;
            const innerAuth = new JhooseCommerceAuthentication(endpoint, authResponse.accessToken);

            const result = await innerAuth.getCustomerContext() as CustomerContextResponse;

            expect(result.isAnonymous).toEqual(mockResponse.isAnonymous);
            expect(result.customerContext).not.empty;
        });
    });

});