import React, { FC } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import "../../../../../dist/components.css";

import { StoryContainer } from "../../../storybook/storyContainer";
import {Price} from "../components/price";

const meta: Meta<typeof Price> = {
  title: "Commerce/Mini Cart/Components/Price",
  tags: ['autodocs'],
  component: Price,
  decorators: [
    (Story) => {
      return (
      <StoryContainer>
        <Story />
      </StoryContainer>)
    }
  ],
  args: {
   }
};

export default meta;
type Story = StoryObj<typeof Price>;

export const Primary: Story = {
  args: {
    price :123.00,
    label: "Price :",
    currency: "USD",
    locale: "en"
  },
  parameters: {
    msw: {
      //handlers: cartHandlers,
    }
  },
  render: function Render(args) {
    return <Price price={args.price} label={args.label} currency={args.currency} locale={args.locale}  />
  }
};
