import React from "react";
import Grid from "@mui/material/Grid";
import Profile from "../components/profile/Profile";
import ProjectsPage from "./ProjectsPage";
import { Divider, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Profile />
      </Grid>
      <Grid item xs={12} sx={{ marginBottom: 2, marginTop: 1 }}>
        <Divider variant="middle" />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="div" sx={{ marginLeft: 2 }}>
          Projects
        </Typography>
        <ProjectsPage></ProjectsPage>
      </Grid>
    </Grid>
  );
};

export default HomePage;
