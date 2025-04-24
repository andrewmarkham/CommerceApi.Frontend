

import { CheckoutProps, PanelChangeEvent } from "@jhoose-commerce/components";
import { Cart, CommerceAddress } from "@jhoose-commerce/core";


export type StripeCheckoutStepProps = CheckoutProps & {
    isOpen: boolean;
    cart: Cart;
    language: string;
    onPanelChange: (event: PanelChangeEvent) => void;
    onDataChange: () => void;
    onProceed: () => Promise<void>;
}


export type StripeShippingAddressProps = CheckoutProps & {
    cart: Cart;
    address: CommerceAddress;
    onChange: (event: StripeShippingAddressEvent) => void;
}

export type StripeShippingAddressEvent = {
    complete: boolean;
    value: CommerceAddress;
}

export type PaymentIntentResponse = {
    clientSecret: string;
    paymentId: string;
    paymentMethodId: string;
}