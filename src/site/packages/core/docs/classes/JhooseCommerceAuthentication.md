[**@jhoose-commerce/core**](../README.md)

***

[@jhoose-commerce/core](../README.md) / JhooseCommerceAuthentication

# Class: JhooseCommerceAuthentication

Defined in: [client/jhooseCommerceAuthentication.ts:5](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceAuthentication.ts#L5)

## Constructors

### new JhooseCommerceAuthentication()

> **new JhooseCommerceAuthentication**(`endpoint`, `token`): [`JhooseCommerceAuthentication`](JhooseCommerceAuthentication.md)

Defined in: [client/jhooseCommerceAuthentication.ts:10](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceAuthentication.ts#L10)

#### Parameters

##### endpoint

`string`

##### token

`string` = `""`

#### Returns

[`JhooseCommerceAuthentication`](JhooseCommerceAuthentication.md)

## Properties

### endpoint

> `readonly` **endpoint**: `string`

Defined in: [client/jhooseCommerceAuthentication.ts:8](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceAuthentication.ts#L8)

***

### token

> `readonly` **token**: `string`

Defined in: [client/jhooseCommerceAuthentication.ts:7](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceAuthentication.ts#L7)

## Methods

### getAnonymousUser()

> **getAnonymousUser**(`authenticationKey`): `Promise`\<[`HttpError`](../type-aliases/HttpError.md) \| [`AnonymousAuthenticationResponse`](../type-aliases/AnonymousAuthenticationResponse.md)\>

Defined in: [client/jhooseCommerceAuthentication.ts:47](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceAuthentication.ts#L47)

Retrieves an anonymous user authentication response from the commerce API.

#### Parameters

##### authenticationKey

`string`

The key used for authentication.

#### Returns

`Promise`\<[`HttpError`](../type-aliases/HttpError.md) \| [`AnonymousAuthenticationResponse`](../type-aliases/AnonymousAuthenticationResponse.md)\>

A promise that resolves to an `AnonymousAuthenticationResponse` if the request is successful,
or an `HttpError` if the request fails.

#### Throws

Will throw an error if the fetch request fails.

***

### getCustomerContext()

> **getCustomerContext**(): `Promise`\<[`HttpError`](../type-aliases/HttpError.md) \| [`CustomerContextResponse`](../type-aliases/CustomerContextResponse.md)\>

Defined in: [client/jhooseCommerceAuthentication.ts:26](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceAuthentication.ts#L26)

Retrieves the customer context from the storage or fetches it from the server if not available.

#### Returns

`Promise`\<[`HttpError`](../type-aliases/HttpError.md) \| [`CustomerContextResponse`](../type-aliases/CustomerContextResponse.md)\>

A promise that resolves to the customer context or an HTTP error.

The method first attempts to retrieve the customer context from local storage. If the customer context is found in storage,
it is returned immediately. If not, the method makes an HTTP GET request to fetch the customer context from the server.
Upon successful retrieval, the customer context is stored in local storage for future use.
