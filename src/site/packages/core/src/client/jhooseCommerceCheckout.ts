import { HttpError, patch, post, put, remove } from "../http";
import { removeStorageItem, setStorageItem } from "../storage";

import { AuthenticationContextType, Cart, CartResponse, MarketContextType, OrderResponse } from "../types";
import { AddNoteRequest, AddPaymentRequest, AddShipmentRequest, AddShippingAddressRequest, AddShippingMethodRequest, PaymentMethodsRequest, PaymentMethodsResponse, RemoveShipmentRequest, ShippingMethodRequest, ShippingMethodsResponse, SplitShipmentRequest, UpdatePaymentRequest } from "../types/checkout";
import { CART_LOCAL_STORAGE_KEY } from "./constants";

export class JhooseCommerceCheckout {
    readonly authenticationContext: AuthenticationContextType;
    readonly marketContext: MarketContextType;

    constructor(
        authenticationContext: AuthenticationContextType,
        marketContext: MarketContextType) 
    {
        this.authenticationContext = authenticationContext;
        this.marketContext = marketContext;
    }


  /**
   * Retrieves the available shipping methods for a given request.
   *
   * @param {ShippingMethodRequest} request - The request object containing necessary information to fetch shipping methods.
   * @returns {Promise<ShippingMethodsResponse | HttpError>} A promise that resolves to a ShippingMethodsResponse object if successful,
   * or an HttpError object if there is a network error.
   */
  async getShippingMethods(request: ShippingMethodRequest): Promise<ShippingMethodsResponse | HttpError> {
    
    const shippingMethodsRequestUrl = `${this.authenticationContext.endpoint}/commerceapi/checkout/shippingmethods`;

    const shippingMethodsResponse = await post<ShippingMethodsResponse>(
      shippingMethodsRequestUrl,
      request,
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );

    return shippingMethodsResponse ?? {code: "500", message: "Network Error"};
  }

  /**
   * Retrieves the available payment methods for the current checkout session.
   *
   * @param {PaymentMethodsRequest} request - The request object containing necessary parameters to fetch payment methods.
   * @returns {Promise<PaymentMethodsResponse | HttpError>} A promise that resolves to a PaymentMethodsResponse object
   * containing the available payment methods, or an HttpError object in case of a network error.
   */
  async getPaymentMethods(request: PaymentMethodsRequest): Promise<PaymentMethodsResponse | HttpError> {
    
    const requestUrl = `${this.authenticationContext.endpoint}/commerceapi/checkout/paymentmethods`;

    const response = await post<PaymentMethodsResponse>(
      requestUrl,
      request,
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );

    return response ?? {code: "500", message: "Network Error"};
  }
  /**
   * Sets the shipping method for a given cart.
   *
   * @param {AddShippingMethodRequest} request - The request object containing the cart ID and shipment ID.
   * @returns {Promise<CartResponse | HttpError>} - A promise that resolves to a CartResponse or an HttpError.
   *
   * The function constructs the appropriate URL based on whether the shipment ID is provided or not.
   * It then makes a PUT request to the constructed URL with the necessary authentication context.
   * If the response is null, it returns an HttpError with a 500 status code and a "Network Error" message.
   */
  async setShippingMethod(request: AddShippingMethodRequest): Promise<CartResponse | HttpError> {
    
    const addShippingAddressRequestUrl = request.shipmentId === null || request.shipmentId === undefined?
    `${this.authenticationContext.endpoint}/commerceapi/checkout/${request.cartId}/shipping/method` :
    `${this.authenticationContext.endpoint}/commerceapi/checkout/${request.cartId}/shipping/${request.shipmentId}/method`;

    const response = await put<CartResponse>(
      addShippingAddressRequestUrl,
      {
        methodId : request.methodId
      },
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );

    if (response && "cart" in response) {
      if (response.cart && !response.hasErrors) {
        setStorageItem<Cart>(CART_LOCAL_STORAGE_KEY, response.cart);
      }
    }

    return response ?? {code: "500", message: "Network Error"};
  }

  /**
   * Sets the shipping address for a given cart or shipment.
   *
   * @param {AddShippingAddressRequest} request - The request object containing the cart ID, shipment ID, and address.
   * @returns {Promise<CartResponse | HttpError>} - A promise that resolves to a CartResponse or an HttpError.
   *
   * The function constructs the appropriate URL based on whether the shipment ID is provided.
   * It then sends a PUT request to the constructed URL with the address from the request object.
   * If the response is null or undefined, it returns an HttpError with a 500 status code and a "Network Error" message.
   */
  async setShippingAddress(request: AddShippingAddressRequest): Promise<CartResponse | HttpError> {
    
    const addShippingMethodRequestUrl = request.shipmentId === null || request.shipmentId === undefined ?
    `${this.authenticationContext.endpoint}/commerceapi/checkout/${request.cartId}/shipping/address` :
    `${this.authenticationContext.endpoint}/commerceapi/checkout/${request.cartId}/shipping/${request.shipmentId}/address`;

    const response = await put<CartResponse>(
      addShippingMethodRequestUrl,
      {
        address : request.address
      },
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );

    if (response && "cart" in response) {
      if (response.cart && !response.hasErrors) {
        setStorageItem<Cart>(CART_LOCAL_STORAGE_KEY, response.cart);
      }
    }

    return response ?? {code: "500", message: "Network Error"};
  }

  /**
   * Adds a shipment to the specified cart.
   *
   * @param {AddShipmentRequest} request - The request object containing the cart ID and shipment details.
   * @returns {Promise<CartResponse | HttpError>} - A promise that resolves to a CartResponse object if the shipment is added successfully,
   * or an HttpError object if there is a network error or other issue.
   */
  async addShipment(request: AddShipmentRequest): Promise<CartResponse | HttpError> {
    
    const addShipmentRequestUrl = `${this.authenticationContext.endpoint}/commerceapi/checkout/${request.cartId}/shipping/`;

    const response = await post<CartResponse>(
      addShipmentRequestUrl,
      null,
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );

    if (response && "cart" in response) {
      if (response.cart && !response.hasErrors) {
        setStorageItem<Cart>(CART_LOCAL_STORAGE_KEY, response.cart);
      }
    }

    return response ?? {code: "500", message: "Network Error"};
  }

  /**
   * Removes a shipment from the cart.
   *
   * @param {RemoveShipmentRequest} request - The request object containing the cart ID and shipment ID.
   * @returns {Promise<CartResponse | HttpError>} - A promise that resolves to a CartResponse if successful, or an HttpError if there is an error.
   */
  async removeShipment(request: RemoveShipmentRequest): Promise<CartResponse | HttpError> {
    
    const removeShipmentRequestUrl = `${this.authenticationContext.endpoint}/commerceapi/checkout/${request.cartId}/shipping/${request.shipmentId}`;

    const response = await remove<CartResponse>(
      removeShipmentRequestUrl,
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );

    if (response && "cart" in response) {
      if (response.cart && !response.hasErrors) {
        setStorageItem<Cart>(CART_LOCAL_STORAGE_KEY, response.cart);
      }
    }

    return response ?? {code: "500", message: "Network Error"};
  }

  /**
   * Splits a shipment, moves a sku to the specified shipment, and recalculates the cart.
   *
   * @param {SplitShipmentRequest} request - The request object containing the cart ID, SKU, and shipment ID.
   * @returns {Promise<CartResponse | HttpError>} - A promise that resolves to a CartResponse or an HttpError.
   */
  async splitShipment(request: SplitShipmentRequest): Promise<CartResponse | HttpError> {
    
    const splitShipmentRequestUrl = `${this.authenticationContext.endpoint}/commerceapi/checkout/${request.cartId}/lines/${request.sku}`;

    const response = await patch<CartResponse>(
      splitShipmentRequestUrl,
      {
        shipmentId : request.shipmentId
      },
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );

    if (response && "cart" in response) {
      if (response.cart && !response.hasErrors) {
        setStorageItem<Cart>(CART_LOCAL_STORAGE_KEY, response.cart);
      }
    }
    
    return response ?? {code: "500", message: "Network Error"};
  }

  async addPayment(request: AddPaymentRequest) : Promise<CartResponse | HttpError> {
    const requestUrl = `${this.authenticationContext.endpoint}/commerceapi/checkout/${request.cartId}/payment/`;

    const response = await post<CartResponse>(
      requestUrl,
      request,
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );

    if (response && "cart" in response) {
      if (response.cart && !response.hasErrors) {
        setStorageItem<Cart>(CART_LOCAL_STORAGE_KEY, response.cart);
      }
    }
    
    return response ?? {code: "500", message: "Network Error"};
  }

  async updatePayment(request: UpdatePaymentRequest) : Promise<CartResponse | HttpError> {
    const requestUrl = `${this.authenticationContext.endpoint}/commerceapi/checkout/${request.cartId}/payment/${request.paymentId}/`;

    const response = await patch<CartResponse>(
      requestUrl,
      request,
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );

    if (response && "cart" in response) {
      if (response.cart && !response.hasErrors) {
        setStorageItem<Cart>(CART_LOCAL_STORAGE_KEY, response.cart);
      }
    }
    
    return response ?? {code: "500", message: "Network Error"};
  }

  async addNote(request: AddNoteRequest) : Promise<CartResponse | HttpError> {
    const requestUrl = `${this.authenticationContext.endpoint}/commerceapi/checkout/${request.cartId}/note/`;

    const response = await post<CartResponse>(
      requestUrl,
      request,
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );

    if (response && "cart" in response) {
      if (response.cart && !response.hasErrors) {
        setStorageItem<Cart>(CART_LOCAL_STORAGE_KEY, response.cart);
      }
    }
    
    return response ?? {code: "500", message: "Network Error"};
  }

  async convertToPurchaseOrder(cartId: number) : Promise<OrderResponse | HttpError> {
    const requestUrl = `${this.authenticationContext.endpoint}/commerceapi/checkout/${cartId}/converttopo/`;

    const response = await post<OrderResponse>(
      requestUrl,
      null,
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );

    if (response && "order" in response) {
      removeStorageItem(CART_LOCAL_STORAGE_KEY);
    }
    
    return response ?? {code: "500", message: "Network Error"};
  }
}
