'use client';

import {Global, ThemeContext} from "@emotion/react";
import React from "react";
import useTheme from "./useThemeHook";
import {Theme} from "./themeContext";

const DARK_THEME = {
  isDarkTheme: true,
  text: '#fff',
  background: '#111'
};

const LIGHT_THEME = {
  isDarkTheme: false,
  text: '#000',
  background: '#fff'
}

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

  const { isDarkTheme, setDarkTheme } = useTheme();

  return (
    <ThemeContext.Provider value={isDarkTheme ? DARK_THEME : LIGHT_THEME}>
      <Theme.Provider value={{ isDarkTheme, setDarkTheme }}>
        <Global
          styles={{
            body: {
              color: isDarkTheme ? DARK_THEME.text : LIGHT_THEME.text,
              background: isDarkTheme ? DARK_THEME.background : LIGHT_THEME.background,
              backgroundSize: `155px 60px`,
              backgroundImage: isDarkTheme ?
                `linear-gradient(90deg,hsla(0,0%,100%,.03) 1px,transparent 0),linear-gradient(180deg,hsla(0,0%,100%,.03) 1px,transparent 0)` :
                `linear-gradient(90deg,hsl(0deg 0% 0% / 5%) 1px,transparent 0),linear-gradient(180deg,hsl(0deg 0% 0% / 5%) 1px,transparent 0)`
            }
          }}
        />
        {children}
      </Theme.Provider>
    </ThemeContext.Provider>
  );

};

export default ThemeProvider;