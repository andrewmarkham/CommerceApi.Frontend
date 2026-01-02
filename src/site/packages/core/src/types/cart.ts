/**
 * Represents a request to add items to a cart.
 * 
 * @property {number} [cartId] - If the cartId isn't specified, the default cart will be used.
 * @property {Array<{sku: string; qty: number;}>} items - An array of items to be added to the cart, 
 * each item containing a SKU (Stock Keeping Unit) and a quantity.
 */
export type AddToCartRequest = {
    /** If the cartid isn't specified then the default cart will be used */
    cartId?: number,
    items:Array<{sku: string; qty: number;}>;
}

/**
 * Represents a request to update a line item in the cart.
 * 
 * @property {number} cartId - The unique identifier of the cart.
 * @property {number} lineId - The unique identifier of the line item in the cart.
 * @property {string} sku - The stock keeping unit (SKU) of the product.
 * @property {number} qty - The quantity of the product to update in the cart.
 */
export type UpdateLineCartRequest = {
    cartId: number,
    lineId: number,
    sku: string,
    qty: number
}

/**
 * Represents the response structure for a cart operation.
 */
export type CartResponse = {
  /**
   * The cart object containing the details of the cart.
   */
  cart: Cart,

  /**
   * Indicates whether there are any errors in the cart operation.
   */
  hasErrors: boolean,

  /**
   * An array of errors encountered during the cart operation.
   */
  errors: Array<CartError>
}

export type OrderResponse = {
  /**
   * The order object containing the details of the purchase order.
   */
  order: PurchaseOrder,

  /**
   * Indicates whether there are any errors in the cart operation.
   */
  hasErrors: boolean,

  /**
   * An array of errors encountered during the cart operation.
   */
  errors: Array<CartError>
}

/**
 * Represents an error related to a cart operation.
 */
export type CartError = {
  sku: String,
  message: Array<string>
}

/**
 * Represents a shopping cart.
 * 
 * @typedef {Object} Cart
 * @property {number} id - The unique identifier of the cart.
 * @property {string} name - The name of the cart.
 * @property {string} customerId - The unique identifier of the customer associated with the cart.
 * @property {string} market - The market associated with the cart.
 * @property {Currency} currency - The currency used in the cart.
 * @property {number} totalPrice - The total price of the cart.
 * @property {number} subTotalPrice - The subtotal price of the cart.
 * @property {number} taxTotal - The total tax amount of the cart.
 * @property {number} orderDiscountTotal - The total discount amount applied to the order.
 * @property {number} shippingTotal - The total shipping cost of the cart.
 * @property {number} shippingDiscountTotal - The total discount amount applied to the shipping.
 * @property {number} shippingSubTotal - The subtotal shipping cost of the cart.
 * @property {Array<OrderForm>} forms - The array of order forms associated with the cart.
 */
export type Cart = {
    id: number,
    name: string,
    customerId: string,
    market: string,
    currency: Currency,
    
    totalPrice: number,
    subTotalPrice: number,
    taxTotal: number,
    orderDiscountTotal: number,
    shippingTotal: number,
    shippingDiscountTotal: number,
    shippingSubTotal: number,

    forms: Array<OrderForm>
    notes: Array<OrderNote>
  }

  export type Payment = {
    id: number,
    paymentMethodId: string,
    paymentMethodName: string,
    billingAddress: CommerceAddress,
    amount: number,
    authorizationCode: string,
    providerTransactionID: string,
    status: string,
    transactionID: string,
    transactionType: string,
    validationCode: string
  }

  export type PurchaseOrder = Cart & {
    orderNumber: string,
    expirationDate: Date,
  }

  export type OrderNote = {
    id: number,
    title: string,
    message: string,
    createdAt: Date
  }

  /**
   * Represents an order form in the eCommerce system.
   * 
   * @property {number} id - The unique identifier for the order form.
   * @property {string} name - The name of the order form.
   * @property {Array<string>} coupons - A list of coupon codes applied to the order.
   * @property {Array<Shipment>} shipments - A list of shipments associated with the order.
   * @property {Array<Promotion>} promotions - A list of promotions applied to the order.
   */
  export type OrderForm = {
    id: number,
    name: string,
    authorizedPaymentTotal: number,
    capturedPaymentTotal: number,
    coupons: Array<string>,
    shipments: Array<Shipment>,
    promotions : Array<Promotion>
    payments: Array<Payment>
  }

  /**
   * Represents a promotion applied to a cart.
   * 
   * @property {string} id - The unique identifier for the promotion.
   * @property {string} couponCode - The coupon code associated with the promotion.
   * @property {string} name - The name of the promotion.
   * @property {string} description - A description of the promotion.
   * @property {string} discountType - The type of discount provided by the promotion.
   * @property {string} rewardType - The type of reward provided by the promotion.
   * @property {number} savedAmount - The amount saved by the promotion.
   * @property {boolean} isReedemed - Indicates whether the promotion has been redeemed.
   */
  export type Promotion = {
    id: string,
    couponCode: string,
    name: string,
    description: string,
    discountType: string,
    rewardType: string,
    savedAmount: number,
    isReedemed: boolean 
  }

  /**
   * Represents a shipment in the eCommerce system.
   * 
   * @property {number} id - The unique identifier for the shipment.
   * @property {string} shipmentTrackingNumber - The tracking number for the shipment.
   * @property {string} shippingMethodId - The identifier for the shipping method used.
   * @property {string} shippingMethodName - The name of the shipping method used.
   * @property {CommerceAddress} shippingAddress - The address to which the shipment is being sent.
   * @property {number} shippingTotal - The total cost of shipping.
   * @property {number} shippingDiscountPrice - The discounted price of shipping, if any.
   * @property {Array<CartLine>} lines - The list of cart lines included in the shipment.
   */
  export type Shipment = {
    id: number,
    shipmentTrackingNumber: string,
    shippingMethodId: string,
    shippingMethodName: string,
    shippingAddress: CommerceAddress,
    shippingTotal: number,
    shippingDiscountPrice: number,
    lines: Array<CartLine>
  }

  /**
   * Represents a line item in a shopping cart.
   * 
   * @property {number} id - The unique identifier for the cart line item.
   * @property {string} sku - The stock keeping unit identifier for the product.
   * @property {string} displayName - The display name of the product.
   * @property {number} qty - The quantity of the product in the cart.
   * @property {number} placedPrice - The price of the product when it was placed in the cart.
   * @property {number} discountedPrice - The price of the product after applying discounts.
   * @property {number} entryDiscount - The discount amount applied to the product.
   * @property {number} salesTax - The sales tax amount for the product.
   * @property {number} totalPrice - The total price of the product including discounts and taxes.
   * @property {string} imageUrl - The URL of the product's image.
   */
  export type CartLine = {
    id: number,
    sku: string,
    displayName: string,
    qty: number,
    placedPrice: number,
    discountedPrice: number,
    entryDiscount: number,
    salesTax: number,
    totalPrice: number,
    imageUrl: string,
    //metaData: Array<MetaData>
  }

  /**
   * Represents a currency with its code and symbol.
   * 
   * @property {string} code - The ISO 4217 currency code (e.g., 'USD' for US Dollar).
   * @property {string} symbol - The symbol used to represent the currency (e.g., '$' for US Dollar).
   */
  export type Currency = {
    code: string,
    symbol: string,
  }

  /**
   * Represents a request to apply a coupon to a cart.
   * 
   * @property {number} cartId - The unique identifier of the cart.
   * @property {string} couponCode - The code of the coupon to be applied.
   */
  export type CouponRequest = {
    cartId: number,
    couponCode: string
  }

  /**
   * Represents a commerce address.
   * 
   * @property {string} id - The unique identifier for the address.
   * @property {string} firstName - The first name of the person associated with the address.
   * @property {string} lastName - The last name of the person associated with the address.
   * @property {Address} address - The detailed address information.
   * @property {string} phone - The phone number associated with the address.
   * @property {string} email - The email address associated with the address.
   * @property {Array<AddressType>} addressTypes - The types of the address (e.g., billing, shipping).
   */
  export type CommerceAddress = {
    id: string;
    firstName: string;
    lastName: string;
    address: Address;
    phone: string;
    email: string;
    addressTypes: Array<AddressType>;
};

export type AddressType = 'Billing' | 'Shipping';


/**
 * Represents an address with multiple lines, city, postcode, state, and country.
 * 
 * @property {string} address1 - The first line of the address.
 * @property {string} address2 - The second line of the address.
 * @property {string} address3 - The third line of the address.
 * @property {string} city - The city of the address.
 * @property {string} postcode - The postal code of the address.
 * @property {string} state - The state or region of the address.
 * @property {Country} country - The country of the address.
 */
export type Address = {
    address1: string;
    address2: string;
    address3: string;
    city: string;
    postcode: string;
    state: string;
    country: Country;
}; 

/**
 * Represents a country with a code and a name.
 * 
 * @property {string} code - The ISO 3166-1 alpha-2 code of the country.
 * @property {string} name - The full name of the country.
 */
export type Country = {
  code: string;
  name: string;
}