import React from "react";

import "../../../../../dist/components.css";

import ProductPrice from "../ProductPrice";
import { skus, skusRange, testSkusWithDiscount } from "./testData";
import {  ProductSummaryContext } from "../../../../providers/ProductSummaryProvider/productSummmaryProvider";
import { MarketContext } from "../../../../providers/MarketProvider/marketProvider";

import { fn } from "@storybook/test";

export const ActionsData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

import type { Decorator } from "@storybook/react";
import { StoryContainer } from "../../../storybook/storyContainer";

const withContext: Decorator = (Story, options) => 
  <StoryContainer>
      <MarketContext.Provider value={{ market: "US", language: "en", currency: "USD" }}>
        <ProductSummaryContext.Provider value={{skus: options.args["skus"] as any}}>
          <Story />
        </ProductSummaryContext.Provider>
      </MarketContext.Provider>
    </StoryContainer>


export default {
  component: ProductPrice,
  title: "Commerce/Product Price",
  tags: ['autodocs'],
  decorators: [withContext],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    style : "simple",
    includePromotions: false,
    skus: skus
   }
};

export const Default = {           
};

export const ShowDiscount = {
  args: {
    style : "showDiscount",
    includePromotions: true,
    skus: testSkusWithDiscount
  }             
};

export const ShowDiscount1 = {
  args: {
    style : "skusRange",
    includePromotions: true,
    skus: testSkusWithDiscount
  }             
}; 