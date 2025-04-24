import { CommerceAddress } from "./cart";


/**
 * Represents a request for a shipping method.
 *
 * @property {string} marketId - The identifier for the market.
 * @property {string} shippingCountry - The country to which the shipment will be sent.
 * @property {number} cartId - The identifier for the cart.
 */
export type ShippingMethodRequest = {
    marketId: string;
    shippingCountry: string;
    cartId: number;
}

/**
 * Represents a request to add a shipping method to a shipment in the cart.
 *
 * @property {number} [shipmentId] - The optional ID of the shipment to which the shipping method will be added.
 * @property {string} methodId - The ID of the shipping method to be added.
 * @property {number} cartId - The ID of the cart containing the shipment.
 */
export type AddShippingMethodRequest = {
    shipmentId?: number;
    methodId: string;
    cartId: number;
}

/**
 * Represents a request to add a shipping address to a shipment.
 *
 * @property {number} [shipmentId] - The optional ID of the shipment to which the address is being added.
 * @property {CommerceAddress} address - The address to be added to the shipment.
 * @property {number} cartId - The ID of the cart associated with the shipment.
 */
export type AddShippingAddressRequest = {
    shipmentId?: number;
    address: CommerceAddress;
    cartId: number;
}

/**
 * Represents a request to add a shipment to a cart.
 * 
 * @property {number} cartId - The unique identifier of the cart to which the shipment will be added.
 */
export type AddShipmentRequest = {
    cartId: number;
}

/**
 * Represents a request to remove a shipment from a cart.
 *
 * @property {number} shipmentId - The unique identifier of the shipment to be removed.
 * @property {number} cartId - The unique identifier of the cart from which the shipment will be removed.
 */
export type RemoveShipmentRequest = {
    shipmentId: number;
    cartId: number;
}

/**
 * Represents a request to split a shipment in the eCommerce system.
 * 
 * @property {number} cartId - The unique identifier of the cart.
 * @property {number} shipmentId - The unique identifier of the shipment.
 * @property {string} sku - The stock keeping unit of the product to be split.
 */
export type SplitShipmentRequest = {
    cartId: number;
    shipmentId: number;
    sku: string;
}


/**
 * Represents the response containing available shipping methods.
 */
export type ShippingMethodsResponse = {
    shippingMethods: ShippingMethod[];
}

/**
 * Represents a shipping method available during checkout.
 * 
 * @property {string} id - The unique identifier for the shipping method.
 * @property {string} displayName - The display name of the shipping method.
 * @property {string} className - The CSS class name associated with the shipping method.
 * @property {number} price - The cost of using this shipping method.
 * @property {number} order - The order in which the shipping method should be displayed.
 * @property {boolean} isDefault - Indicates whether this is the default shipping method.
 */
export type ShippingMethod = {
    id: string;
    displayName: string;
    className: string;
    price: number;
    order: number;
    isDefault: boolean;
}


export type AddPaymentRequest = {
    cartId: number;
    amount: number;
    useShippingAddress: boolean;
    paymentMethodId: string;
    address: CommerceAddress;
    authorizationCode: string;
    providerTransactionID: string;
    status: "Pending" | "Processed" | "Void";
    transactionID: string;
    transactionType: "Authorization" | "Capture" | "Sale" | "Void" | "Credit" | "Other" | "CaptureOnly";
    validationCode: string;
};

export type UpdatePaymentRequest = {
  cartId: number;
  paymentId: number;
  authorizationCode: string;
  providerTransactionID: string;
  status: "Pending" | "Processed" | "Void";
  transactionID: string;
  transactionType: "Authorization" | "Capture" | "Sale" | "Void" | "Credit" | "Other" | "CaptureOnly";
  validationCode: string;
};

export type AddNoteRequest = {
  cartId: number;
  title: string;
  message: string;
};

export type PaymentMethodsRequest = {
  shippingCountry: string;
  languageId: string;
  marketId: string;
  cartId: number;
}

export type PaymentMethodsResponse = {
  paymentMethods: PaymentMethods[];
}

export type PaymentMethods = {
  paymentMethodId: string;
  systemKeyword: string;
  friendlyName: string;
  description: string;
  isDefault: boolean;
  order: number;
}