import type { Meta, StoryObj } from "@storybook/react";

import { Interaction } from "./interaction";
import { withGlobalArgs } from "../global-args";

const meta = {
  title: "Interaction",
  component: Interaction,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Interaction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const useSingleColumnLayout: Story = {
  args: {
    myInteractionProp: true,
  },
};

export const useTwoColumnLayout = withGlobalArgs<Story>({
  args: {
    myInteractionProp: true,
  },
  globalArgs: {
    useTwoColumnLayout: true,
  },
});
