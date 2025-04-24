// @ts-nocheck
'use client';
import { Price } from "@components/Commerce/MiniCart";
import { MergeAllCartLines } from "@components/Commerce/MiniCart/utils";
import { FlexContainer } from "@components/Core/Layout"
import { Cart, CartLine } from "@jhoose-commerce/core";
import { PropsWithChildren, useMemo } from "react";
import { CartSummaryDiscount } from "./CartSummaryDiscount";

export type CartSummaryProps = {
    labels: CartSummaryLabelProps;
    cart: Cart | null;
    language: string;
    reloadCart: () => void;
};

export const CartSummary = (props: CartSummaryProps) => {

        const { cart } = props;
        const allLines = useMemo(
            () => MergeAllCartLines(cart),
            [cart]
          );
          
    return (
        <FlexContainer direction="col" className="flex-1 cartSummary">
            {allLines.map((line: CartLine, index: number) => {
                return <CartSummaryLine key={index} line={line} cart={cart as Cart} locale={props.language} />
            })}
            <CartSummaryDiscount labels={props.labels} cart={cart as Cart} reloadCart={props.reloadCart}  />
            <CartSummaryTotal cart={cart as Cart} locale={props.language} labels={props.labels} />
        </FlexContainer>)
    
};

export type CartSummaryLineProps = {
    line :CartLine,
    cart: Cart,
    locale: string
}

const CartSummaryLine = (props: CartSummaryLineProps) => {
    const { locale, line, cart } = props;

    return (

        <FlexContainer direction="row" className="cartSummaryLine">
            <img width={33} height={50} src={line.imageUrl} alt={line.displayName} />
            <FlexContainer direction="row" className="flex-1">
                <div className="flex-1">
                    <h3>{line.displayName}</h3>
                    <span className="qty">Qty: {line.qty}</span>
                </div>
                <p>
                    <Price price={line.totalPrice} currency={cart.currency.code} locale={locale} label="" />
                </p>
            </FlexContainer>
        </FlexContainer>
    );
}

export type CartSummaryTotalProps = {
    cart: Cart,
    locale: string,
    labels: CartSummaryLabelProps
}

const CartSummaryTotal = (props: CartSummaryTotalProps) => {

    const {cart, locale} = props;
    const topPadding = cart?.orderDiscountTotal > 0 ? "mt-2" : "";

    if (!cart) {
        return null;
    }

    return (
        <FlexContainer className="cartSummaryTotal" alignItems="items-end">

            <CartSummaryRow label={props.labels.subTotal} className="text-sm">
                <Price price={cart.subTotalPrice} currency={cart.currency.code} locale={locale} />
            </CartSummaryRow>

            {cart?.orderDiscountTotal > 0 &&
                <>
                    <CartSummaryRow label={props.labels.orderDiscount} className="text-sm">
                        <Price price={cart.orderDiscountTotal * -1} currency={cart.currency.code} locale={locale} />
                    </CartSummaryRow>
                </>
            }

            <CartSummaryRow label={props.labels.shippingTotal} className="text-sm">
                <Price price={cart.shippingTotal} currency={cart.currency.code} locale={locale} />
            </CartSummaryRow>

            {cart?.shippingDiscountTotal > 0 &&
                <>
                    <CartSummaryRow label={props.labels.shippingDiscount} className="text-sm">
                        <Price price={cart.shippingDiscountTotal * -1} currency={cart.currency.code} locale={locale} />
                    </CartSummaryRow>
                </>
            }

            <CartSummaryRow label={props.labels.taxTotal} className="text-sm">
                <Price price={cart.taxTotal} currency={cart.currency.code} locale={locale} />
            </CartSummaryRow>

            <CartSummaryRow label={props.labels.total} className={topPadding + "total"}>
                <Price price={cart.totalPrice} currency={cart.currency.code} locale={locale} />
            </CartSummaryRow>

        </FlexContainer>
    )
}

 type CartSummaryRowProps = {
    label: string,
    className?: string
 }

 const CartSummaryRow = (props : PropsWithChildren<CartSummaryRowProps>) => {

    return (
        <FlexContainer className={(props?.className ?? "") + " cartSummaryRow "} direction="row">
            <div className="flex-1">
                <span>{props.label}</span>
            </div>
            <div className="flex-none">
                <span>{props.children}</span>
            </div>
        </FlexContainer>
    )
 }