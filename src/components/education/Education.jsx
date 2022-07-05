import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import SCHOOLS_DATA from "./eduction-data";
import School from "../school/School";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../utils/firebase";

const Education = () => {
  const [schools, setSchools] = useState(SCHOOLS_DATA);

  useEffect(() => {
    const setSchoolsFromSource = async () => {
      const schoolsFromSource = await Promise.all(
        SCHOOLS_DATA.map(async (school) => {
          school.imageUrl = await getDownloadURL(
            ref(storage, school.imageFileName)
          );
          return school;
        })
      );

      setSchools(schoolsFromSource);
    };

    setSchoolsFromSource();
  }, []);
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
