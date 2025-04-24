[**@jhoose-commerce/core**](../README.md)

***

[@jhoose-commerce/core](../README.md) / getStorageItem

# Function: getStorageItem()

> **getStorageItem**\<`T`\>(`key`): `null` \| `T`

Defined in: [storage/storageHelper.ts:46](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/storage/storageHelper.ts#L46)

Retrieves an item from local storage and parses it as JSON.

## Type Parameters

• **T**

The expected type of the stored item.

## Parameters

### key

`string`

The key of the item to retrieve from local storage.

## Returns

`null` \| `T`

- The parsed item from local storage, or null if the item does not exist.
