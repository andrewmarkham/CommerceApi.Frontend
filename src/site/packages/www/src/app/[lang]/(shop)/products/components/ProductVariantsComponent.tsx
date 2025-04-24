'use client';
import React, { Dispatch, FC, SetStateAction, useContext, useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { graphql } from '@/graphql'

import { AddToCart, Price, ProductSummaryContext, ProductSummaryContextType, useJhooseCommerce } from '@jhoose-commerce/components';

export const VariantDetail = graphql(/* GraphQL */ `
query VariantQuery($productId: String!) {
    GenericVariant(
      where: { ProductParents: {GuidValue: { in: [$productId] }}, Language: { Name: { eq: "en" } } }
    ) {
      items {
        Color
        Size
        Code
        DisplayName
        ProductParents {
          GuidValue
        }
        Language {
          Name
        }
      }
    }
  }
`)

interface ProductVariantsProps {
    id: string,
    code: string,
    labels: any
}
 
const ProductVariantsComponent: FC<ProductVariantsProps> = ({id, labels}) => {

  const { marketContext } = useJhooseCommerce();
  const productSummary = useContext<ProductSummaryContextType>(ProductSummaryContext);

    const { data } = useQuery(VariantDetail, {
        variables: {
            productId : id
        }
    })

    const items = data?.GenericVariant?.items

    return (
        <div className='flex flex-row'>
            {items?.map((item, index) => {
                const priceInventoryItem = productSummary.skus.find(d => d.sku === item?.Code);
                return (
                    item ?
                    <div key={index} className='flex flex-col px-3 grow'>
                        <h1 className='text-2xl'>{item?.DisplayName} {priceInventoryItem?.inventory[0].purchaseAvailableQuantity}</h1>
                        <p className='text-xs text-slate-400'>{item?.Code}</p>
                        <p className='text-xs text-slate-400'>{item?.Color}</p>
                        <p className='text-xs text-slate-400'>{item?.Size}</p>
                        <Price price={priceInventoryItem?.pricing[0]?.salesPrice ?? 0} currency={priceInventoryItem?.pricing[0].currencyCode ?? ""} locale={marketContext.language}  />
                        <AddToCart sku={item.Code ?? ""} qty={1} text={labels.addToCart.addToCart} />
                  </div> : null
                )
            })}
        </div>)
}
 
export default ProductVariantsComponent
