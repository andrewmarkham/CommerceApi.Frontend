import React, { FC } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { cartHandlers, handlers } from "../../../storybook/msw/handlers";

import MiniCart  from "../MiniCart";

import "../../../../../dist/components.css";
import { JhooseCommerceContext, MarketContext } from "@jhoose-commerce/components";

import { StoryContainer } from "../../../storybook/storyContainer";
import { forceReloadDecorator, clearLocalStorageDecorator } from "../../../storybook/decorators";

const COMMERCE_ENDPOINT = "https://localhost:5001";
const token = "eyJ";
const customerContext = "";

const meta: Meta<typeof MiniCart> = {
  title: "Commerce/Mini Cart",
  component: MiniCart,
  decorators: [
    //forceReloadDecorator,
    //clearLocalStorageDecorator,
    (Story) => {
      return (
      <StoryContainer>
          <JhooseCommerceContext.Provider value={{ 
            isAnonymous: true,
            token: token, 
            customerContext: customerContext,
            endpoint: COMMERCE_ENDPOINT}}>
            <MarketContext.Provider value={{ market: "US", language: "en", currency: "USD", countries: [] }}>
              <div style={{width: '32rem'}}>
                <Story />
              </div>
            </MarketContext.Provider>
        </JhooseCommerceContext.Provider>
      </StoryContainer>)
    }
  ],
  args: {
   }
};

export default meta;
type Story = StoryObj<typeof MiniCart>;

export const Primary: Story = {
  args: {
    show: true
  },
  parameters: {
    msw: {
      handlers: cartHandlers,
    }
  },
  render: function Render(args) {

    localStorage.clear();

    return <MiniCart show={true} checkoutUrl="" />
  },
};

export const EmptyCart: Story = {
  args: {
    show: true
  },
  parameters: {
    msw: {
      handlers: handlers,
    }
  },
  render: function Render(args) {

    localStorage.clear();

    return <MiniCart show={true} checkoutUrl="" />

  },
};
