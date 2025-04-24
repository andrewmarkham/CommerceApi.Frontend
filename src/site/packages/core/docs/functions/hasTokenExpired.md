[**@jhoose-commerce/core**](../README.md)

***

[@jhoose-commerce/core](../README.md) / hasTokenExpired

# Function: hasTokenExpired()

> **hasTokenExpired**(`token`): `boolean`

Defined in: [authentication/jwtHelper.ts:12](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/authentication/jwtHelper.ts#L12)

Checks if a given JWT token has expired.

## Parameters

### token

`string`

The JWT token to check.

## Returns

`boolean`

`true` if the token is empty, undefined, or expired; otherwise, `false`.
