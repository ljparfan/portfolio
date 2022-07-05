import React from "react";
import Grid from "@mui/material/Grid";
import Projects from "../components/projects/Projects";

const ProjectsPage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Projects />
      </Grid>
    </Grid>
  );
};

export default ProjectsPage;
