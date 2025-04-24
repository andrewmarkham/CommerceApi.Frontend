[**@jhoose-commerce/core**](../README.md)

***

[@jhoose-commerce/core](../README.md) / CartResponse

# Type Alias: CartResponse

> **CartResponse**: `object`

Defined in: [types/cart.ts:32](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/types/cart.ts#L32)

Represents the response structure for a cart operation.

## Type declaration

### cart

> **cart**: [`Cart`](Cart.md)

The cart object containing the details of the cart.

### errors

> **errors**: [`CartError`](CartError.md)[]

An array of errors encountered during the cart operation.

### hasErrors

> **hasErrors**: `boolean`

Indicates whether there are any errors in the cart operation.
