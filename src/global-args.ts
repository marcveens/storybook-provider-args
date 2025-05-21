import type { Args, ArgTypes, StoryObj } from "@storybook/react";
import { settingsArgs, settingsArgTypes } from "./with-context-provider";

export const globalArgs = {
  ...settingsArgs,
} satisfies Args;

export const globalArgTypes: ArgTypes = {
  ...settingsArgTypes,
};

type StoryObjWithGlobalArgs<T extends StoryObj> = T & {
  globalArgs?: Partial<typeof globalArgs>;
};

export const withGlobalArgs = <T extends StoryObj>(
  props: StoryObjWithGlobalArgs<T>
) => {
  const { globalArgs, ...rest } = props;

  // Merge globalArgs into the story's args
  if (globalArgs) {
    rest.args = {
      ...rest.args,
      ...globalArgs,
    };
  }

  return rest;
};
