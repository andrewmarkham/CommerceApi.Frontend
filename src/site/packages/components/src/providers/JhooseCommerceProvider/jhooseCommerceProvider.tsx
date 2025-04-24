'use client'
 
import { AuthenticationContextType, CART_LOCAL_STORAGE_KEY, CUSTOMER_CONTEXT_COOKIE, REMOVE_CART_COOKIE, removeStorageItem } from '@jhoose-commerce/core';
import {createContext, useEffect } from 'react';
import Cookies from 'js-cookie';

const JhooseCommerceContext = createContext<AuthenticationContextType>({ isAnonymous: true, token: "", customerContext: "", endpoint: "" });

const JhooseCommerceProvider = (props : {children :React.ReactNode}) => {

    //const [cookies,removeCookie, ] = useCookies([CUSTOMER_CONTEXT_COOKIE, REMOVE_CART_COOKIE]);

    const customerContext = JSON.parse(Cookies.get(CUSTOMER_CONTEXT_COOKIE) ?? "{}");
    const purgeCart =  Cookies.get(REMOVE_CART_COOKIE) as string === "true" ? true : false;

    useEffect(() => {
        if (purgeCart === true) {
          removeStorageItem(CART_LOCAL_STORAGE_KEY);
          Cookies.remove(REMOVE_CART_COOKIE);
          //removeCookie(REMOVE_CART_COOKIE, false, { sameSite: "strict", secure: true, path: '/',httpOnly: false, expires: new Date(Date.now() + 1000 * 60) });
        }
      }, []);

    return (
      <>
        <JhooseCommerceContext.Provider value={{ 
            isAnonymous: customerContext?.isAnonymous ?? true,
            token: customerContext?.token, 
            customerContext: customerContext?.customerContext,
            endpoint: customerContext?.endpoint
            }}>
            {props.children}
        </JhooseCommerceContext.Provider>

      </>
    );
}

export { JhooseCommerceProvider, JhooseCommerceContext};