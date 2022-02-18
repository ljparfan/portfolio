import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import SCHOOLS_DATA from "./eduction-data";
import School from "../school/School";

const schools = SCHOOLS_DATA;

const Education = () => {
  return (
    <List>
      <Grid container>
        {schools.map((school, index) => (
          <Grid item xs={12} key={index}>
            <School {...school} />
            {index !== schools.length - 1 && (
              <Divider variant="inset" component="li" />
            )}
          </Grid>
        ))}
      </Grid>
    </List>
  );
};

export default Education;
