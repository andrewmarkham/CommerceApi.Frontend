'use client';
import { Cart, CartLine } from "@jhoose-commerce/core";
import { Price } from "./price";
import { Quantity } from "./quantity";
import { formatPrice } from "../utils";
import { MiniCartLabelProps } from "../minicart";
import { DeleteCartLine } from "./deleteCartLine";
import { FlexContainer } from "@components/Core/Layout/Flex/FlexContainer";

export type MiniCartLineProps = {
    line :CartLine,
    cart: Cart,
    locale: string,
    labels: MiniCartLabelProps
}

export const MiniCartLine = (props: MiniCartLineProps) => {

    const { locale, line, cart } = props;

    var quotedPrice = line.discountedPrice / line.qty;

    return (

        <FlexContainer direction="row" className="miniCartLine">
            <img width={100} height={150} src={line.imageUrl} alt={line.displayName} />
            <FlexContainer direction="col" className="inner">
                <h3 className="text-lg">{line.displayName}</h3>
                <p className="text-sm">
                    {quotedPrice === line.placedPrice ?
                        <Price price={line.placedPrice} currency={cart.currency.code} locale={locale} label="" /> :
                        <>
                            <span className="discount">{formatPrice(line.placedPrice, cart.currency.code, locale)}</span>&nbsp;
                            <Price price={quotedPrice} currency={cart.currency.code} locale={locale} label="" />
                        </>
                    }
                </p>
                <FlexContainer direction="row" alignItems="items-end" className="controls">
                    <Quantity line={line} cart={cart} labels={props.labels} />
                    <div className="deleteContainer">
                        <DeleteCartLine line={line} cart={cart} labels={props.labels} />
                    </div>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    );
}