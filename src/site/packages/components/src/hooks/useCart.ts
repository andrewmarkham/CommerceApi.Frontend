import {
  AddToCartRequest,
  Cart,
  CartResponse,
  HttpError,
  MarketContextType,
  UpdateLineCartRequest,
} from "@jhoose-commerce/core";

import useJhooseCommerce from "./useJhooseCommerce";
import { useEffect, useState } from "react";
import { Logger } from "@helpers/logging";

interface useCartProps {
  cart: Cart | null;
  marketContext: MarketContextType;
  addToCart: (items: [{ sku: string; qty: number }]) => Promise<CartApiResponse | undefined>;
  removeLineFromCart: (sku: string) => Promise<CartApiResponse | undefined>;
  updateCartLine: (
    lineId: number,
    sku: string,
    quantity: number
  ) => Promise<CartApiResponse | undefined>;
  addCoupon: (couponCode: string) => Promise<CartApiResponse | undefined>;
  removeCoupon: (couponCode: string) => Promise<CartApiResponse | undefined>;
}

export interface CartApiResponse {
  cart: Cart | null;
  hasErrors: boolean;
  errors: string[];
}

export function useCart(dependencies?: any[]): useCartProps {
  const [innerCart, setInnerCart] = useState<Cart | null>(null);

  const { client, marketContext } = useJhooseCommerce();

  useEffect(() => {
    const getDefaultCart = async () => {
      const response = await client()?.cart.getDefaultCart(false);

      if (response && "message" in response) {
        alert(response?.message);
      } else {
        setInnerCart(response || null);
      }
    };

    getDefaultCart();
  }, [...(dependencies ?? [])]);

  return {
    cart: innerCart,
    marketContext: marketContext,
    addToCart: async (items: [{ sku: string; qty: number }]) => {

      var cartId = innerCart?.id ?? 0;

      if (innerCart === null) {

        // create a new cart as none exists for the user
        const newCartResponse = await client()?.cart.getDefaultCart(true);

        if (newCartResponse && "message" in newCartResponse) {
          alert(newCartResponse?.message);
        } else {
          cartId = newCartResponse?.id ?? 0;
        }
      }

      var request: AddToCartRequest = {
        cartId: cartId,
        items: items,
      };

      var response = await client()?.cart.addToCart(request);

      return handleResponse("addToCart", response);
    },
    removeLineFromCart: async (sku: string) => {
      if (innerCart === null) {
        return;
      }
      var response = await client()?.cart.removeLineFromCart(
        innerCart.id,
        sku
      );

      return handleResponse("removeLineFromCart", response);
    },
    updateCartLine: async (lineId: number, sku: string, quantity: number) => {
      if (innerCart === null) {
        return;
      }

      var request = {
        cartId: innerCart.id,
        lineId: lineId,
        sku: sku,
        qty: quantity,
      } as UpdateLineCartRequest;

      var response = await client()?.cart.updateCartLine(request);

      return handleResponse("updateCartLine", response);
    },
    addCoupon: async (couponCode: string) => {
      if (innerCart === null) {
        return;
      }

      var response = await client()?.cart.addCoupon({
        cartId: innerCart.id,
        couponCode: couponCode,
      });

      return handleResponse("addCoupon", response);
    },
    removeCoupon: async (couponCode: string) => {
      if (innerCart === null) {
        return;
      }

      var response = await client()?.cart.removeCoupon({
        cartId: innerCart.id,
        couponCode: couponCode,
      });

      return handleResponse("removeCoupon", response);
    },
  };

  function handleResponse(
    methodName: string,
    response: CartResponse | HttpError | undefined
  ) : CartApiResponse {

    var logger = new Logger("useCart");

    if (response !== undefined && "cart" in response) {
      if (response.hasErrors) {
        return {
          cart: null,
          hasErrors: true,
          errors: [response.errors[0].message[0]],
        }
      } else {
        setInnerCart(response.cart);

        return {
          cart: response.cart,
          hasErrors: false,
          errors: [],
        }
      }
    } else {
      logger.log(`${methodName} : ${response?.message ?? ""}`);
      return {
        cart: null,
        hasErrors: true,
        errors: [`${methodName} : ${response?.message ?? ""}`],
      }
    }
  }
}

export default useCart;
