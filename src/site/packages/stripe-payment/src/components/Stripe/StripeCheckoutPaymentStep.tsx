
import { PaymentIntentResponse, StripeCheckoutStepProps } from "./types";


import { AddPaymentRequest, CHECKOUT_FINISHED_QSP, MarketContextType, post } from '@jhoose-commerce/core';
import {AddressElement,PaymentElement, useElements, useStripe} from '@stripe/react-stripe-js';
import { buildStripeAddressOptions } from "./utils";
import { useState } from "react";
import { CheckoutStep, useJhooseCommerce } from "@jhoose-commerce/components";

export const StripeCheckoutPaymentStep = (props: StripeCheckoutStepProps) => {
 
    const { client, marketContext } = useJhooseCommerce();

    const stripe = useStripe();
    const elements = useElements();

    const addressOptions = buildStripeAddressOptions("billing", marketContext.countries, undefined, marketContext.countries[0].code);
    
    const [isPayemntValid, setIsPaymentValid] = useState(false);
    const [isAddressValid, setIsAddressValid] = useState(false);
    
    return (
        <CheckoutStep 
            step={3} 
            isOpen={props.isOpen}
            onChange={props.onPanelChange}
            heading={props.checkoutLabels.payment.sectionHeading}
            summaryText={props.checkoutLabels.payment.summaryText} 
            buttonText={props.checkoutLabels.payment.buttonLabel} 
            canProceed={isPayemntValid && isAddressValid}
            onProceed={async () => {
                        await takePayment(props.cart.id, props.cart?.totalPrice ?? 0, marketContext, props.returnUrl);
                        await props.onProceed()
                    }
                }>
            <PaymentElement onChange={(e) => setIsPaymentValid(e.complete)} />
            <AddressElement options={addressOptions} onChange={(e) => setIsAddressValid(e.complete)} />
        </CheckoutStep>
    );

    async function getPaymentIntent(cartId: number,marketContext: MarketContextType,) : Promise<PaymentIntentResponse> {
        
        var authContext = client()?.authenticationContext;
        const url = `${authContext?.endpoint}/commerceapi/stripe/paymentintent/${cartId}`;

        if (!authContext?.token) {
            throw new Error("No token available");
        }

        var response = await post<PaymentIntentResponse>(
            url, 
            {
                "marketId": marketContext.market,
                "language": marketContext.language,
            }, 
            authContext?.token, 
            authContext?.customerContext) as PaymentIntentResponse;

        return response;
    }

    async function takePayment(cartId: number, amount: number, marketContext: MarketContextType, returnUrl : string) {
        
         elements?.submit();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        
        var response = await getPaymentIntent(cartId, marketContext);
        
        var paymentRequest = {
            cartId: cartId,
            amount: amount,
            paymentMethodId: response.paymentMethodId,

            status: 'Processed',
            transactionType: 'Authorization',
            providerTransactionID: response.paymentId,
            useShippingAddress: true  // need to sort this, as we don't get this info from stripe
        } as AddPaymentRequest;

        await client()?.checkout.addPayment(paymentRequest);

        // Confirm the PaymentIntent using the details collected by the Payment Element
        await stripe?.confirmPayment({
            elements,
            clientSecret: response.clientSecret,
            confirmParams: {
                return_url: `${returnUrl}${cartId}/?${CHECKOUT_FINISHED_QSP}=true`
            },
        });
        
    }
};