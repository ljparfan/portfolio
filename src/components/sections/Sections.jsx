import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Card from "@mui/material/Card";
import AppBar from "@mui/material/AppBar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import TabPanel from "../common/TabPanel";
import Skills from "../skills/Skills";
import WorkExperience from "../work-experience/WorkExperience";
import Certifications from "../certifications/Certifications";

const Sections = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const isHandset = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        borderLeft: 0,
        borderRight: 0,
        borderBottom: 0,
      }}
    >
      <AppBar elevation={0} position="static" color="transparent">
        <Tabs
          textColor="primary"
          indicatorColor="primary"
          value={value}
          variant={isHandset ? "scrollable" : "fullWidth"}
          allowScrollButtonsMobile
          onChange={handleChange}
        >
          <Tab label="Skills" />
          <Tab label="Work Experience" />
          <Tab label="Certifications" />
          <Tab label="Education" />
          <Tab label="Projects" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Skills />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <WorkExperience />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Certifications />
      </TabPanel>
    </Card>
  );
};

export default Sections;
