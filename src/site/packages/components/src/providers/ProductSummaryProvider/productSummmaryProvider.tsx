'use client';
import useJhooseCommerce from '@hooks/useJhooseCommerce';
import { SkuWithPriceAndInventory } from '@jhoose-commerce/core';

import React from 'react';
import {PropsWithChildren, useEffect, useState } from 'react';

export type ProductSummaryContextType = {
    skus: SkuWithPriceAndInventory[]
};

const ProductSummaryContext = React.createContext<ProductSummaryContextType>({ skus: [] });

type ProductSummaryProviderProps = {
    productCode: string
}

const ProductSummaryProvider = (props : PropsWithChildren<ProductSummaryProviderProps>) => {

    const { client, marketContext, hasValidAuthcontext } = useJhooseCommerce();

    const [priceAndInventory, setPriceAndInventory] = useState<SkuWithPriceAndInventory[]>([]);

    useEffect(() => {
        if (!hasValidAuthcontext || !props.productCode)
            return;
        
        var request = {productCode: props.productCode, marketId: marketContext.market, currencyCode: marketContext.currency}
        
        client()?.product.getPriceAndInventory(request)
                         .then(r => 
                            {
                                if ("skuWithPriceAndInventory" in r)
                                    setPriceAndInventory(r.skuWithPriceAndInventory);
                            });
        
      }, [props.productCode, hasValidAuthcontext]);

    return (
        <ProductSummaryContext.Provider value={{ skus: priceAndInventory }}>
            {props.children}
        </ProductSummaryContext.Provider>
    );
}

export { ProductSummaryProvider, ProductSummaryContext};