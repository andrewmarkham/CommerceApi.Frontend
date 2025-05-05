import {
  AddToCartRequest,
  Cart,
  CartResponse,
  HttpError,
  MarketContextType,
  UpdateLineCartRequest,
} from "@jhoose-commerce/core";

import useJhooseCommerce from "./useJhooseCommerce";
import { useContext, useEffect } from "react";
import { Logger } from "@helpers/logging";
import { CartContext } from "@providers/CartProvider";

interface useCartProps {
  cart: Cart | null;
  setCart: React.Dispatch<React.SetStateAction<Cart | null>>;
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

  const {cart, setCart} = useContext(CartContext);
  const { client, marketContext } = useJhooseCommerce();

  useEffect(() => {
    const getDefaultCart = async () => {
      const response = await client()?.cart.getDefaultCart(false);

      if (response && "message" in response) {
        alert(response?.message);
      } else {
        setCart(response || null);
      }
    };

    getDefaultCart();
  }, [...(dependencies ?? [])]);

  return {
    cart: cart,
    setCart: setCart,
    marketContext: marketContext,
    addToCart: async (items: [{ sku: string; qty: number }]) => {

      var cartId = cart?.id ?? 0;

      if (cart === null) {

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
      if (cart === null) {
        return;
      }
      var response = await client()?.cart.removeLineFromCart(
        cart.id,
        sku
      );

      return handleResponse("removeLineFromCart", response);
    },
    updateCartLine: async (lineId: number, sku: string, quantity: number) => {
      if (cart === null) {
        return;
      }

      var request = {
        cartId: cart.id,
        lineId: lineId,
        sku: sku,
        qty: quantity,
      } as UpdateLineCartRequest;

      var response = await client()?.cart.updateCartLine(request);

      return handleResponse("updateCartLine", response);
    },
    addCoupon: async (couponCode: string) => {
      if (cart === null) {
        return;
      }

      var response = await client()?.cart.addCoupon({
        cartId: cart.id,
        couponCode: couponCode,
      });

      return handleResponse("addCoupon", response);
    },
    removeCoupon: async (couponCode: string) => {
      if (cart === null) {
        return;
      }

      var response = await client()?.cart.removeCoupon({
        cartId: cart.id,
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
        setCart(response.cart);

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
