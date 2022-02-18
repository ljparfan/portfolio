import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { Link, useLocation } from "react-router-dom";
import MENU_ITEMS from "./menu-items";

const menuItems = MENU_ITEMS;

const BottomNavBar = () => {
  const { pathname } = useLocation();
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels value={pathname}>
        {menuItems
          .filter(({ label }) => label !== "Projects")
          .map(({ label, icon: Icon, path }) => (
            <BottomNavigationAction
              key={label}
              label={label}
              icon={<Icon />}
              component={Link}
              to={path}
              value={path}
            />
          ))}
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavBar;
