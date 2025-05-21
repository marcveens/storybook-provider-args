import { type Decorator } from "@storybook/react";
import { defaultSettings, SettingsContext } from "./context";
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

export const settingsArgs = defaultSettings;

export const settingsArgTypes = createArgTypes({
  useTwoColumnLayout: {
    control: "boolean",
    description: "Toggle two-column layout",
    table: {
      category: "Settings Provider",
    },
  },
});
