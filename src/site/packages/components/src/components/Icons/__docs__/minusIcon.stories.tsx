import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import MinusIcon from "../minusIcon";
import { StoryContainer } from "../../storybook/storyContainer";

import "../../../../dist/components.css";
const meta: Meta<typeof MinusIcon> = {
  title: "Icons/Minus Icon",
  component: MinusIcon,
  args: { }
};

export default meta;
type Story = StoryObj<typeof MinusIcon>;

export const Primary: Story = {
  args: {
  },
  render: function Render(args) {
    return <StoryContainer>
        <MinusIcon />
      </StoryContainer>
  },
};

