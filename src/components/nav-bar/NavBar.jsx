import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";
import { useLocation } from "react-router-dom";

const TITLE_MAP = {
  "/": "",
  "/experience": "Work Experience",
  "/education": "Education",
  "/projects": "Projects",
  "/skills": "Skills",
  "/certifications": "Certifications",
};

const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {TITLE_MAP[pathname]}
        </Typography>
        <div>
          <ThemeSwitcher />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
