import React, { FC } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { fn } from '@storybook/test';

import "../../../../../dist/components.css";
import { StoryContainer } from "../../../storybook/storyContainer";
import { DrawerHeader } from "../components/drawerHeader";

const meta: Meta<typeof DrawerHeader> = {
  title: "Components/Drawer Header",
  component: DrawerHeader,
  args: {close: fn() }
};

export default meta;
type Story = StoryObj<typeof DrawerHeader>;

export const Primary: Story = {
  args: {
    heading: "Drawer Heading",
  },
  render: function Render(args) {

    return  <StoryContainer>
        <div style={ {width: '32rem'} }>
          <DrawerHeader {...args} />
        </div>
      </StoryContainer>
  },
};