'use client';

import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementLocale, StripeElementsOptions } from "@stripe/stripe-js";

import { StripeCheckoutAddressStep } from "./StripeCheckoutAddressStep";

import { StripeCheckoutShippingMethodStep } from "./StripeCheckoutShippingMethodStep";


import { FormContainer, FlexContainer,CartSummary, useCart,useJhooseCommerce, CheckoutProps, PanelChangeEvent } from "@jhoose-commerce/components";
import { StripeCheckoutPaymentStep } from "./StripeCheckoutPaymentStep";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY ?? "");

export const StripeCheckout = (props: CheckoutProps) => {

    const [ reloadCart, setReloadCart ] =  useState(false);
    const [ currentStep, setCurrentStep ] = useState(1);
    const { cart } = useCart([reloadCart]);
    const { marketContext } = useJhooseCommerce();
    const [amount, setAmount] = useState(0);

    async function proceedToStep(step: number) {
        setCurrentStep(step);
        setReloadCart(!reloadCart);
    }

    function handleOnChange(e: PanelChangeEvent) {
        if (e.state === "closed") {
            setCurrentStep(-1);
        }
        else {
            setCurrentStep(e.step);
        }
    }

    function handleDataChange() {
        setReloadCart(!reloadCart);
        //setAmount((cart?.totalPrice ?? 0) * 100);
    }

    useEffect(() => {
        setAmount((cart?.totalPrice ?? 0) * 100);
    },[cart]);

    if (amount === 0)
        return null;

    const stripeOptions: StripeElementsOptions = {
        mode: 'payment',
        locale: marketContext.language as StripeElementLocale,
        amount,
        currency: (cart?.currency.code ?? "usd").toLowerCase(),
        appearance: { 
            theme: 'stripe',
            variables: {

            }
        },
    };

    return (

        <FlexContainer direction="row" className="checkout">
            <div className="left">
                <Elements stripe={stripePromise} options={stripeOptions} >

                    <FormContainer className="checkoutForm" handleSubmit={(e) => {
                        e.preventDefault();
                    }}>
                        
                        <StripeCheckoutAddressStep {...props} 
                            isOpen={currentStep === 1}
                            cart={cart!} language={marketContext.language} 
                            onProceed={async () => await proceedToStep(2)} 
                            onDataChange={() => handleDataChange()}
                            onPanelChange={ (e:PanelChangeEvent) => handleOnChange(e)} />

                        <StripeCheckoutShippingMethodStep {...props} 
                            isOpen={currentStep === 2}
                            cart={cart!} language={marketContext.language} 
                            onProceed={async () => await proceedToStep(3)} 
                            onDataChange={() => handleDataChange()}
                            onPanelChange={ (e:PanelChangeEvent) => handleOnChange(e)} />

                        <StripeCheckoutPaymentStep {...props} 
                            isOpen={currentStep === 3}
                            cart={cart!} language={marketContext.language} 
                            onProceed={async () => {} }
                            onDataChange={() => handleDataChange()}
                            onPanelChange={ (e:PanelChangeEvent) => handleOnChange(e)} />

                    </FormContainer>
                </Elements>
            </div>
            <div className="right">
                <CartSummary cart={cart} 
                    labels={props.cartLabels} 
                    language={marketContext.language} 
                    reloadCart={() => handleDataChange()}/>
            </div>
        </FlexContainer>)
}