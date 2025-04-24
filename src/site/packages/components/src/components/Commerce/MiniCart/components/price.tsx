'use client';
import { formatPrice } from "../utils";

export type PriceProps = {
    price :number,
    label?: string,
    currency: string,
    locale: string
}

export const Price = (props: PriceProps) => {

    const { price, label, currency, locale } = props;
    
    return <span className="price">
            {label && <span className="label">{label}</span>}
            {formatPrice(price, currency , locale)}
           </span>
}

