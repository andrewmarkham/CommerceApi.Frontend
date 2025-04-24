[**@jhoose-commerce/core**](../README.md)

***

[@jhoose-commerce/core](../README.md) / unWrapItem

# Function: unWrapItem()

> **unWrapItem**\<`T`\>(`value`): `null` \| `T`

Defined in: [storage/storageHelper.ts:29](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/storage/storageHelper.ts#L29)

Unwraps a wrapped item and returns its value if it has not expired.

## Type Parameters

• **T**

The type of the unwrapped item.

## Parameters

### value

[`WrappedItem`](../type-aliases/WrappedItem.md)

The wrapped item containing the value and expiration information.

## Returns

`null` \| `T`

- The unwrapped item of type T if it has not expired, otherwise null.
