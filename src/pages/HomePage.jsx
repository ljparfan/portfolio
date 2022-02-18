import React from "react";
import Grid from "@mui/material/Grid";
import Profile from "../components/profile/Profile";

const HomePage = () => {
  return (
    <Grid
      container
      direction="column"
      sx={{ height: "70vh" }}
      justifyContent="center"
    >
      <Grid item>
        <Profile />
      </Grid>
    </Grid>
  );
};

export default HomePage;
