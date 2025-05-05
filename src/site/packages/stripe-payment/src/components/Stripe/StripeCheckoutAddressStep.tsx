
import { StripeShippingAddress } from "./StripeShippingAddress";
import { AddShippingAddressRequest, Cart, CommerceAddress } from "@jhoose-commerce/core";
import { useMemo, useState } from "react";

import { StripeCheckoutStepProps, StripeShippingAddressEvent } from "./types";
import { CheckoutStep, useCart, useJhooseCommerce } from "@jhoose-commerce/components";

export const StripeCheckoutAddressStep = (props: StripeCheckoutStepProps) => {

    const { client } = useJhooseCommerce();
    const { setCart }  = useCart();
    const [address, setAddress] = useState<CommerceAddress | null>(props.cart?.forms[0]?.shipments[0]?.shippingAddress);

    const [, setIsDirty] = useState(false);
    const [contactStepValid, setContactStepValid] = useState(false);
    
    const addressSummary = useMemo(() => {
        return `${address?.address.address1}, ${address?.address.city}, ${address?.address.postcode}, ${address?.address.country.name}`;
    }, [address]);
    
    return (
        <CheckoutStep step={1} 
            isOpen={props.isOpen}
            onChange={props.onPanelChange}
            heading={props.checkoutLabels.contactDetails.sectionHeading} 
            summaryText={!contactStepValid ? props.checkoutLabels.contactDetails.summaryText  : addressSummary}
            buttonText={props.checkoutLabels.contactDetails.buttonLabel}  
            canProceed={contactStepValid}
            disabled={!contactStepValid}
            onProceed={async () => {
                        await saveAddress(props.cart.id, address as CommerceAddress)
                        await props.onProceed()
                    }
                }>

            <StripeShippingAddress 
                address={address as CommerceAddress} 
                {...props}
                onChange={(e: StripeShippingAddressEvent) => {
                    setIsDirty(true);
                    setContactStepValid(e.complete);
                    if (e.complete) {
                        setAddress(e.value);
                    }
                }} />
        </CheckoutStep>
    )

    async function saveAddress(cartId: number, address: CommerceAddress) {
        var request = {
            cartId: cartId,
            address: address,
        } as AddShippingAddressRequest;

        var response = await client()?.checkout.setShippingAddress(request);
        if (response && "message" in response) {
            alert(response?.message);
        }
        else {
            setCart(response?.cart as Cart);
        }
        setIsDirty(false);
        props.onDataChange();
    }
};