[**@jhoose-commerce/core**](../README.md)

***

[@jhoose-commerce/core](../README.md) / JhooseCommerceCart

# Class: JhooseCommerceCart

Defined in: [client/jhooseCommerceCart.ts:9](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCart.ts#L9)

## Constructors

### new JhooseCommerceCart()

> **new JhooseCommerceCart**(`authenticationContext`, `marketContext`): [`JhooseCommerceCart`](JhooseCommerceCart.md)

Defined in: [client/jhooseCommerceCart.ts:13](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCart.ts#L13)

#### Parameters

##### authenticationContext

[`AuthenticationContextType`](../type-aliases/AuthenticationContextType.md)

##### marketContext

[`MarketContextType`](../type-aliases/MarketContextType.md)

#### Returns

[`JhooseCommerceCart`](JhooseCommerceCart.md)

## Properties

### authenticationContext

> `readonly` **authenticationContext**: [`AuthenticationContextType`](../type-aliases/AuthenticationContextType.md)

Defined in: [client/jhooseCommerceCart.ts:10](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCart.ts#L10)

***

### marketContext

> `readonly` **marketContext**: [`MarketContextType`](../type-aliases/MarketContextType.md)

Defined in: [client/jhooseCommerceCart.ts:11](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCart.ts#L11)

## Methods

### addCoupon()

> **addCoupon**(`request`): `Promise`\<[`CartResponse`](../type-aliases/CartResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

Defined in: [client/jhooseCommerceCart.ts:278](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCart.ts#L278)

Adds a coupon to the cart.

#### Parameters

##### request

[`CouponRequest`](../type-aliases/CouponRequest.md)

The request object containing the cart ID and coupon code.

#### Returns

`Promise`\<[`CartResponse`](../type-aliases/CartResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

- A promise that resolves to a CartResponse if successful, or an HttpError if an error occurs.

#### Throws

- Throws an error if the default cart is not found.

***

### addToCart()

> **addToCart**(`request`): `Promise`\<[`CartResponse`](../type-aliases/CartResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

Defined in: [client/jhooseCommerceCart.ts:27](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCart.ts#L27)

Adds items to a cart. If the cart does not exist, a new cart will be created.

#### Parameters

##### request

[`AddToCartRequest`](../type-aliases/AddToCartRequest.md)

The request object containing the cart id and items to add.

#### Returns

`Promise`\<[`CartResponse`](../type-aliases/CartResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

A promise that resolves to the updated cart or an HttpError.

***

### deleteCart()

> **deleteCart**(`id`): `Promise`\<`void` \| [`CartResponse`](../type-aliases/CartResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

Defined in: [client/jhooseCommerceCart.ts:255](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCart.ts#L255)

Deletes a cart by its ID.

#### Parameters

##### id

`number`

The ID of the cart to delete.

#### Returns

`Promise`\<`void` \| [`CartResponse`](../type-aliases/CartResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

A promise that resolves to a CartResponse, HttpError, or void.

***

### getCart()

> **getCart**(`id`): `Promise`\<`null` \| [`Cart`](../type-aliases/Cart.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

Defined in: [client/jhooseCommerceCart.ts:222](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCart.ts#L222)

Retrieves a cart by its ID.

#### Parameters

##### id

`number`

The ID of the cart to retrieve.

#### Returns

`Promise`\<`null` \| [`Cart`](../type-aliases/Cart.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

A promise that resolves to the cart object if found, 
an HttpError if an error occurs, or null if no cart is found.

#### Remarks

This method sends a GET request to the commerce API to fetch the cart details.
If the cart is found, it is stored in the local storage.

#### Example

```typescript
const cart = await getCart(123);
if (cart) {
  console.log('Cart retrieved:', cart);
} else {
  console.log('Cart not found or an error occurred.');
}
```

***

### getCarts()

> **getCarts**(): `Promise`\<[`HttpError`](../type-aliases/HttpError.md) \| [`Cart`](../type-aliases/Cart.md)[]\>

Defined in: [client/jhooseCommerceCart.ts:187](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCart.ts#L187)

Retrieves the list of carts for the user.

#### Returns

`Promise`\<[`HttpError`](../type-aliases/HttpError.md) \| [`Cart`](../type-aliases/Cart.md)[]\>

A promise that resolves to an array of Cart objects or an HttpError.

***

### getDefaultCart()

> **getDefaultCart**(`create`): `Promise`\<`null` \| [`Cart`](../type-aliases/Cart.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

Defined in: [client/jhooseCommerceCart.ts:127](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCart.ts#L127)

Retrieves the default cart for the current user. If the cart does not exist and the `create` parameter is true,
a new cart will be created.

#### Parameters

##### create

`boolean`

A flag indicating whether to create a new cart if it does not exist.

#### Returns

`Promise`\<`null` \| [`Cart`](../type-aliases/Cart.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

A promise that resolves to the default cart or an HttpError or null.

***

### removeCoupon()

> **removeCoupon**(`request`): `Promise`\<[`CartResponse`](../type-aliases/CartResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

Defined in: [client/jhooseCommerceCart.ts:321](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCart.ts#L321)

Removes a coupon from the cart.

#### Parameters

##### request

[`CouponRequest`](../type-aliases/CouponRequest.md)

The request object containing the cart ID and coupon code.

#### Returns

`Promise`\<[`CartResponse`](../type-aliases/CartResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

- A promise that resolves to the cart response or an HTTP error.

#### Throws

- Throws an error if the default cart is not found.

***

### removeLineFromCart()

> **removeLineFromCart**(`cartId`, `sku`): `Promise`\<[`CartResponse`](../type-aliases/CartResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

Defined in: [client/jhooseCommerceCart.ts:101](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCart.ts#L101)

Removes a line from a cart.

#### Parameters

##### cartId

`number`

The ID of the cart to remove the line from.

##### sku

`string`

The sku to remove from the cart.

#### Returns

`Promise`\<[`CartResponse`](../type-aliases/CartResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

A promise that resolves to the updated cart or an HttpError.

***

### updateCartLine()

> **updateCartLine**(`request`): `Promise`\<[`CartResponse`](../type-aliases/CartResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

Defined in: [client/jhooseCommerceCart.ts:67](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCart.ts#L67)

Updates the quantity of a line in a cart.

#### Parameters

##### request

[`UpdateLineCartRequest`](../type-aliases/UpdateLineCartRequest.md)

The request object containing the cart id, line id, sku, and quantity.

#### Returns

`Promise`\<[`CartResponse`](../type-aliases/CartResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

A promise that resolves to the updated cart or an HttpError.
