import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import PlusIcon from "../plusIcon";
import { StoryContainer } from "../../storybook/storyContainer";

import "../../../../dist/components.css";
const meta: Meta<typeof PlusIcon> = {
  title: "Icons/Plus Icon",
  component: PlusIcon,
  args: { }
};

export default meta;
type Story = StoryObj<typeof PlusIcon>;

export const Primary: Story = {
  args: {
  },
  render: function Render(args) {
    return <StoryContainer>
        <PlusIcon />
      </StoryContainer>
  },
};

