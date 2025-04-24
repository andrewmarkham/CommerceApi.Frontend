import { FormGroup } from "@components/Core/Forms/FormGroup";
import { Selection } from "@components/Core/Forms/Selection";
import { PhoneInput } from "@components/Core/Forms/PhoneInput";
import { TextInput } from "@components/Core/Forms/TextInput";

import { FlexContainer } from "@components/Core/Layout";
//import { useState } from "react";
import { Address, CommerceAddress } from "@jhoose-commerce/core";
import { AddressLabelProps, CheckoutLabelProps } from "../types";
import useJhooseCommerce from "@hooks/useJhooseCommerce";

export type DeliveryAddressProps = {
    labels: CheckoutLabelProps
    address: CommerceAddress | null;
    onChange: (address: CommerceAddress) => void;
};

export const DeliveryAddress = (props: DeliveryAddressProps) => {

    const { marketContext } = useJhooseCommerce();
    
    //const [address, setAddress] = useState<CommerceAddress | null>(props.address);
    
    function handleChange(newValue: string | Address, key: string) {

        if (!props?.address) {
            return;
        }
        const newAddress = { ...props?.address, [key]: newValue };
        //setAddress(newAddress);
        props.onChange(newAddress);
    }

    return (
        <FormGroup heading={props.labels.deliveryAddressHeading}  className="deliveryAddress">
            <FlexContainer direction="row" className="flex-gap">
                <TextInput name="firstName" value={props?.address?.firstName} label={props.labels.firstName} required onChange={(e) => handleChange(e as string, "firstName")}  />
                <TextInput name="lastName" value={props?.address?.lastName} label={props.labels.lastName} required onChange={(e) => handleChange(e as string, "lastName")}  />
            </FlexContainer>
            <AddressInput labels={props.labels.address} 
                address={props?.address?.address ?? null} 
                countries={marketContext.countries.map(c => ({ value: c.code, label: c.name }))}
                onChange={(e) => handleChange(e as Address, "address")}  />
            <PhoneInput name="phone"  value={props?.address?.phone} label={props.labels.phone} required onChange={(e) => handleChange(e as string, "phone")}  />
        </FormGroup>
    );

};


export type AddressProps = {
    labels: AddressLabelProps;
    address: Address | null;
    hideCountry?: boolean;
    countries:{ value: string, label: string }[];
    onChange: (address: Address) => void;
};

export const AddressInput = (props: AddressProps) => {

    var newAddress: Address;
    //const [address, setAddress] = useState<Address | null>(props.address);
    
    function handleChange(newValue: {value: string, label: string} | string, key: string) {
        if (!props?.address) {
            return;
        }
        if (key === "country") {
            var selectedItem = newValue as {value: string, label: string};
            newAddress = { ...props?.address, country: { code: selectedItem.value, name: selectedItem.label } };
        } else {
            newAddress = { ...props?.address, [key]: newValue };
        }

        //setAddress(newAddress);
        props.onChange(newAddress);
    }

    return (
        <>
            <TextInput name="line1" label={props.labels.line1} value={props?.address?.address1} required onChange={(e) => handleChange(e as string, "address1")} />

            <TextInput name="line2" label={props.labels.line2} value={props?.address?.address2} showLabel={false} onChange={(e) => handleChange(e as string, "address2")} />
            {/* Need to add this to the address metadata in commerce
            <TextInput name="line3" label={props.labels.line3} value={props?.address?.address3} showLabel={false} onChange={(e) => handleChange(e as string, "address3")}  />
            */}
            <FlexContainer direction="row"  className="flex-gap">
                <TextInput name="city" label={props.labels.city} value={props?.address?.city} required onChange={(e) => handleChange(e as string, "city")} />
                <TextInput name="postcode" label={props.labels.postcode} value={props?.address?.postcode} required onChange={(e) => handleChange(e as string, "postcode")} />
            </FlexContainer>
            
            <FlexContainer direction="row"  className="flex-gap">
                <TextInput name="state" label={props.labels.state} value={props?.address?.state} onChange={(e) => handleChange(e as string, "state")}  />
                
                <Selection name="country" 
                    label={props.labels.country} 
                    value={props?.address?.country.code} 
                    items={props.countries}
                    onChange={(e) => handleChange(e as {value: string, label: string}, "country")} required  />
            </FlexContainer>
            
        </>
    );

};

