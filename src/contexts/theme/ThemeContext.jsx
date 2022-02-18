import React, { createContext, useCallback, useEffect, useState } from "react";
import THEME_MODES from "./theme-constants";
import { getCurrentTheme } from "./theme-utils";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => getCurrentTheme());

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isDarkMode = theme === THEME_MODES.DARK;

  const toggleTheme = useCallback(() => {
    setTheme(theme === THEME_MODES.DARK ? THEME_MODES.LIGHT : THEME_MODES.DARK);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
