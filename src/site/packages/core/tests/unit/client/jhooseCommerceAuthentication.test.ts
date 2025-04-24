import { describe, it, expect, vi, Mock } from 'vitest';
import { JhooseCommerceAuthentication } from '@jhoose-commerce/core';
import { get, HttpError } from '../../../src/http';

vi.mock('../../../src/http', () => ({
    get: vi.fn(),
}));

describe('JhooseCommerceAuthentication', () => {
    const endpoint = 'https://api.example.com';
    const token = 'test-token';
    const auth = new JhooseCommerceAuthentication(endpoint, token);

    describe('getCustomerContext', () => {
        it('should return customer context if available', async () => {
            const mockResponse = { isAnonymous: false, customerContext: 'test-context' };
            (get as Mock).mockResolvedValue(mockResponse);

            const result = await auth.getCustomerContext();

            expect(result).toEqual(mockResponse);
            expect(get).toHaveBeenCalledWith(`${endpoint}/commerceapi/authentication/customercontext`, token);
        });

        it('should return HttpError if request fails', async () => {
            const mockError: HttpError = { code: '500', message: 'Network Error' };
            (get as Mock).mockResolvedValue(null);

            const result = await auth.getCustomerContext();

            expect(result).toEqual(mockError);
        });
    });

    describe('getAnonymousUser', () => {
        const authenticationKey = 'auth-key';

        it('should return anonymous authentication response if request is successful', async () => {
            const mockResponse = {
                tokenType: 'Bearer',
                accessToken: 'access-token',
                expiresIn: 3600,
                refreshToken: 'refresh-token',
            };
            global.fetch = vi.fn().mockResolvedValue({
                ok: true,
                json: async () => mockResponse,
            });

            const result = await auth.getAnonymousUser(authenticationKey);

            expect(result).toEqual(mockResponse);
            expect(global.fetch).toHaveBeenCalledWith(`${endpoint}/commerceapi/authentication/`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'X-Auth-Key': authenticationKey,
                },
                body: JSON.stringify({ anonymousId: null }),
            });
        });

        it('should return HttpError if request fails', async () => {
            global.fetch = vi.fn().mockResolvedValue({
                ok: false,
                status: '500',
                statusText: 'Internal Server Error',
            });

            const result = await auth.getAnonymousUser(authenticationKey);

            expect(result).toEqual({ code: '500', message: 'Internal Server Error' });
        });

        it('should handle fetch error', async () => {
            const mockError = new Error('Network Error');
            global.fetch = vi.fn().mockRejectedValue(mockError);

            const result = await auth.getAnonymousUser(authenticationKey);

            expect(result).toEqual({ code: "500", message: "Network Error" });
        });
    });
});