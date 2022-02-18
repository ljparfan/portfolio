import React from "react";
import Grid from "@mui/material/Grid";
import WorkExperience from "../components/work-experience/WorkExperience";

const WorkExperiencePage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <WorkExperience />
      </Grid>
    </Grid>
  );
};

export default WorkExperiencePage;
