'use client';
import {useLayoutEffect, useState} from "react";

const useTheme = () => {

  const [isSysDarkTheme, setSysDarkTheme] = useState(true);
  const [themeMode, setThemeMode] = useState<'LIGHT'|'DARK'|'SYSTEM'>(
    'SYSTEM'
  );

  const mqListener = (e => {
    setSysDarkTheme(e.matches);
  });

  useLayoutEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addListener(mqListener);
    if (darkThemeMq.matches) {
      setSysDarkTheme(true);
    }
    return () => darkThemeMq.removeListener(mqListener);
  }, []);

  return {
    isDarkTheme: themeMode == 'SYSTEM' ? isSysDarkTheme : themeMode == 'DARK',
    setDarkTheme: (isDark: boolean) => setThemeMode(isDark ? 'DARK' : 'LIGHT'),
  };

};

export default useTheme;