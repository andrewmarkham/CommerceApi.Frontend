[**@jhoose-commerce/core**](../README.md)

***

[@jhoose-commerce/core](../README.md) / JhooseCommerceProduct

# Class: JhooseCommerceProduct

Defined in: [client/jhooseCommerceProduct.ts:8](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceProduct.ts#L8)

## Constructors

### new JhooseCommerceProduct()

> **new JhooseCommerceProduct**(`authenticationContext`, `marketContext`): [`JhooseCommerceProduct`](JhooseCommerceProduct.md)

Defined in: [client/jhooseCommerceProduct.ts:12](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceProduct.ts#L12)

#### Parameters

##### authenticationContext

[`AuthenticationContextType`](../type-aliases/AuthenticationContextType.md)

##### marketContext

[`MarketContextType`](../type-aliases/MarketContextType.md)

#### Returns

[`JhooseCommerceProduct`](JhooseCommerceProduct.md)

## Properties

### authenticationContext

> `readonly` **authenticationContext**: [`AuthenticationContextType`](../type-aliases/AuthenticationContextType.md)

Defined in: [client/jhooseCommerceProduct.ts:9](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceProduct.ts#L9)

***

### marketContext

> `readonly` **marketContext**: [`MarketContextType`](../type-aliases/MarketContextType.md)

Defined in: [client/jhooseCommerceProduct.ts:10](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceProduct.ts#L10)

## Methods

### getPriceAndInventory()

> **getPriceAndInventory**(`request`): `Promise`\<[`PriceInventoryResponse`](../type-aliases/PriceInventoryResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

Defined in: [client/jhooseCommerceProduct.ts:29](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceProduct.ts#L29)

Retrieves the price and inventory information for a given product.

#### Parameters

##### request

[`PriceInventoryRequest`](../type-aliases/PriceInventoryRequest.md)

The request object containing the product code and other necessary details.

#### Returns

`Promise`\<[`PriceInventoryResponse`](../type-aliases/PriceInventoryResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

A promise that resolves to the price and inventory response or an HTTP error.

#### Throws

Throws an error if the network request fails.
