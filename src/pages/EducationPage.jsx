import React from "react";
import Grid from "@mui/material/Grid";
import Education from "../components/education/Education";

const EducationPage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Education />
      </Grid>
    </Grid>
  );
};

export default EducationPage;
