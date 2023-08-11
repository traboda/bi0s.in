import React from "react";

export const Theme = React.createContext({
  isDarkTheme: false,
  setDarkTheme: (isDarkTheme: boolean) => {}
});
