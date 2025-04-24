import React, { FC } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { fn } from '@storybook/test';
import { useArgs } from '@storybook/preview-api';

import Drawer, { DrawerProps } from "../Drawer";

import "../../../../../dist/components.css";
import { StoryContainer } from "../../../storybook/storyContainer";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  args: {close: fn() }
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Primary: Story = {
  args: {
    heading: "Drawer Heading",
    show: false
  },
  render: function Render(args) {
    const [{ heading, show }, updateArgs] = useArgs();
 
    function close() {
      updateArgs({ show: !show });
    }

    return  <StoryContainer>
      <Drawer
          heading={heading}
          show={show}
          close={close}>
            <div style={{backgroundColor: 'red'}}>
              <h2>I am some contents</h2>
              <p> Some more contents, dfs s,sdf df ksdf jds,jhjkhlkdsf lkjhljh slkjh sddf dslkj fdsfs jkhljhdf sdf </p>
            </div>
        </Drawer>
      </StoryContainer>
  },
};