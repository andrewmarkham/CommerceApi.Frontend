import { describe, it, expect, vi, Mock } from 'vitest';
import { post } from '@jhoose-commerce/core';

global.fetch = vi.fn();

describe('post', () => {
    const url = 'https://api.example.com/resource';
    const body = { key: 'value' };
    const token = 'test-token';
    const customerContext = 'test-context';

    it('should return data when the request is successful', async () => {
        const mockResponse = { data: 'test' };
        (fetch as Mock).mockResolvedValue({
            ok: true,
            body: "fake body",
            json: async () => mockResponse,
        });

        const result = await post<typeof mockResponse>(url, body, token, customerContext);
        expect(result).toEqual(mockResponse);
    });

    it('should return an error when the request fails', async () => {
        const mockError = { code: '500', message: 'Internal Server Error' };
        (fetch as any).mockResolvedValue({
            ok: false,
            status: 500,
            statusText: 'Internal Server Error',
        });

        const result = await post(url, body, token, customerContext);
        expect(result).toEqual(mockError);
    });

    it('should return an error when fetch throws an exception', async () => {
        const mockError = { code: 'NETWORK_ERROR', message: 'Failed to fetch' };
        (fetch as any).mockRejectedValue({
            code: 'NETWORK_ERROR',
            message: 'Failed to fetch',
        });

        const result = await post(url, body, token, customerContext);
        expect(result).toEqual(mockError);
    });

    it('should use force-cache when cache is true', async () => {
        (fetch as any).mockResolvedValue({
            ok: true,
            json: async () => ({}),
        });

        await post(url, body, token, customerContext, true);
        expect(fetch).toHaveBeenCalledWith(url, expect.objectContaining({
            cache: 'force-cache',
        }));
    });

    it('should use no-store when cache is false', async () => {
        (fetch as any).mockResolvedValue({
            ok: true,
            json: async () => ({}),
        });

        await post(url, body, token, customerContext, false);
        expect(fetch).toHaveBeenCalledWith(url, expect.objectContaining({
            cache: 'no-store',
        }));
    });
});