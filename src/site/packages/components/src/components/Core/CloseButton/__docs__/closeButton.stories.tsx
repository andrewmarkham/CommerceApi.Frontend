import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { fn } from '@storybook/test';

const meta: Meta<typeof Example> = {
  title: "Atoms/Close Button",
  component: Example,
  args: {onClick: fn() }
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    title: "Close"
  },
};