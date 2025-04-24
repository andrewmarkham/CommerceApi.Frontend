[**@jhoose-commerce/core**](../README.md)

***

[@jhoose-commerce/core](../README.md) / migrateCart

# Function: migrateCart()

> **migrateCart**(`anonymousId`, `authenticatedUser`): `Promise`\<`void` \| [`HttpError`](../type-aliases/HttpError.md)\>

Defined in: [client/cart.ts:12](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/cart.ts#L12)

Migrates the cart from an anonymous user to an authenticated user.

## Parameters

### anonymousId

`string`

The ID of the anonymous user's cart.

### authenticatedUser

[`AuthenticationContextType`](../type-aliases/AuthenticationContextType.md)

The authentication context of the authenticated user.

## Returns

`Promise`\<`void` \| [`HttpError`](../type-aliases/HttpError.md)\>

A promise that resolves to void if the migration is successful, or an HttpError if it fails.
