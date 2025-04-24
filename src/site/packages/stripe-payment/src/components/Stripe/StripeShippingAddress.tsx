import { buildStripeAddressOptions, toThreeDigitCountryCode, validateEmailAddress } from "./utils";

import { CommerceAddress } from "@jhoose-commerce/core";
import { useEffect, useState } from "react";
import { AddressElement } from "@stripe/react-stripe-js";

import { StripeShippingAddressProps } from "./types";
import { ContactDetails, useJhooseCommerce } from "@jhoose-commerce/components";

export const StripeShippingAddress = (props: StripeShippingAddressProps) => {

    const { marketContext } = useJhooseCommerce();

    const addressOptions = buildStripeAddressOptions("shipping",  marketContext.countries, props.address, marketContext.countries[0].code);

    useEffect(() => {
        if (props.address) {
            setAddress(props.address);
        }
    }, [props.address]);

    const [address, setAddress] = useState<CommerceAddress>(props?.address ?? { address: { country: { code: "", name: ""}} } as CommerceAddress);
    
    const hasValidEmail = validateEmailAddress(address?.email);
    const [hasValidAddress, setHasValidAddress] = useState(false);

    return (
        <>
            <ContactDetails labels={props.checkoutLabels} email={props.address?.email ?? ""}  onChange={(e) => {
                    var newAddress = { ...address, ["email"]: e } as CommerceAddress;
                    setAddress(newAddress);

                    console.log("StripeShippingAddress", e);
                    props.onChange({complete: hasValidAddress && hasValidEmail, value: newAddress});

                }} />
            <AddressElement options={addressOptions} onChange={(event) => {

                var newAddress: CommerceAddress = address;

                newAddress.firstName = event.value.firstName ?? "";
                newAddress.lastName = event.value.lastName ?? "";
                newAddress.address.address1 = event.value.address.line1;
                newAddress.address.address2 = event.value.address.line2 ?? "";
                newAddress.address.city = event.value.address.city;
                newAddress.address.state = event.value.address.state;
                newAddress.address.postcode = event.value.address.postal_code;
                newAddress.address.country.code = toThreeDigitCountryCode(event.value.address.country);
                newAddress.phone = event.value.phone ?? "";

                setAddress(newAddress);
                setHasValidAddress(event.complete);

                props.onChange({complete: event.complete && hasValidEmail, value: newAddress});
                }} 
            />
        </>
    )
};

