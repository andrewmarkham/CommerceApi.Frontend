[**@jhoose-commerce/core**](../README.md)

***

[@jhoose-commerce/core](../README.md) / post

# Function: post()

> **post**\<`T`\>(`url`, `body`, `token`, `customerContext`, `cache`?): `Promise`\<`void` \| [`HttpError`](../type-aliases/HttpError.md) \| `T`\>

Defined in: [http/helper.ts:15](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/http/helper.ts#L15)

Sends a POST request to the specified URL with the given body and headers.

## Type Parameters

• **T**

The expected response type.

## Parameters

### url

`string`

The URL to send the POST request to.

### body

`any`

The body of the POST request.

### token

`string`

The authorization token to be included in the request headers.

### customerContext

`string`

The customer context to be included in the request headers.

### cache?

`boolean` = `false`

Whether to cache the response. Defaults to `false`.

## Returns

`Promise`\<`void` \| [`HttpError`](../type-aliases/HttpError.md) \| `T`\>

- A promise that resolves to the response of type `T`, an `HttpError`, or `void`.
