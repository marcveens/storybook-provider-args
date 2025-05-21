import type { Preview } from "@storybook/react";
import { withSettingsProvider } from "../src/with-context-provider";
import { globalArgs, globalArgTypes } from "../src/global-args";

const preview: Preview = {
  decorators: [withSettingsProvider],
  args: globalArgs,
  argTypes: globalArgTypes,
};

export default preview;
