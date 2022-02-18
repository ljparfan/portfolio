import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import { Link, useLocation } from "react-router-dom";
import PsychologyIcon from "@mui/icons-material/Psychology";
import RedeemIcon from "@mui/icons-material/Redeem";

const BottomNavBar = () => {
  const { pathname } = useLocation();
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels value={pathname}>
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          component={Link}
          to="/"
          value="/"
        />
        <BottomNavigationAction
          label="Experience"
          component={Link}
          to="/experience"
          value="/experience"
          icon={<BusinessCenterIcon />}
        />
        <BottomNavigationAction
          label="Skills"
          component={Link}
          to="/skills"
          value="/skills"
          icon={<PsychologyIcon />}
        />
        <BottomNavigationAction
          label="Certifications"
          component={Link}
          to="/certifications"
          value="/certifications"
          icon={<RedeemIcon />}
        />
        <BottomNavigationAction
          label="Education"
          icon={<SchoolIcon />}
          component={Link}
          value="/education"
          to="/education"
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavBar;
