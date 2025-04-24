import { FormFieldLabelProps } from "@components/Core/Forms/FormContainer";

export type AddressLabelProps = {
    line1: FormFieldLabelProps;
    line2: FormFieldLabelProps;
    line3: FormFieldLabelProps;
    city: FormFieldLabelProps;
    postcode: FormFieldLabelProps;
    state: FormFieldLabelProps;
    country: FormFieldLabelProps;
};

export type SectionLabelProps = {
    sectionHeading: string
    heading: string;
    summaryText: string;
    buttonLabel: string; 
};

export type ShippingSectionLabelProps = SectionLabelProps & {
    instructions: string;
}

export type CheckoutLabelProps = {
    contactDetails: SectionLabelProps;
    email: FormFieldLabelProps;
    deliveryAddressHeading: string;
    firstName: FormFieldLabelProps;
    lastName: FormFieldLabelProps;
    phone: FormFieldLabelProps;
    address: AddressLabelProps
    shippingMethod: ShippingSectionLabelProps;
    payment: SectionLabelProps;
}

export type CartSummaryLabelProps ={
    total: string,
    subTotal: string,
    orderDiscount: string,
    shippingTotal: string,
    shippingDiscount: string,
    taxTotal: string,
    qty: string,
    discountLabel: string
    discountPlaceholder: string,
    discountApply: string,
}


export type CheckoutProps = {
    returnUrl: string;
    cartLabels: CartSummaryLabelProps;
    checkoutLabels: CheckoutLabelProps;
}

export type PanelChangeEvent = {
    state: 'open' | 'closed';
    step: number;
}

export type CheckoutStepProps = {
    step: number;
    isOpen: boolean;
    heading: string;
    summaryText?: string;
    buttonText: string;
    canProceed?: boolean;
    disabled?: boolean;
    onProceed: () => void;
    onChange: (event: PanelChangeEvent) => void;
}

