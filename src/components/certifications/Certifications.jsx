import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import CERTIFICATIONS_DATA from "./certifications-data";
import Certification from "../certification/Certification";

const certifications = CERTIFICATIONS_DATA.reverse();

const Certifications = () => {
  return (
    <List>
      <Grid container>
        {certifications.map((certification) => (
          <Grid item md={6} xs={12} key={certification.id}>
            <Certification {...certification} />
            <Divider variant="inset" component="li" />
          </Grid>
        ))}
      </Grid>
    </List>
  );
};

export default Certifications;
