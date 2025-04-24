import { AuthenticationContextType, CUSTOMER_CONTEXT_COOKIE, JhooseCommerceAuthentication, REMOVE_CART_COOKIE } from "@jhoose-commerce/core";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const COMMERCE_ENDPOINT = process.env.COMMERCE_ENDPOINT ?? "";

const useSecureCookies = process.env.NO_SECURE_COOKIES === "true" ? false : true;

const cookieDuration = 60 * 60 * 24 * 365; // 1 year
const cookieOptions : Partial<ResponseCookie> = {
    sameSite: "lax",
    secure: useSecureCookies,
    httpOnly: false,
    expires: new Date(Date.now() + 1000 * cookieDuration)
 }



/**
 * Checks if the customer context cookie is present in the request.
 *
 * @param request - The incoming Next.js request object, which may be undefined.
 * @returns A boolean indicating whether the customer context cookie is present.
 */
export async function hasCustomerContextCookie(request?: NextRequest) : Promise<boolean> {
    const cookieStore = request?.cookies ?? await cookies();

    return cookieStore.has(CUSTOMER_CONTEXT_COOKIE);
}

/**
 * Retrieves the customer context from a cookie.
 *
 * This function checks if the customer context cookie is present. If it is,
 * it parses the cookie value as JSON and returns it as an `AuthenticationContextType`.
 * If the cookie is not present or cannot be parsed, it returns `undefined`.
 *
 * @returns {Promise<AuthenticationContextType | undefined>} A promise that resolves to the customer context
 * or `undefined` if the cookie is not present or cannot be parsed.
 */
export async function getCustomerContextFromCookie(request?: NextRequest) : Promise<AuthenticationContextType | undefined> {

    const cookieStore = request?.cookies ?? await cookies();

    if (await hasCustomerContextCookie(request)) {

        var customerContextJson = cookieStore.get(CUSTOMER_CONTEXT_COOKIE)?.value;
        if (customerContextJson) {
            var customerContext = JSON.parse(customerContextJson) as AuthenticationContextType;

            return customerContext;
        }
    }
    return undefined;
}

/**
 * Sets the customer context cookie with the provided authentication context.
 *
 * @param {AuthenticationContextType} customerContext - The authentication context to be stored in the cookie.
 */
export async function setCustomerContextCookie(customerContext: AuthenticationContextType, response?: NextResponse) {
    const cookieStore = response?.cookies ?? await cookies();

    cookieStore.set(CUSTOMER_CONTEXT_COOKIE, JSON.stringify(customerContext), cookieOptions);
}

/**
 * Generates the customer context based on the provided access token and anonymity status.
 *
 * @param {string} accessToken - The access token used to authenticate the request.
 * @param {boolean} isAnonymous - Indicates whether the customer is anonymous.
 * @returns {Promise<AuthenticationContextType | undefined>} A promise that resolves to the customer context if successful, or undefined if not.
 */
export async function generateCustomerContext(accessToken: string, isAnonymous: boolean) : Promise<AuthenticationContextType | undefined> {
 
    // Fetch the customer context from the server
    const contextResponse = await new JhooseCommerceAuthentication(COMMERCE_ENDPOINT,accessToken).getCustomerContext();

    if (contextResponse && "customerContext" in contextResponse) {
        const customerContext: AuthenticationContextType = {
          isAnonymous: isAnonymous,
          token: accessToken,
          customerContext: contextResponse.customerContext,
          endpoint: COMMERCE_ENDPOINT
        };

        return customerContext;
    }

    return undefined;
}

/// <summary>
/// Creates a cookie that triggers the  removal of the cart held in local storage.
/// </summary>
export async function removeLocalStorageCart() {
    const cookieStore = await cookies();
    cookieStore.set(REMOVE_CART_COOKIE, "true", {sameSite: "strict", secure: useSecureCookies, httpOnly: false, expires: new Date(Date.now() + 1 * 60)});
}

export async function removeCustomerContext() {
    const cookieStore = await cookies();
    cookieStore.delete(CUSTOMER_CONTEXT_COOKIE);
    removeLocalStorageCart();
}

