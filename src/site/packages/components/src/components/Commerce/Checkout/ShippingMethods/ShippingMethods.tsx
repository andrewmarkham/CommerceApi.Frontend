import { FormGroup } from "@components/Core/Forms/FormGroup";
import { Cart, CommerceAddress } from "@jhoose-commerce/core";
import { CheckoutLabelProps } from "../types";
import { useEffect, useState } from "react";

import useJhooseCommerce from "@hooks/useJhooseCommerce";

import { formatPrice } from "@components/Commerce/MiniCart/utils";
import { ShippingMethod,ShippingMethodRequest } from "@jhoose-commerce/core";

export type ShippingMethodProps = {
    labels: CheckoutLabelProps,
    address: CommerceAddress | null,
    cart: Cart
    onChange: (newValue: string) => void
};

export const ShippingMethods = (props: ShippingMethodProps) => {

    const { address } = props;
    const { client, marketContext } = useJhooseCommerce();
    const [shippingMethods, setShippingMethods] = useState<ShippingMethod[]>([]);

    const hasAddress = address !== null && (address.address.address1?.length ?? 0) > 0 && 
        (address.address.city?.length ?? 0) > 0 && 
        (address.address.postcode?.length ?? 0) > 0 && 
        (address.address.country.code?.length ?? 0) > 0;

    useEffect(() => {

        if (!hasAddress) {
            return;
        }

        var request: ShippingMethodRequest = {
            marketId: marketContext.market,
            shippingCountry: address.address.country.code,
            cartId: props.cart?.id
        };

        client()?.checkout.getShippingMethods(request)
            .then((response) => {
                if ("shippingMethods" in response) {
                    setShippingMethods(response.shippingMethods);
                } else {
                    console.error(response);
                }
            });

    }, [hasAddress]);

    
    function handleChange(newValue: string) {
        props.onChange(newValue);
    }

    return (
        
        <FormGroup heading={props.labels.shippingMethod.heading}>
            {!hasAddress ? 
            props.labels.shippingMethod.instructions :
            <RenderShipingMethods items={shippingMethods} cart={props.cart as Cart} locale={marketContext.language} handleChange={e => handleChange(e)} />}
        </FormGroup>
    );

};

type RenderShipingMethodsProps = {
    items: ShippingMethod[], 
    cart: Cart, 
    locale: string,
    handleChange: (newValue: string) => void
}
const RenderShipingMethods = (props: RenderShipingMethodsProps) => {
    const { items, cart, locale } = props;
    const shipment = cart.forms[0].shipments[0];

    return (
        <div className="shippingMethods">
            {items.map((item, index) => (
                <div key={index}  className="shippingMethodItem">
                    <span className="price">{formatPrice(item.price, cart.currency.code, locale)}</span>
                    <label htmlFor={item.id}>{item.displayName}</label>
                    <input type="radio" 
                        id={item.id} 
                        name="shippingMethod" 
                        value={item.id} 
                        defaultChecked={item.id === shipment.shippingMethodId}
                        onChange={(e) => props.handleChange(e.target.value)} />
                </div>
            ))}
        </div>
    );
};