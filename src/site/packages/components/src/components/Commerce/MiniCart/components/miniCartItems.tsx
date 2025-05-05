'use client';
import { Cart, CartLine } from "@jhoose-commerce/core";
import { MiniCartLine } from "./miniCartLine";
import { MiniCartLabelProps } from "../minicart";

export const MiniCartItems = (props: {cart: Cart, items: CartLine[], locale: string, labels: MiniCartLabelProps}) => {
    return (
        props.items.map((l: CartLine) => {
            return (
                <MiniCartLine key={l.id} line={l} cart={props.cart} locale={props.locale} labels={props.labels} />
            );
        }
    ))
}