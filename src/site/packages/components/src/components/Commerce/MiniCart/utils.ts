import { Cart, CartLine, OrderForm, Shipment } from "@jhoose-commerce/core";

/**
 * Merges all cart lines from the given cart into a single array.
 *
 * @param cart - The cart object which may be null or undefined.
 * @returns An array containing all cart lines from the cart's forms, shipments, and lines.
 */
export function MergeAllCartLines (cart : Cart | null | undefined): Array<CartLine> {

    let allLines = new Array<CartLine>();

    //alert(JSON.stringify(cart));
    cart?.forms?.map((f: OrderForm) => (f.shipments.map((s: Shipment) => (s.lines.map((l: CartLine) => {
        allLines.push(l);
    })))));

    //alert(allLines.length);
    return allLines;
}

/**
 * Formats a given price into a localized string with currency.
 *
 * @param price - The numeric value of the price to format.
 * @param currency - The currency code to prepend to the price.
 * @param locale - The locale string to use for formatting the price.
 * @param postFix - Optional. If true, appends the currency symbol after the price. Defaults to false.
 * @returns The formatted price string.
 */
export function formatPrice(price: number, currency: string, locale: string): string {   
    locale = locale === "" ? locale = 'en-GB' : locale;

    try{
        return `${price.toLocaleString(locale, {style: "currency", currency: currency,currencyDisplay: 'narrowSymbol' , minimumFractionDigits: 2})}`;
    }
    catch{
        return `${price.toLocaleString('en-GB', {style: "currency", currency: "GBP",currencyDisplay: 'narrowSymbol', minimumFractionDigits: 2})}`;
    }
    
}