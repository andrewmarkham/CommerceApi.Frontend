'use client';
import { Cart } from '@jhoose-commerce/core';
import {createContext, useState } from 'react';

export type CartContextType = {
  cart: Cart | null;
  setCart: React.Dispatch<React.SetStateAction<Cart | null>>;
}
const CartContext = createContext<CartContextType>({cart: null, setCart: () => {} } as CartContextType);

const CartProvider = (props : {children: React.ReactNode | undefined}) => {

    const [cart, setCart] = useState<Cart | null>(null);

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {props.children}
        </CartContext.Provider>
    );
}

export { CartProvider, CartContext};