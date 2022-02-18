import React, { useMemo } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const NavBar = (props) => {
  const theme = useTheme();
  const isHandset = useMediaQuery(theme.breakpoints.down("md"));
  const titleMap = useMemo(
    () => ({
      "/": isHandset ? "" : "Projects",
      "/experience": "Work Experience",
      "/education": "Education",
      "/projects": "Projects",
      "/skills": "Skills",
      "/certifications": "Certifications",
    }),
    [isHandset]
  );
  const { pathname } = useLocation();
  return (
    <AppBar position="sticky" color="transparent" elevation={0} {...props}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {titleMap[pathname]}
        </Typography>
        <div>
          <ThemeSwitcher />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
