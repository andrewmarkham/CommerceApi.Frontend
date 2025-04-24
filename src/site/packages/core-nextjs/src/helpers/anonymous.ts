import { ANONYMOUS_ID_COOKIE, decodeJwt, JhooseCommerceAuthentication } from "@jhoose-commerce/core";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const cookieDuration = 60 * 60 * 24 * 365; // 1 year

const useSecureCookies = process.env.NO_SECURE_COOKIES === "true" ? false : true;

const COMMERCE_ENDPOINT = process.env.COMMERCE_ENDPOINT ?? "";
const authorizationKey = process.env.COMMERCE_AUTHORIZATION_KEY ?? "";

/**
 * Generates an anonymous token for authentication.
 *
 * This function handles the process of generating an anonymous token by making a request
 * to the JhooseCommerceAuthentication service. It logs the request and response for debugging purposes.
 *
 * @returns {Promise<string | undefined>} A promise that resolves to the anonymous access token if successful, or undefined if not.
 */
export async function generateAnonymousToken() : Promise<string | undefined> {

    console.log("Generating anonymous token...");
    console.log("Commerce endpoint: ", COMMERCE_ENDPOINT);
    console.log("Authorization key: ", authorizationKey);
    console.log("CNO_SECURE_COOKIES: ", process.env.NO_SECURE_COOKIES);
    console.log("useSecureCookies: ", useSecureCookies);

    const anonymousResponse = await new JhooseCommerceAuthentication(COMMERCE_ENDPOINT).getAnonymousUser(authorizationKey);

    console.log("Anonymous response: ", anonymousResponse);
    if (anonymousResponse && "accessToken" in anonymousResponse) {
        return anonymousResponse.accessToken;
    }
    return undefined;
}


/**
 * Sets a cookie with the anonymous ID extracted from the provided JWT token.
 *
 * @param token - The JWT token from which the anonymous ID (jti) is extracted.
 *
 * The cookie is set with the following properties:
 * - `sameSite`: "lax"
 * - `secure`: true
 * - `httpOnly`: true
 * - `expires`: The cookie will expire after a duration specified by `cookieDuration`.
 */
export async function setAnonymousIdCookie( token: string, response?: NextResponse) {
    const cookieStore = response?.cookies ?? await cookies();
    var id = decodeJwt(token).jti as string;
    if (id) {
        cookieStore.set(ANONYMOUS_ID_COOKIE, id, {sameSite: "lax", secure: useSecureCookies, httpOnly: false, expires: new Date(Date.now() + 1000 * cookieDuration)});
    }
}

/**
 * Retrieves the value of the anonymous ID cookie.
 *
 * @returns {string | undefined} The value of the anonymous ID cookie if it exists, otherwise `undefined`.
 */
export async function getAnonymousIdCookie() : Promise<string | undefined> {
    return (await cookies()).get(ANONYMOUS_ID_COOKIE)?.value;
}

/**
 * Removes the anonymous ID cookie from the client's browser.
 *
 * This function deletes the cookie identified by `ANONYMOUS_ID_COOKIE`.
 */
export async function removeAnonymousIdCookie() {
    (await cookies()).delete(ANONYMOUS_ID_COOKIE);
    console.log('Anonymous ID cookie removed');
}
