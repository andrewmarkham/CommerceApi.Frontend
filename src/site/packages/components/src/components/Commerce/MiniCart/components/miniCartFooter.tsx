'use client';
import { Cart } from "@jhoose-commerce/core";
import { Price } from "./price";
import { PropsWithChildren } from "react";
import { MiniCartLabelProps } from "../minicart";
import { FlexContainer } from "@components/Core/Layout/Flex/FlexContainer";

export type CartFooterProps = {
    mode: "drawer" | "onpage";
    cart: Cart,
    locale: string,
    checkoutUrl: string,
    labels: MiniCartLabelProps
}
export const MiniCartFooter = (props: CartFooterProps) => { 

    const {cart, locale} = props;
    const topPadding = cart.orderDiscountTotal > 0 ? "mt-2" : "";
    const modeClass = props.mode === "onpage" ? " onpage " : "";
    return (
        <FlexContainer className={"miniCartFooter" + modeClass} alignItems="items-end">
            {cart.orderDiscountTotal > 0 &&
                <>
                    <FooterRow className={modeClass} label={props.labels.subTotal}>
                        <Price price={cart.subTotalPrice} currency={cart.currency.code} locale={locale} />
                    </FooterRow>
                    <FooterRow className={modeClass} label={props.labels.orderDiscount}>
                        <Price price={cart.orderDiscountTotal * -1} currency={cart.currency.code} locale={locale} />
                    </FooterRow>
                </>
            }
            <FooterRow label={props.labels.total} className={topPadding + modeClass + " bold"}>
                <Price price={cart.totalPrice} currency={cart.currency.code} locale={locale} />
            </FooterRow>
            <CheckoutButton className={modeClass} title={props.labels.checkout} url={props.checkoutUrl}/>
        </FlexContainer>
    )
 }


 type FooterRowProps = {
    label: string,
    className?: string
 }

 const FooterRow = (props : PropsWithChildren<FooterRowProps>) => {

    return (
        <FlexContainer className={(props?.className ?? "") + " footerRow "} direction="row">
            <div className="flex-1">
                <p>{props.label}</p>
            </div>
            <div className="flex-none">
                <p>{props.children}</p>
            </div>
        </FlexContainer>
    )
 }

 type CheckoutButtonProps = {
    className?: string
    title: string
    url: string
 }

 const CheckoutButton = (props: CheckoutButtonProps) => {
    return (
        <a className={ "checkoutButton " + (props?.className ?? "")} href={props.url}>{props.title}</a>
    )
 }