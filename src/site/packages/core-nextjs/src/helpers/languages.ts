import type { NextRequest } from 'next/server';

/**
 * Extracts the language code from the URL path of the given request.
 *
 * @param {NextRequest} request - The incoming request object.
 * @returns {string} The language code extracted from the URL path.
 */
export function getLanguageFromRequest(request: NextRequest) : string {
    return request.nextUrl.pathname.split('/')[1];
}
