'use client';
import { useMemo, useState } from "react";

import { MergeAllCartLines } from "./utils";
import { EmptyCart } from "./components/emptyCart";
import { MiniCartFooter } from "./components/miniCartFooter";
import { MiniCartItems } from "./components/miniCartItems";
import useJhooseCommerce from "@hooks/useJhooseCommerce";
import { FlexContainer } from "@components/Core/Layout/Flex/FlexContainer";
import useCart from "@hooks/useCart";

export type MiniCartProps = {
    mode?: "drawer" | "onpage";
    show: boolean;
    labels?: MiniCartLabelProps;
    checkoutUrl: string;
};

export type MiniCartLabelProps ={
    heading: string,
    total: string,
    subTotal: string,
    orderDiscount: string,
    updateQuantity: string,
    emptyCart: string,
    remove: string,
    checkout: string
}

const defaultLabels ={
    heading: "Your Cart",
    total: "Total :",
    subTotal: "Sub Total :",
    orderDiscount: "Order Discount :",
    updateQuantity: "Update Quantity",
    emptyCart: "Your cart is empty",
    remove: "Remove",
    checkout: "Go to Checkout"
}

const MiniCart = (props: MiniCartProps) => {

    const [ reloadCart, setReloadCart ] =  useState(false);
    const { cart } = useCart([props.show, reloadCart]);

    const { marketContext } = useJhooseCommerce();

    const labels  = {...defaultLabels, ...props.labels};
   
    const allLines = useMemo(
        () => MergeAllCartLines(cart),
        [props.show, cart]
      );

    return (
        <>
            {cart && allLines.length> 0 ? 
                <FlexContainer direction="col" className="grow miniCartContent">
                    <div className="flex-1 miniCartItems" >
                        <MiniCartItems cart={cart} items={allLines} locale={marketContext.language} labels={labels} onCartUpdated={() => setReloadCart(!reloadCart)} />
                    </div> 
                    <div className="flex-none">
                        { cart &&
                            <MiniCartFooter cart={cart} mode={props?.mode ?? "drawer"} locale={marketContext.language} checkoutUrl={props.checkoutUrl} labels={labels}/>
                        }
                    </div>
                </FlexContainer>:
                <EmptyCart message={labels.emptyCart} />
            } 
        </>
    );
};


export default MiniCart;

