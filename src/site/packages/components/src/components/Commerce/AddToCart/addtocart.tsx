'use client';
import { MouseEventHandler, useMemo, useState } from "react";

import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import useCart from "@hooks/useCart";
import { toast } from "react-toastify";
import SpinnerIcon from "@components/Icons/spinnerIcon";

export type AddToCartProps = {
  text?: string;
  disabled?: boolean;
  cartId?: number;
  sku: string;
  qty: number;
};

const AddToCart = (props: AddToCartProps) => {

    const {disabled, text} = props;
    const [busy, setBusy] = useState(false);
    
    const [hasError, ] = useState(false);
    const [errorMessage, ] = useState("");

    var errorCss = "";

    const{ addToCart } = useCart();

    const onClick: MouseEventHandler<HTMLButtonElement> = () => {

        setBusy(true);

        addToCart([{sku: props.sku, qty: props.qty}])
            .then(r => {
                if (r?.hasErrors) {
                    toast(r.errors[0]);
                }
            })
            .finally(() => setBusy(false))

    };
 
    const diabledCss = disabled || busy ? " disabled " : "";
    
    useMemo(() => {
        errorCss = hasError ? " error" : " ";
    }, [hasError]);

    return (
        <>
        <button
            className={diabledCss + errorCss + " addToCart"}
            type="button"
            onClick={onClick}
            disabled={disabled}
            aria-label={text || "Add to Cart"}
            title={errorMessage}>
            <span className="grow title">{text || "Add to Cart"}</span>
            {!busy && <span className="pl-4 flex-0" ><ShoppingBagIcon className={"svg " + (hasError ? "error" : "")} /></span> }
            {busy && <span className="pl-4 flex-0"><SpinnerIcon width="24px" height="24px" /></span>}
        </button>
        </>
    );
};

export default AddToCart;

