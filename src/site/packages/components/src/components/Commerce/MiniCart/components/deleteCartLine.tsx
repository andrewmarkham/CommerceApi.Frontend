'use client';

import { CartLine, Cart } from "@jhoose-commerce/core";
import { MiniCartLabelProps } from "../minicart";
import useCart from "@hooks/useCart";
import { toast } from "react-toastify";

export const DeleteCartLine = (props: { line: CartLine; cart: Cart; labels: MiniCartLabelProps; onCartUpdated: () => void; }) => {

    const{ removeLineFromCart } = useCart();

    const { line } = props;

    function deleteLine() {
        removeLineFromCart(line.sku)
            .then(r =>{
                if (r?.hasErrors) {
                    toast(r.errors[0]);
                }
            })
            .finally(() => props.onCartUpdated());
    }

    return (
        <button onClick={ () => deleteLine()} className="miniCartDelete">{props.labels.remove}</button>
    );
};
