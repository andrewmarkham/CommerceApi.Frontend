import React, { FC } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import "../../../../../dist/components.css";

import { StoryContainer } from "../../../storybook/storyContainer";

import { fn } from "@storybook/test";
import {MiniCartLine} from "../components/miniCartLine";

const meta: Meta<typeof MiniCartLine> = {
  title: "Commerce/Mini Cart/Components/Mini Cart  Line",
  tags: ['autodocs'],
  component: MiniCartLine,
  decorators: [
    (Story) => {
      return (
      <StoryContainer>
        <div style={{width: '32rem'}}>
          <Story />
        </div>
      </StoryContainer>)
    }
  ],
  args: {
   }
};

const line = {
  id: 1,
  sku: "123456",
  displayName: "Test Product",
  qty: 1,
  placedPrice: 10,
  totalPrice: 10,
  discountedPrice: 0,
  entryDiscount: 0,
  salesTax: 0,
  imageUrl: 'https://picsum.photos/200/300'
}

const cart = {
  id: 1,
  name: "Default",
  customerId: "",
  market: "US",
  currency: {
    code: "USD",
    symbol: "$"
  },
  totalPrice: 10,
  subTotalPrice: 10,
  taxTotal: 0,
  orderDiscountTotal: 0,
  shippingDiscountTotal: 0,
  shippingTotal: 0,
  shippingSubTotal: 0,
  forms: [
      {
          id: 1,
          name: "Default",
          promotions: [],
          shipments:[
              {
                  id: 1,
                  lines: [
                      {
                          id: 1,
                          sku: "123456",
                          displayName: "Test Product",
                          qty: 1,
                          placedPrice: 10,
                          entryDiscount: 0,
                          totalPrice: 10,
                          discountedPrice: 0,
                          salesTax: 0,
                          imageUrl: 'https://picsum.photos/200/300'
                      }
                  ],
                  shippingDiscountPrice: 0,
                  shippingDiscountTotal: 0,
                  shippingTotal: 0,
                  shippingSubTotal: 0
              }
          ]
      }
  ]
};

export default meta;
type Story = StoryObj<typeof MiniCartLine>;

export const Primary: Story = {
  args: {
    line: line,
    cart: cart,
    locale: "en",
    labels: {
      heading: "Your Cart",
      total: "Total :",
      subTotal: "Sub Total :",
      orderDiscount: "Order Discount :",
      updateQuantity: "Update Quantity",
      emptyCart: "Your cart is empty",
      remove: "Remove"
    }, 
    onCartUpdated: fn()
  },
  parameters: {
    msw: {
      //handlers: cartHandlers,
    }
  },
  render: function Render(args) {
    return <MiniCartLine labels={args.labels} line={args.line} cart={args.cart} locale={args.locale} onCartUpdated={args.onCartUpdated} />
  },
};
