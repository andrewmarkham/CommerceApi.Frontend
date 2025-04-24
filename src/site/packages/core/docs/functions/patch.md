[**@jhoose-commerce/core**](../README.md)

***

[@jhoose-commerce/core](../README.md) / patch

# Function: patch()

> **patch**\<`T`\>(`url`, `body`, `token`, `customerContext`): `Promise`\<`void` \| [`HttpError`](../type-aliases/HttpError.md) \| `T`\>

Defined in: [http/helper.ts:80](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/http/helper.ts#L80)

Sends a PATCH request to the specified URL with the provided body and headers.

## Type Parameters

• **T**

The expected response type.

## Parameters

### url

`string`

The URL to send the PATCH request to.

### body

`any`

The body of the PATCH request.

### token

`string`

The authorization token to include in the request headers.

### customerContext

`string`

The customer context to include in the request headers.

## Returns

`Promise`\<`void` \| [`HttpError`](../type-aliases/HttpError.md) \| `T`\>

- A promise that resolves to the response of type T, an HttpError, or void.
