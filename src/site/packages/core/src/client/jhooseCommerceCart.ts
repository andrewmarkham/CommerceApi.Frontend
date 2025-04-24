import { get, HttpError, post, put, remove } from "../http";
import { getStorageItem, setStorageItem } from "../storage/storageHelper";
import { AuthenticationContextType, MarketContextType } from "../types";
import { AddToCartRequest, Cart, CartResponse, CouponRequest, UpdateLineCartRequest } from "../types/cart";
import { CART_LOCAL_STORAGE_KEY } from "./constants";

const DEFAULT_CART_NAME = "Default";

export class JhooseCommerceCart {
    readonly authenticationContext: AuthenticationContextType;
    readonly marketContext: MarketContextType;
    readonly isServerside: boolean;

    constructor(
        authenticationContext: AuthenticationContextType,
        marketContext: MarketContextType,
        isServerside : boolean = false) 
    {
        this.authenticationContext = authenticationContext;
        this.marketContext = marketContext;
        this.isServerside = isServerside;
    }

  /**
   * Adds items to a cart. If the cart does not exist, a new cart will be created.
   *
   * @param {AddToCartRequest} request - The request object containing the cart id and items to add.
   * @returns {Promise<Cart | HttpError>} A promise that resolves to the updated cart or an HttpError.
   */
  async addToCart(request: AddToCartRequest): Promise<CartResponse | HttpError> {
    
    var id = request.cartId ?? null;

    if (id === null) {
      var defaultCart = await this.getDefaultCart(true);
      
      if (defaultCart === null) {
        throw new Error("Default cart not found");
      }

      if ("id" in defaultCart) {
        id = defaultCart.id;
      } else {
          return defaultCart;
      }
    }
    const cartRequestUrl = `${this.authenticationContext.endpoint}/commerceapi/cart/${id}/lines`;

    const cartResponse = await post<CartResponse>(
      cartRequestUrl,
      request.items,
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );

    if (cartResponse && "cart" in cartResponse) {
      if (cartResponse.cart && !cartResponse.hasErrors) {
        setStorageItem<Cart>(CART_LOCAL_STORAGE_KEY, cartResponse.cart);
      }
    }
    return cartResponse ?? {code: "500", message: "void returned"};
  }

  /**
   * Updates the quantity of a line in a cart.
   *
   * @param {UpdateLineCartRequest} request - The request object containing the cart id, line id, sku, and quantity.
   * @returns {Promise<Cart | HttpError>} A promise that resolves to the updated cart or an HttpError.
   */
  async updateCartLine(request: UpdateLineCartRequest): Promise<CartResponse | HttpError> {
    
    const cartRequestUrl = `${this.authenticationContext.endpoint}/commerceapi/cart/${request.cartId}/lines`;

    const cartResponse = await put<CartResponse>(
      cartRequestUrl,
      [
        {
          id: request.lineId,
          sku: request.sku,
          qty: request.qty
        }
      ],
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );

    if (cartResponse && "cart" in cartResponse) {
      if (cartResponse.cart && !cartResponse.hasErrors) {
        setStorageItem<Cart>(CART_LOCAL_STORAGE_KEY, cartResponse.cart);
      }
    }

    return cartResponse ?? {code: "500", message: "void returned"};
  }

  
  /**
   * Removes a line from a cart.
   *
   * @param {number} cartId - The ID of the cart to remove the line from.
   * @param {string} sku - The sku to remove from the cart.
   * @returns {Promise<Cart | HttpError>} A promise that resolves to the updated cart or an HttpError.
   */
  async removeLineFromCart(cartId: number, sku: string): Promise<CartResponse | HttpError> {
    const cartRequestUrl = `${this.authenticationContext.endpoint}/commerceapi/cart/${cartId}/lines/${sku}`;

    const cartResponse = await remove<CartResponse>(
      cartRequestUrl,
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );

    if (cartResponse && "cart" in cartResponse) {
      if (cartResponse.cart && !cartResponse.hasErrors) {
        setStorageItem<Cart>(CART_LOCAL_STORAGE_KEY, cartResponse.cart);
      }
    }

    return cartResponse ?? {code: "500", message: "void returned"};
  }
  
  /** Gets the default cart, if it doesn't exist then it will be created */
  /**
   * Retrieves the default cart for the current user. If the cart does not exist and the `create` parameter is true,
   * a new cart will be created.
   *
   * @param {boolean} create - A flag indicating whether to create a new cart if it does not exist.
   * @returns {Promise<Cart | HttpError | null>} A promise that resolves to the default cart or an HttpError or null.
   */
  async getDefaultCart(create: boolean): Promise<Cart | HttpError | null> {

    var cart = getStorageItem<Cart>(CART_LOCAL_STORAGE_KEY);
    console.log(`cart market: ${cart?.market} marketContext: ${this.marketContext.market}`);
    if (cart !== null && cart.market === this.marketContext.market) {
      return cart;
    }
    
    console.log("cart not found in storage");

    if (create) {
      const cartRequestUrl = `${this.authenticationContext.endpoint}/commerceapi/cart/`;

      const cart = await post<Cart>(
        cartRequestUrl,
        {
          id: -1,
          name: DEFAULT_CART_NAME,
          market: this.marketContext.market,
          currency: this.marketContext.currency
        },
        this.authenticationContext.token,
        this.authenticationContext.customerContext
      );

      if (cart && "id" in cart) {
        setStorageItem<Cart>(CART_LOCAL_STORAGE_KEY, cart);

        return cart;
      }

      if (cart && "message" in cart) {
        return {code: cart.code, message: cart.message};
      }

      return {code: "500", message: "void returned"};

    } else { 

      let allCarts = await this.getCarts();

      if (Array.isArray(allCarts)) {
        let defaultCart = allCarts.find((cart) => cart.name === DEFAULT_CART_NAME && cart.market === this.marketContext.market);
        if (defaultCart) {
          setStorageItem<Cart>(CART_LOCAL_STORAGE_KEY, defaultCart);
          return defaultCart;
        }
        return null;
      }

      return allCarts as HttpError;
     }
  }

  /** Get all the carts */
  /**
   * Retrieves the list of carts for the user.
   *
   * @returns {Promise<Array<Cart> | HttpError>} A promise that resolves to an array of Cart objects or an HttpError.
   */
  async getCarts(): Promise<Array<Cart> | HttpError> {
    
    const cartRequestUrl = `${this.authenticationContext.endpoint}/commerceapi/cart/`;

    const cart = await get<Array<Cart>>(
      cartRequestUrl,
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );

    return cart ?? {code: "500", message: "void returned"};
  }

  /** Gets a cart by specific id, if not found then null will be returned */
  /**
   * Retrieves a cart by its ID.
   *
   * @param {number} id - The ID of the cart to retrieve.
   * @returns {Promise<Cart | HttpError | null>} A promise that resolves to the cart object if found, 
   * an HttpError if an error occurs, or null if no cart is found.
   *
   * @remarks
   * This method sends a GET request to the commerce API to fetch the cart details.
   * If the cart is found, it is stored in the local storage.
   *
   * @example
   * ```typescript
   * const cart = await getCart(123);
   * if (cart) {
   *   console.log('Cart retrieved:', cart);
   * } else {
   *   console.log('Cart not found or an error occurred.');
   * }
   * ```
   */
  async getCart(id: number): Promise<Cart  | HttpError | null> {
    const cartRequestUrl = `${this.authenticationContext.endpoint}/commerceapi/cart/${id}`;

    if(!this.isServerside) {
      var cart = getStorageItem<Cart>(CART_LOCAL_STORAGE_KEY);
      if (cart !== null) {
        return cart;
      }
    }

    const carts = await get<Array<Cart>>(
      cartRequestUrl,
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );

    if (Array.isArray(carts)) {
      const cart = carts.length > 0 ? carts[0] : null;

      if (cart !== null && !this.isServerside) {
        setStorageItem<Cart>(CART_LOCAL_STORAGE_KEY, cart);
      }

      return cart;
    }

    return carts as HttpError;
  }

  /**
   * Deletes a cart by its ID.
   *
   * @param {number} id - The ID of the cart to delete.
   * @returns {Promise<CartResponse | HttpError | void>} A promise that resolves to a CartResponse, HttpError, or void.
   */
  async deleteCart(id: number): Promise<CartResponse | HttpError | void> {
    const cartRequestUrl = `${this.authenticationContext.endpoint}/commerceapi/cart/${id}`;

    const response = await remove<CartResponse>(
      cartRequestUrl,
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );

    if (response && "code" in response) {
      return response;
    }

    return response ?? {code: "500", message: "void returned"};
  }

  /**
   * Adds a coupon to the cart.
   *
   * @param {CouponRequest} request - The request object containing the cart ID and coupon code.
   * @returns {Promise<CartResponse | HttpError>} - A promise that resolves to a CartResponse if successful, or an HttpError if an error occurs.
   * @throws {Error} - Throws an error if the default cart is not found.
   */
  async addCoupon(request: CouponRequest): Promise<CartResponse | HttpError> {
    
    var id = request.cartId ?? null;

    if (id === null) {
      var defaultCart = await this.getDefaultCart(false);
      
      if (defaultCart === null) {
        throw new Error("Default cart not found");
      }

      if ("id" in defaultCart) {
        id = defaultCart.id;
      } else {
          return defaultCart;
      }
    }
    const cartRequestUrl = `${this.authenticationContext.endpoint}/commerceapi/cart/${id}/coupon`;

    const cartResponse = await post<CartResponse>(
      cartRequestUrl,
      {
        couponCode: request.couponCode
      },
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );

    if (cartResponse && "cart" in cartResponse) {
      if (cartResponse.cart && !cartResponse.hasErrors) {
        setStorageItem<Cart>(CART_LOCAL_STORAGE_KEY, cartResponse.cart);
      }
    }
    return cartResponse ?? {code: "500", message: "void returned"};
  }

  /**
   * Removes a coupon from the cart.
   *
   * @param {CouponRequest} request - The request object containing the cart ID and coupon code.
   * @returns {Promise<CartResponse | HttpError>} - A promise that resolves to the cart response or an HTTP error.
   * @throws {Error} - Throws an error if the default cart is not found.
   */
  async removeCoupon(request: CouponRequest): Promise<CartResponse | HttpError> {
    
    var id = request.cartId ?? null;

    if (id === null) {
      var defaultCart = await this.getDefaultCart(false);
      
      if (defaultCart === null) {
        throw new Error("Default cart not found");
      }

      if ("id" in defaultCart) {
        id = defaultCart.id;
      } else {
          return defaultCart;
      }
    }
    const cartRequestUrl = `${this.authenticationContext.endpoint}/commerceapi/cart/${id}/coupon/${request.couponCode}`;  

    const cartResponse = await remove<CartResponse>(
      cartRequestUrl,
      this.authenticationContext.token,
      this.authenticationContext.customerContext
    );

    if (cartResponse && "cart" in cartResponse) {
      if (cartResponse.cart && !cartResponse.hasErrors) {
        setStorageItem<Cart>(CART_LOCAL_STORAGE_KEY, cartResponse.cart);
      }
    }
    return cartResponse ?? {code: "500", message: "void returned"};
  }
}
