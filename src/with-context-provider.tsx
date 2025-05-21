import { type Decorator } from "@storybook/react";
import {
  defaultSettings,
  SettingsContext,
  type SettingsContextType,
} from "./context";
import { createArgTypes } from "./helpers/create-arg-types";

export const withSettingsProvider: Decorator = (Story, context) => {
  const settings = {
    ...defaultSettings,
    ...context.allArgs,
  };

  return (
    <SettingsContext.Provider value={settings}>
      <Story {...context} />
    </SettingsContext.Provider>
  );
};

export const settingsArgs: SettingsContextType = {
  useTwoColumnLayout: defaultSettings.useTwoColumnLayout,
};

export const settingsArgTypes = createArgTypes({
  useTwoColumnLayout: {
    control: "boolean",
    description: "Toggle two-column layout",
    table: {
      category: "Settings Provider",
    },
  },
});
