import { HttpError, post } from "../http";

import { AuthenticationContextType } from "../types";

/**
 * Migrates the cart from an anonymous user to an authenticated user.
 *
 * @param anonymousId - The ID of the anonymous user's cart.
 * @param authenticatedUser - The authentication context of the authenticated user.
 * @returns A promise that resolves to void if the migration is successful, or an HttpError if it fails.
 */
export async function migrateCart(anonymousId: string, authenticatedUser: AuthenticationContextType): Promise<void | HttpError> {
    const cartRequestUrl = `${authenticatedUser.endpoint}/commerceapi/cart/migrate`;

    const cartResponse = await post<void>(
      cartRequestUrl,
      {
        anonymousId: anonymousId
      },
      authenticatedUser.token,
      authenticatedUser.customerContext
    );

    return cartResponse;
}
