import { pink } from "@mui/material/colors";
import THEME_MODES from "./theme-constants";

export const getCurrentTheme = () => {
  let theme = localStorage.getItem("theme");

  if (!theme) {
    theme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  }

  return theme;
};

export const getPaletteProps = (mode) => {
  const backgroundMap = {
    [THEME_MODES.DARK]: {
      paper: "#181818",
      default: "#202020",
    },
    [THEME_MODES.LIGHT]: {
      paper: "#fff",
      default: "#F9F9F9",
    },
  };

  return {
    mode: mode,
    primary: pink,
    background: backgroundMap[mode],
  };
};
