'use client';
import { Cart, CartLine } from "@jhoose-commerce/core";
import useJhooseCommerce from "../../../../hooks/useJhooseCommerce";
import { useState } from "react";
import { Price } from "./price";
import PlusIcon from "../../../Icons/plusIcon";
import MinusIcon from "../../../Icons/minusIcon";
import {QuantityButton} from "./quantityButton";

import { MiniCartLabelProps } from "../minicart";
import { FlexContainer } from "@components/Core/Layout/Flex/FlexContainer";
import useCart from "@hooks/useCart";
import { toast } from "react-toastify";

export type QuantityProps = {
    line :CartLine,
    cart: Cart,
    labels: MiniCartLabelProps,
    onCartUpdated: () => void
}

export const Quantity = (props: QuantityProps) => {

    const { marketContext } = useJhooseCommerce();
    const { line, cart, onCartUpdated } = props;

    const [busy, setBusy] = useState(false);

    const{ updateCartLine } = useCart();

    function updateQuantity(newQty: number) {

        if (newQty < 1) {
            return;
        }

        setBusy(true);

        updateCartLine(line.id, line.sku, newQty)
            .then(r => {
                if (r?.hasErrors) {
                    toast(r.errors[0]);
                }
            })
            .finally(() => {
                onCartUpdated(); 
                setBusy(false)
            });    
    }

    return (
        <div>
            <FlexContainer direction="row" alignItems="items-center" className="miniCartQty">
                <QuantityButton updateQuantity={() => updateQuantity(line.qty - 1)} disabled={busy} position="left">
                    <MinusIcon />
                </QuantityButton>
                <input type="text" readOnly value={line.qty} disabled={busy} aria-label={props.labels.updateQuantity} placeholder="999" required />
                <QuantityButton updateQuantity={() => updateQuantity(line.qty + 1)} disabled={busy} position="right">
                    <PlusIcon />     
                </QuantityButton> 
            </FlexContainer>
            <Price price={line.discountedPrice} currency={cart.currency.code} locale={marketContext.language} label={props.labels.total} />
        </div>
    );
}




