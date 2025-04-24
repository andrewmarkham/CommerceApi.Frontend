import React, { FC } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import "../../../../../dist/components.css";

import { StoryContainer } from "../../../storybook/storyContainer";
import { Overlay } from "../Overlay";

const meta: Meta<typeof Overlay> = {
  title: "Components/Overlay",
  tags: ['autodocs'],
  component: Overlay,
  decorators: [
    (Story) => {
      return (
      <StoryContainer>
          <Story />
          <p>This is some dummy text</p>
      </StoryContainer>)
    }
  ],
  args: {
    show: true,
   }
};



export default meta;
type Story = StoryObj<typeof Overlay>;

export const Primary: Story = {
  args: {
  },
  parameters: {
  },
  render: function Render(args) {
    return <Overlay {...args} />;
  }
};
