[**@jhoose-commerce/core**](../README.md)

***

[@jhoose-commerce/core](../README.md) / remove

# Function: remove()

> **remove**\<`T`\>(`url`, `token`, `customerContext`?): `Promise`\<`void` \| [`HttpError`](../type-aliases/HttpError.md) \| `T`\>

Defined in: [http/helper.ts:125](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/http/helper.ts#L125)

Sends an HTTP DELETE request to the specified URL.

## Type Parameters

• **T**

The expected response type.

## Parameters

### url

`string`

The URL to send the DELETE request to.

### token

`string`

The authorization token to include in the request headers.

### customerContext?

`string`

Optional customer context to include in the request headers.

## Returns

`Promise`\<`void` \| [`HttpError`](../type-aliases/HttpError.md) \| `T`\>

- A promise that resolves to the response of type T, an HttpError, or void.
