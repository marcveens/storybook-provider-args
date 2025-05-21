import { useContext } from "react";
import { SettingsContext } from "../context";

type InteractionProps = {
  myInteractionProp?: boolean;
};

export const Interaction = (props: InteractionProps) => {
  const { myInteractionProp } = props;
  const { useTwoColumnLayout } = useContext(SettingsContext);

  return (
    <div>
      myInteractionProp value:
      {myInteractionProp ? "true" : "false"}
      <br />
      <br />
      useTwoColumnLayout value:
      {useTwoColumnLayout ? "true" : "false"}
    </div>
  );
};
