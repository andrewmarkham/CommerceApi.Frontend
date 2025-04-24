
import { AddShippingMethodRequest, Cart, Shipment } from "@jhoose-commerce/core";
import { useMemo } from "react";

import { StripeCheckoutStepProps } from "./types";
import { CheckoutStep, formatPrice, ShippingMethods, useJhooseCommerce } from "@jhoose-commerce/components";

export const StripeCheckoutShippingMethodStep = (props: StripeCheckoutStepProps) => {

    const { client } = useJhooseCommerce();

    const shipment = props.cart?.forms[0]?.shipments[0] as Shipment;

    const hasShippingMethod = useMemo(() => {
        var s = props.cart?.forms[0]?.shipments[0] as Shipment;
        return s?.shippingMethodId !== null && s.shippingMethodId.length != undefined && s.shippingMethodId.length > 0 && s.shippingMethodId !== "00000000-0000-0000-0000-000000000000";
    }, [props.cart]);

    const shipmentSummary = useMemo(() => {
        
        return `${shipment.shippingMethodName} - (${formatPrice(shipment.shippingTotal, props.cart?.currency.code ?? "USD", props.language)})`;
    }, [shipment.shippingMethodName, shipment.shippingTotal, props.cart?.currency.code, props.language]);

    return (
        <CheckoutStep step={2} 
            isOpen={props.isOpen}
            onChange={props.onPanelChange}
            heading={props.checkoutLabels.shippingMethod.heading} 
            summaryText={!hasShippingMethod ? props.checkoutLabels.shippingMethod.summaryText : shipmentSummary}
            buttonText={props.checkoutLabels.shippingMethod.buttonLabel} 
            canProceed={hasShippingMethod}
            disabled={!hasShippingMethod}
            onProceed={async () => {
                        await props.onProceed()
                    }
                }>
            <ShippingMethods labels={props.checkoutLabels} 
                address={props.cart?.forms[0]?.shipments[0]?.shippingAddress!} 
                cart={props.cart as Cart} 
                onChange={async (e) => {
                        var hasShippingMethod = e !== null && e.length != undefined && e.length > 0;
                        //setHasShippingMethod(hasShippingMethod);
                        if (hasShippingMethod) {
                            await saveShippingMethod(props.cart.id, e);
                            props.onDataChange();
                        }
                    }
                } />
        </CheckoutStep>
    );

    async function saveShippingMethod(cartId: number, shippingMethodId: string) {
        var request = {
            cartId: cartId,
            methodId: shippingMethodId
        } as AddShippingMethodRequest;

        await client()?.checkout.setShippingMethod(request);
}
}

