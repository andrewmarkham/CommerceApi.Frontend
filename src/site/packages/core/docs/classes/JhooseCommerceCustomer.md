[**@jhoose-commerce/core**](../README.md)

***

[@jhoose-commerce/core](../README.md) / JhooseCommerceCustomer

# Class: JhooseCommerceCustomer

Defined in: [client/jhooseCommerceCustomer.ts:5](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCustomer.ts#L5)

## Constructors

### new JhooseCommerceCustomer()

> **new JhooseCommerceCustomer**(`authenticationContext`, `marketContext`): [`JhooseCommerceCustomer`](JhooseCommerceCustomer.md)

Defined in: [client/jhooseCommerceCustomer.ts:9](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCustomer.ts#L9)

#### Parameters

##### authenticationContext

[`AuthenticationContextType`](../type-aliases/AuthenticationContextType.md)

##### marketContext

[`MarketContextType`](../type-aliases/MarketContextType.md)

#### Returns

[`JhooseCommerceCustomer`](JhooseCommerceCustomer.md)

## Properties

### authenticationContext

> `readonly` **authenticationContext**: [`AuthenticationContextType`](../type-aliases/AuthenticationContextType.md)

Defined in: [client/jhooseCommerceCustomer.ts:6](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCustomer.ts#L6)

***

### marketContext

> `readonly` **marketContext**: [`MarketContextType`](../type-aliases/MarketContextType.md)

Defined in: [client/jhooseCommerceCustomer.ts:7](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCustomer.ts#L7)

## Methods

### addCustomer()

> **addCustomer**(`customer`): `Promise`\<[`CustomerResponse`](../type-aliases/CustomerResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

Defined in: [client/jhooseCommerceCustomer.ts:44](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCustomer.ts#L44)

Adds a new customer, the information is based on the currently authenticated customer.

#### Parameters

##### customer

[`Customer`](../type-aliases/Customer.md)

The customer object to be added.

#### Returns

`Promise`\<[`CustomerResponse`](../type-aliases/CustomerResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

A promise that resolves to the customer response or an HTTP error.

***

### addCustomerAddress()

> **addCustomerAddress**(`address`): `Promise`\<[`CommerceAddressResponse`](../type-aliases/CommerceAddressResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

Defined in: [client/jhooseCommerceCustomer.ts:104](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCustomer.ts#L104)

Adds a new customer address (to the current, authenticated customer).

#### Parameters

##### address

[`CommerceAddress`](../type-aliases/CommerceAddress.md)

The address to be added.

#### Returns

`Promise`\<[`CommerceAddressResponse`](../type-aliases/CommerceAddressResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

A promise that resolves to the response of the address addition or an HTTP error.

***

### getCustomer()

> **getCustomer**(): `Promise`\<[`CustomerResponse`](../type-aliases/CustomerResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

Defined in: [client/jhooseCommerceCustomer.ts:25](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCustomer.ts#L25)

Retrieves the customer information (of the current, authenticated customer).

#### Returns

`Promise`\<[`CustomerResponse`](../type-aliases/CustomerResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

A promise that resolves to the customer information or an HTTP error.

#### Throws

Throws an error if the request fails.

***

### getCustomerAddresses()

> **getCustomerAddresses**(): `Promise`\<[`CommerceAddressResponse`](../type-aliases/CommerceAddressResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

Defined in: [client/jhooseCommerceCustomer.ts:85](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCustomer.ts#L85)

Retrieves the addresses associated with the current customer.

#### Returns

`Promise`\<[`CommerceAddressResponse`](../type-aliases/CommerceAddressResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

A promise that resolves to a `CommerceAddressResponse` object containing the customer's addresses,
or an `HttpError` object if an error occurs.

***

### removeCustomerAddress()

> **removeCustomerAddress**(`request`): `Promise`\<[`CommerceAddressResponse`](../type-aliases/CommerceAddressResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

Defined in: [client/jhooseCommerceCustomer.ts:144](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCustomer.ts#L144)

Removes a customer address (of the current, authenticated customer).

#### Parameters

##### request

[`DeleteCustomerAddressRequest`](../type-aliases/DeleteCustomerAddressRequest.md)

The request object containing the address ID to be removed.

#### Returns

`Promise`\<[`CommerceAddressResponse`](../type-aliases/CommerceAddressResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

A promise that resolves to a CommerceAddressResponse if successful, or an HttpError if there is an error.

***

### updateCustomer()

> **updateCustomer**(`customer`): `Promise`\<[`CustomerResponse`](../type-aliases/CustomerResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

Defined in: [client/jhooseCommerceCustomer.ts:65](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCustomer.ts#L65)

Updates the customer  (of the current, authenticated customer) information.

#### Parameters

##### customer

[`Customer`](../type-aliases/Customer.md)

The customer object containing updated information.

#### Returns

`Promise`\<[`CustomerResponse`](../type-aliases/CustomerResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

A promise that resolves to a CustomerResponse object if the update is successful,
or an HttpError object if there is an error.

***

### updateCustomerAddress()

> **updateCustomerAddress**(`address`): `Promise`\<[`CommerceAddressResponse`](../type-aliases/CommerceAddressResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

Defined in: [client/jhooseCommerceCustomer.ts:124](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCustomer.ts#L124)

Updates the customer's address (of the current, authenticated customer).

#### Parameters

##### address

[`CommerceAddress`](../type-aliases/CommerceAddress.md)

The address to be updated.

#### Returns

`Promise`\<[`CommerceAddressResponse`](../type-aliases/CommerceAddressResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

A promise that resolves to the updated address response or an HTTP error.
