import React from "react";
import Grid from "@mui/material/Grid";
import Skills from "../components/skills/Skills";

const SkillsPage = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        overflow="auto"
        sx={{ maxHeight: "80vh", overflowY: "auto" }}
      >
        <Skills />
      </Grid>
    </Grid>
  );
};

export default SkillsPage;
