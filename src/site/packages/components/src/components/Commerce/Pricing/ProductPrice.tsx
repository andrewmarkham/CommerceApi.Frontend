'use client';
import useJhooseCommerce from "@hooks/useJhooseCommerce";

import { ReactNode, useContext, useEffect, useState } from "react";
import { formatPrice } from "../MiniCart/utils";
import { ProductSummaryContext } from "@providers/ProductSummaryProvider";
import { SkuWithPriceAndInventory } from "@jhoose-commerce/core";

export type PriceSummmaryProps = {
    style: 'simple' | 'showDiscount';
    includePromotions: boolean;
    labels?: Partial<Record<'from' | 'was' | 'sale' | 'saving' | 'applied', string>>;
};


const ProductPrice = (props: PriceSummmaryProps) => {
    const { marketContext } = useJhooseCommerce();

    const [productPrice, setProductPrice] = useState<SkuWithPriceAndInventory>({} as SkuWithPriceAndInventory);
    
    const defaultLabels = { from: 'From ', was: 'Was', sale: 'Sale', saving: 'Saving', applied: 'Applied Discount - ' };
    const labels = { ...defaultLabels, ...props.labels };

    const {skus} = useContext(ProductSummaryContext);

    useEffect(() => {
        setProductPrice(getProductPrice(skus)[0]);
    }, [skus]);
    
    return (
        <div className="productPrice"> {productPrice && productPrice.pricing && productPrice.pricing[0] &&
            renderPrice(productPrice)
            }
        </div>
    );

    function renderPrice(productPrice: SkuWithPriceAndInventory) {
        switch (props.style) {
            case "showDiscount":
                return renderDiscountedPrice(productPrice);
            default:
                return renderSimplePrice(productPrice);
        }
    }

    function renderSimplePrice(productPrice: SkuWithPriceAndInventory): ReactNode {
        return <span className="price text-lg font-bold">{arePricesDifferent(skus) && <span className="from">{labels['from']}</span>}{formatPrice(productPrice.pricing[0].salesPrice, productPrice.pricing[0].currencyCode, marketContext.language)}</span>

    }

    function renderDiscountedPrice(productPrice: SkuWithPriceAndInventory): ReactNode {
        const { listPrice, salesPrice, currencyCode } = productPrice.pricing[0];
        let actualSalesPrice = 0.0;

        const hasDiscount = productPrice.pricing[0].discount == undefined ? false : true;
        
        if (props.includePromotions)
            actualSalesPrice = hasDiscount ? productPrice.pricing[0].discount?.price ?? 0 : salesPrice;
        else
            actualSalesPrice = salesPrice;

        function calculateDiscount(listPrice: number, salesPrice: number, asPercentage = false): number {
            return asPercentage ? 
                Math.round((listPrice - salesPrice) / listPrice * 100) :
                Math.round(listPrice - salesPrice);
        }

        const discountAmount = calculateDiscount(listPrice, actualSalesPrice);
        
        if (discountAmount === 0) {
            return renderSimplePrice(productPrice);
        }

        return (
            <>
                <div className="discount">
                    <span className="label">{labels['was']} :</span>
                    <span className="price line-through">{formatPrice(listPrice, currencyCode, marketContext.language)}</span>
                    <span className="discountPercent"> {labels['saving']} : {formatPrice(discountAmount ,currencyCode, marketContext.language)} ({calculateDiscount(listPrice, actualSalesPrice, true)}%)</span>
                </div>
                <div className="priceDetails">
                    <span className="label">{labels['sale']} :</span>
                    <span className="price ">{formatPrice(actualSalesPrice,currencyCode, marketContext.language)}</span>
                </div>
                {hasDiscount && props.includePromotions &&
                    <div className="discountSummary">
                        <span className="label">{labels['applied']}</span>
                        <span className="description">{productPrice.pricing[0].discount?.description}</span>
                    </div>
                }
            </>);
    }
}

/// Return the lowest price of the product
function getProductPrice(skus: Array<SkuWithPriceAndInventory>) {
    return skus.sort((a, b) => a.pricing[0].salesPrice - b.pricing[0].salesPrice);
}

/// Check if the prices are different
function arePricesDifferent(skus: Array<SkuWithPriceAndInventory>) {
    return new Set(skus.map(sku => sku.pricing[0].salesPrice)).size > 1;
}

export default ProductPrice;

