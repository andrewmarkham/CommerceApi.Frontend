[**@jhoose-commerce/core**](../README.md)

***

[@jhoose-commerce/core](../README.md) / wrapItem

# Function: wrapItem()

> **wrapItem**\<`T`\>(`value`): [`WrappedItem`](../type-aliases/WrappedItem.md)

Defined in: [storage/storageHelper.ts:13](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/storage/storageHelper.ts#L13)

Wraps an item with an expiration time and encodes its value in base64.

## Type Parameters

• **T**

The type of the value to be wrapped.

## Parameters

### value

`T`

The value to be wrapped.

## Returns

[`WrappedItem`](../type-aliases/WrappedItem.md)

An object containing the expiration time and the base64 encoded value.
