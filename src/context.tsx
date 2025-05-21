import { createContext } from "react";

export type SettingsContextType = {
  useTwoColumnLayout: boolean;
  extraOption?: string;
};

export const defaultSettings: SettingsContextType = {
  useTwoColumnLayout: false,
  extraOption: "defaultValue",
};

export const SettingsContext = createContext({} as SettingsContextType);

export const SettingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <SettingsContext.Provider value={defaultSettings}>
      {children}
    </SettingsContext.Provider>
  );
};
