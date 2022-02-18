import React from "react";
import Grid from "@mui/material/Grid";
import Certifications from "../components/certifications/Certifications";

const CertificationsPage = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        overflow="auto"
        sx={{ maxHeight: "80vh", overflowY: "auto" }}
      >
        <Certifications />
      </Grid>
    </Grid>
  );
};

export default CertificationsPage;
