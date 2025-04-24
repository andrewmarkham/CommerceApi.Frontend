import { FlexContainer } from "@components/Core/Layout";

import { Cart } from "@jhoose-commerce/core";
import { useState } from "react";
import CloseIcon from "@components/Icons/closeIcon";
import useCart from "@hooks/useCart";
import { CartSummaryLabelProps } from "../types";

export type CartSummaryDiscountProps = {
    cart: Cart
    labels: CartSummaryLabelProps;
    reloadCart: () => void;
}

export const CartSummaryDiscount = (props: CartSummaryDiscountProps ) => {

    const [busy, setBusy] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const { addCoupon, removeCoupon } = useCart();

    function applyDiscount(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault()

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const couponCode = formData.get("couponCode") as string;

        setHasError(false);
        setErrorMessage("");

        if (!couponCode) {
            return;
        }

        setBusy(true);

        addCoupon(couponCode)
            .then(r => {
                if (r?.hasErrors) {
                    setHasError(true);
                    setErrorMessage(r.errors[0]);
                }
            })
            .finally(() => {
                setBusy(false);
                props.reloadCart();
            });
    }

    function deleteCoupon(code: string) {

        removeCoupon(code)
            .then(r => {
                if (r?.hasErrors) {
                    setHasError(true);
                    setErrorMessage(r.errors[0]);
                }
            })
            .finally(() => {
                setBusy(false);
                props.reloadCart();
            });
    }

    return (
        <div className="cartSummaryDiscount">
            <label htmlFor="couponCode">{props.labels.discountLabel}</label>

            <FlexContainer direction="col">
                <form className="flex-1" method="post" onSubmit={applyDiscount}>
                    <input className="flex-1" id="couponCode" name="couponCode" type="text" placeholder={props.labels.discountPlaceholder} />
                    <button type="submit"
                            disabled={busy}
                            className={(busy ? "disabled" : "")}>{props.labels.discountApply}</button>
                </form>
                {hasError && <span className="flex-1 error">{errorMessage}</span>}
            </FlexContainer>
            {props.cart?.forms[0].coupons.length >0 ?
            <FlexContainer direction="row" className="coupons">
                {
                    props.cart.forms[0].coupons.map((c, i) => {
                        return <CouponPill key={i} coupon={c} delete={deleteCoupon} />
                    })
                }
            </FlexContainer> : null }      
        </div>
    );
};

const CouponPill = (props: {coupon: string, delete: (code: string) => void}) => {
    return (
        <a className="coupon-pill" onClick={() => props.delete(props.coupon)}>
            <span>{props.coupon}</span>
            <CloseIcon />
        </a>
    );
}