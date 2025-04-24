import { useEffect, useState } from "react";
import { CartSummary } from "./CartSummary/CartSummary";
import { ContactDetails } from "./ContactDetails/ContactDetails";

import useCart from "@hooks/useCart";
import useJhooseCommerce from "@hooks/useJhooseCommerce";

import { FlexContainer } from "@components/Core/Layout";
import { FormContainer } from "@components/Core/Forms/FormContainer";
import { DeliveryAddress } from "./DeliveryAddress/DeliveryAddress";
import { ShippingMethods } from "./ShippingMethods/ShippingMethods";
import { AddShippingAddressRequest, AddShippingMethodRequest, Cart, CommerceAddress, Shipment } from "@jhoose-commerce/core";
import { CheckoutStep } from "./CartSummary/CheckoutStep";
import { formatPrice } from "../MiniCart/utils";
import { CheckoutProps } from "./types";



const emptyAddress = {
    id: "",
    firstName: "",
    lastName: "",
    address: {
        address1: "",
        address2: "",
        address3: "",
        city: "",
        postcode: "",
        state: "",
        country: { code: "", name: ""}
    },
    phone: "",
    email: "",
    addressTypes: ['Shipping']
} as CommerceAddress;


const emptyShipment = {
    id: -1,
    shipmentTrackingNumber: "",
    shippingMethodId: "",
    shippingMethodName: "",
    shippingAddress: emptyAddress,
    shippingTotal: 0,
    shippingDiscountPrice: 0,
    lines: []
} as Shipment;


export const Checkout = (props: CheckoutProps) => {

    const [ reloadCart, setReloadCart ] =  useState(false);
    const [ currentStep, setCurrentStep ] = useState(1);
    const { cart } = useCart([reloadCart]);
    const { client, marketContext } = useJhooseCommerce();

    const [address, setAddress] = useState<CommerceAddress | null>(cart?.forms[0]?.shipments[0]?.shippingAddress ?? null);
    const [shipment, setShipment] = useState<Shipment>(emptyShipment);

    useEffect(() => {
        if (cart) {
            setAddress(cart?.forms[0]?.shipments[0]?.shippingAddress);
            setShipment(cart?.forms[0]?.shipments[0]);
        }
    }, [cart, reloadCart]);

    function handleChange(newValue: string | CommerceAddress | undefined, key: string) {
        if (key === "address") {
            var newAddress = { ...newValue as CommerceAddress, email: address?.email } as CommerceAddress;
            setAddress(newAddress as CommerceAddress);
        } else if (key === "email") {
            var newAddress = { ...address, [key]: newValue } as CommerceAddress;

            setAddress(newAddress);
        } else if (key === "shippingmethod") {
            var newShipment = { ...shipment, ["shippingMethodId"]: newValue } as Shipment;
            setShipment(newShipment);
        }         
    }
    
     async function handleProceedToDelivery() {
        if (contactStepValid) {
            var request = {
                cartId: cart?.id,
                address: address,
            } as AddShippingAddressRequest;

            await client()?.checkout.setShippingAddress(request);
            setCurrentStep(2);
            setReloadCart(!reloadCart);
        }
    }

    async function handleProceedToPayment() {

        if (hasShippingMethod) {
            
            var request = {
                cartId: cart?.id,
                methodId: shipment.shippingMethodId
            } as AddShippingMethodRequest;

            await client()?.checkout.setShippingMethod(request);

            setCurrentStep(3);
            setReloadCart(!reloadCart);
        } 
    } 



    const hasValidAddress = address !== null && (address.address.address1?.length ?? 0) > 0 && 
        (address.address.city?.length ?? 0) > 0 && 
        (address.address.postcode?.length ?? 0) > 0 && 
        (address.address.country.code?.length ?? 0) > 0;

    const hasValidContact = address !== null && (address.firstName?.length ?? 0) > 0 && (address.lastName?.length ?? 0) > 0;
    const hasValidEmail = validateAddress(address?.email);
    const hasValidPhone = validatePhone(address?.phone);
    const contactStepValid = hasValidAddress && hasValidContact && hasValidEmail && hasValidPhone;

    const addressSummary = `${address?.address.address1}, ${address?.address.city}, ${address?.address.postcode}, ${address?.address.country.name}`;
    
    const hasShippingMethod = shipment.shippingMethodId !== null && shipment.shippingMethodId.length != undefined && shipment.shippingMethodId.length > 0;
    const shipmentSummary = `${shipment.shippingMethodName} - (${formatPrice(shipment.shippingTotal, cart?.currency.code ?? "USD", marketContext.language)})`;

    return (
        <FlexContainer direction="row" className="checkout">
            <div className="left">
                <FormContainer className="checkoutForm" handleSubmit={handleSubmit}>
                    
                    <CheckoutStep step={1} 
                        isOpen={currentStep === 1}
                        onChange={(e) => setCurrentStep(e.step)}
                        heading={"Contact Details"} 
                        summaryText={!contactStepValid ? "Enter contact details"  : addressSummary}
                        buttonText={"Continue to Delivery"} 
                        canProceed={contactStepValid}
                        disabled={false}
                        onProceed={async () => await handleProceedToDelivery()}>

                        <ContactDetails labels={props.checkoutLabels} email={address?.email ?? ""}  onChange={(e) => handleChange(e, "email")} />
                        <DeliveryAddress labels={props.checkoutLabels} address={address} onChange={(e) => handleChange(e, "address")} />
                    </CheckoutStep>
                    
                    <CheckoutStep step={2} 
                        isOpen={currentStep === 2}
                        onChange={(e) => setCurrentStep(e.step)}
                        heading={"Delivery"} 
                        summaryText={!hasShippingMethod ? "Select a shipping method" : shipmentSummary}
                        buttonText={"Continue to Payment"} 
                        canProceed={hasShippingMethod}
                        disabled={!hasShippingMethod}
                        onProceed={async () => await handleProceedToPayment()}>
                        <ShippingMethods labels={props.checkoutLabels} address={address} cart={cart as Cart} onChange={(e) => handleChange(e, "shippingmethod")} />
                    </CheckoutStep>
                    
                    <CheckoutStep 
                        step={3} 
                        isOpen={currentStep === 3}
                        onChange={(e) => setCurrentStep(e.step)}
                        heading={"Payment"} 
                        buttonText={"Take Payment"} 
                        canProceed={true}
                        onProceed={() => console.log("Proceed to payment")}>
                    </CheckoutStep>
                    
                </FormContainer>
            </div>
            <div className="right">
                <CartSummary cart={cart} labels={props.cartLabels} language={marketContext.language} reloadCart={() => setReloadCart(!reloadCart)}/>
            </div>
            
        </FlexContainer>)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }
}

function validateAddress(email: string | undefined): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if ((email?.length ?? 0) === 0) return false;

    return emailRegex.test(email ?? "");  
}

function validatePhone(phone: string | undefined): boolean {

    if ((phone?.length ?? 0) === 0) return false;

    return true; 
}