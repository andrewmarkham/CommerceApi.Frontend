[**@jhoose-commerce/core**](../README.md)

***

[@jhoose-commerce/core](../README.md) / JhooseCommerceCheckout

# Class: JhooseCommerceCheckout

Defined in: [client/jhooseCommerceCheckout.ts:6](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCheckout.ts#L6)

## Constructors

### new JhooseCommerceCheckout()

> **new JhooseCommerceCheckout**(`authenticationContext`, `marketContext`): [`JhooseCommerceCheckout`](JhooseCommerceCheckout.md)

Defined in: [client/jhooseCommerceCheckout.ts:10](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCheckout.ts#L10)

#### Parameters

##### authenticationContext

[`AuthenticationContextType`](../type-aliases/AuthenticationContextType.md)

##### marketContext

[`MarketContextType`](../type-aliases/MarketContextType.md)

#### Returns

[`JhooseCommerceCheckout`](JhooseCommerceCheckout.md)

## Properties

### authenticationContext

> `readonly` **authenticationContext**: [`AuthenticationContextType`](../type-aliases/AuthenticationContextType.md)

Defined in: [client/jhooseCommerceCheckout.ts:7](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCheckout.ts#L7)

***

### marketContext

> `readonly` **marketContext**: [`MarketContextType`](../type-aliases/MarketContextType.md)

Defined in: [client/jhooseCommerceCheckout.ts:8](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCheckout.ts#L8)

## Methods

### AddShipment()

> **AddShipment**(`request`): `Promise`\<[`CartResponse`](../type-aliases/CartResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

Defined in: [client/jhooseCommerceCheckout.ts:103](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCheckout.ts#L103)

Adds a shipment to the specified cart.

#### Parameters

##### request

[`AddShipmentRequest`](../type-aliases/AddShipmentRequest.md)

The request object containing the cart ID and shipment details.

#### Returns

`Promise`\<[`CartResponse`](../type-aliases/CartResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

- A promise that resolves to a CartResponse object if the shipment is added successfully,
or an HttpError object if there is a network error or other issue.

***

### getShippingMethods()

> **getShippingMethods**(`request`): `Promise`\<[`ShippingMethodsResponse`](../type-aliases/ShippingMethodsResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

Defined in: [client/jhooseCommerceCheckout.ts:26](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCheckout.ts#L26)

Retrieves the available shipping methods for a given request.

#### Parameters

##### request

[`ShippingMethodRequest`](../type-aliases/ShippingMethodRequest.md)

The request object containing necessary information to fetch shipping methods.

#### Returns

`Promise`\<[`ShippingMethodsResponse`](../type-aliases/ShippingMethodsResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

A promise that resolves to a ShippingMethodsResponse object if successful,
or an HttpError object if there is a network error.

***

### RemoveShipment()

> **RemoveShipment**(`request`): `Promise`\<[`CartResponse`](../type-aliases/CartResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

Defined in: [client/jhooseCommerceCheckout.ts:123](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCheckout.ts#L123)

Removes a shipment from the cart.

#### Parameters

##### request

[`RemoveShipmentRequest`](../type-aliases/RemoveShipmentRequest.md)

The request object containing the cart ID and shipment ID.

#### Returns

`Promise`\<[`CartResponse`](../type-aliases/CartResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

- A promise that resolves to a CartResponse if successful, or an HttpError if there is an error.

***

### setShippingAddress()

> **setShippingAddress**(`request`): `Promise`\<[`CartResponse`](../type-aliases/CartResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

Defined in: [client/jhooseCommerceCheckout.ts:78](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCheckout.ts#L78)

Sets the shipping address for a given cart or shipment.

#### Parameters

##### request

[`AddShippingAddressRequest`](../type-aliases/AddShippingAddressRequest.md)

The request object containing the cart ID, shipment ID, and address.

#### Returns

`Promise`\<[`CartResponse`](../type-aliases/CartResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

- A promise that resolves to a CartResponse or an HttpError.

The function constructs the appropriate URL based on whether the shipment ID is provided.
It then sends a PUT request to the constructed URL with the address from the request object.
If the response is null or undefined, it returns an HttpError with a 500 status code and a "Network Error" message.

***

### setShippingMethod()

> **setShippingMethod**(`request`): `Promise`\<[`CartResponse`](../type-aliases/CartResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

Defined in: [client/jhooseCommerceCheckout.ts:50](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCheckout.ts#L50)

Sets the shipping method for a given cart.

#### Parameters

##### request

[`AddShippingMethodRequest`](../type-aliases/AddShippingMethodRequest.md)

The request object containing the cart ID and shipment ID.

#### Returns

`Promise`\<[`CartResponse`](../type-aliases/CartResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

- A promise that resolves to a CartResponse or an HttpError.

The function constructs the appropriate URL based on whether the shipment ID is provided or not.
It then makes a PUT request to the constructed URL with the necessary authentication context.
If the response is null, it returns an HttpError with a 500 status code and a "Network Error" message.

***

### SplitShipment()

> **SplitShipment**(`request`): `Promise`\<[`CartResponse`](../type-aliases/CartResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

Defined in: [client/jhooseCommerceCheckout.ts:142](https://github.com/andrewmarkham/CommerceApi/blob/bb3d25e2952c278a6ad1643dc0fae4311c91229b/src/eCommerce/site/packages/core/src/client/jhooseCommerceCheckout.ts#L142)

Splits a shipment, moves a sku to the specified shipment, and recalculates the cart.

#### Parameters

##### request

[`SplitShipmentRequest`](../type-aliases/SplitShipmentRequest.md)

The request object containing the cart ID, SKU, and shipment ID.

#### Returns

`Promise`\<[`CartResponse`](../type-aliases/CartResponse.md) \| [`HttpError`](../type-aliases/HttpError.md)\>

- A promise that resolves to a CartResponse or an HttpError.
