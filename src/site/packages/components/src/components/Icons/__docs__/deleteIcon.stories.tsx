import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import DeleteIcon from "../deleteIcon";
import { StoryContainer } from "../../storybook/storyContainer";

import "../../../../dist/components.css";

const meta: Meta<typeof DeleteIcon> = {
  title: "Icons/Delete Icon",
  component: DeleteIcon,
  args: { }
};

export default meta;
type Story = StoryObj<typeof DeleteIcon>;

export const Primary: Story = {
  args: {
  },
  render: function Render(args) {
    return <StoryContainer>
        <DeleteIcon />
      </StoryContainer>
  },
};

