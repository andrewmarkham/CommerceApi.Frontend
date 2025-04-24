import React, { FC } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { fn } from '@storybook/test';
import { useArgs } from '@storybook/preview-api';

import AddToCart from "../addtocart";

import "../../../../../dist/components.css";
import { StoryContainer } from "../../../storybook/storyContainer";
import { JhooseCommerceContext } from "../../../../providers/JhooseCommerceProvider";
import { MarketContext } from "../../../../providers/MarketProvider/marketProvider";
  
import { http, HttpResponse, delay } from 'msw';
import { localStorageForStorybook } from '@alexgorbatchev/storybook-addon-localstorage';
import { Cart, CartResponse } from "@jhoose-commerce/core";

import { handlers, httpErrorHandlers, networkErrorHandlers } from "../../../storybook/msw/handlers";
import { forceReloadDecorator, clearLocalStorageDecorator } from "../../../storybook/decorators";

const meta: Meta<typeof AddToCart> = {
  title: "Commerce/Add to Cart",
  component: AddToCart,
  decorators: [
    forceReloadDecorator,
    clearLocalStorageDecorator,
    (Story) => 
      (
      <StoryContainer>
          <JhooseCommerceContext.Provider value={{ 
            isAnonymous: true,
            token: token, 
            customerContext: customerContext,
            endpoint: COMMERCE_ENDPOINT}}>
            <MarketContext.Provider value={{ market: "US", language: "en", currency: "USD", countries: [] }}>
              <Story />
            </MarketContext.Provider>
        </JhooseCommerceContext.Provider>
      </StoryContainer>)
  ],
  args: { }
};

export default meta;
type Story = StoryObj<typeof AddToCart>;

const COMMERCE_ENDPOINT = "http://localhost:6006";
const token = "eyJ";
const customerContext = "";

export const Primary: Story = {
  args: {
    text: "Add to Cart",
    sku: "123456",
    qty: 1
  },
  parameters: {
    msw: {
      handlers: handlers,
    }, 
    localStorage: localStorageForStorybook({}) 
  },
  render: function Render(args) {
    const [{ text, sku, qty }, updateArgs] = useArgs();
 
    function onAdded(cart: Cart) {
      alert("Added to cart");
    }

    return <AddToCart text={text} sku={sku} qty={qty}  />
  },
};

export const NetworkError: Story = {
  args: {
    text: "Add to Cart",
    sku: "123456",
    qty: 1
  },
  parameters: {
    msw: {
      handlers: networkErrorHandlers,
    }, 
    localStorage: localStorageForStorybook({}) 
  },
  render: function Render(args) {
    const [{ text, sku, qty }] = useArgs();
    
      function onError(message: string) {
        console.error(message);
      }
    
    return  <AddToCart text={text} sku={sku} qty={qty}  />
  },
};

export const Error500: Story = {
  args: {
    text: "Add to Cart",
    sku: "123456",
    qty: 1
  },
  parameters: {
    msw: {
      handlers: httpErrorHandlers,
    }, 
    localStorage: localStorageForStorybook({}) 
  },
  render: function Render(args) {
    const [{ text, sku, qty }] = useArgs();
 
      function onError(message: string) {
        console.error(message);
      }

    return <AddToCart text={text} sku={sku} qty={qty} />

  },
};