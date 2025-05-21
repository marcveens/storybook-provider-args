import type { Args, ArgTypes, StoryObj } from "@storybook/react";
import { settingsArgs, settingsArgTypes } from "./with-context-provider";

export const globalArgs: Args = {
  ...settingsArgs,
};

export const globalArgTypes: ArgTypes = {
  ...settingsArgTypes,
};

type StoryObjWithGlobalArgs<T extends StoryObj> = T & {
  globalArgs?: Partial<Args>;
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

  console.log(rest);

  return rest;
};
