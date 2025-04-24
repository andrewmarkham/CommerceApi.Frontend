[**@jhoose-commerce/core**](../README.md)

***

[@jhoose-commerce/core](../README.md) / put

# Function: put()

> **put**\<`T`\>(`url`, `body`, `token`, `customerContext`, `cache`?): `Promise`\<`void` \| [`HttpError`](../type-aliases/HttpError.md) \| `T`\>

Defined in: [http/helper.ts:48](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/http/helper.ts#L48)

Sends an HTTP PUT request to the specified URL with the given body and headers.

## Type Parameters

• **T**

The expected response type.

## Parameters

### url

`string`

The URL to send the PUT request to.

### body

`any`

The body of the PUT request.

### token

`string`

The authorization token to include in the request headers.

### customerContext

`string`

The customer context to include in the request headers.

### cache?

`boolean` = `false`

Whether to use cache for the request. Defaults to `false`.

## Returns

`Promise`\<`void` \| [`HttpError`](../type-aliases/HttpError.md) \| `T`\>

- A promise that resolves to the response of type `T`, an `HttpError`, or `void`.
