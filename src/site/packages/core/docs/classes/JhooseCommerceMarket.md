[**@jhoose-commerce/core**](../README.md)

***

[@jhoose-commerce/core](../README.md) / JhooseCommerceMarket

# Class: JhooseCommerceMarket

Defined in: [client/jhooseCommerceMarket.ts:5](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceMarket.ts#L5)

## Constructors

### new JhooseCommerceMarket()

> **new JhooseCommerceMarket**(`authenticationContext`): [`JhooseCommerceMarket`](JhooseCommerceMarket.md)

Defined in: [client/jhooseCommerceMarket.ts:8](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceMarket.ts#L8)

#### Parameters

##### authenticationContext

[`AuthenticationContextType`](../type-aliases/AuthenticationContextType.md)

#### Returns

[`JhooseCommerceMarket`](JhooseCommerceMarket.md)

## Properties

### authenticationContext

> `readonly` **authenticationContext**: [`AuthenticationContextType`](../type-aliases/AuthenticationContextType.md)

Defined in: [client/jhooseCommerceMarket.ts:6](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceMarket.ts#L6)

## Methods

### determineMarket()

> **determineMarket**(`request`): `Promise`\<[`MarketResponse`](../type-aliases/MarketResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

Defined in: [client/jhooseCommerceMarket.ts:43](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceMarket.ts#L43)

Determines the market based on the provided request.

#### Parameters

##### request

[`MarketRequest`](../type-aliases/MarketRequest.md)

The request object containing market determination parameters.

#### Returns

`Promise`\<[`MarketResponse`](../type-aliases/MarketResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

A promise that resolves to a MarketResponse object or an HttpError.

#### Throws

Throws an error if the network request fails.

***

### getMarkets()

> **getMarkets**(): `Promise`\<[`MarketsResponse`](../type-aliases/MarketsResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

Defined in: [client/jhooseCommerceMarket.ts:22](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceMarket.ts#L22)

Fetches the list of markets from the commerce API.

#### Returns

`Promise`\<[`MarketsResponse`](../type-aliases/MarketsResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

A promise that resolves to a MarketsResponse object
containing the list of markets, or an HttpError object if the request fails.

#### Throws

Throws an error if the request fails.
