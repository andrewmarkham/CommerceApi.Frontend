import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import SpinnerIcon from "../spinnerIcon";
import { StoryContainer } from "../../storybook/storyContainer";

import "../../../../dist/components.css";
const meta: Meta<typeof SpinnerIcon> = {
  title: "Icons/Spinner Icon",
  component: SpinnerIcon,
  args: { }
};

export default meta;
type Story = StoryObj<typeof SpinnerIcon>;

export const Primary: Story = {
  args: {
  },
  render: function Render(args) {
    return <StoryContainer>
        <SpinnerIcon />
      </StoryContainer>
  },
};

export const Smaller: Story = {
  args: {
  },
  render: function Render(args) {
    return <StoryContainer>
        <SpinnerIcon width="24px" height="24px" />
      </StoryContainer>
  },
};
