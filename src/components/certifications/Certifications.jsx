import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import CERTIFICATIONS_DATA from "./certifications-data";
import Certification from "../certification/Certification";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../utils/firebase";

const Certifications = () => {
  const [certifications, setCertifications] = useState(
    [...CERTIFICATIONS_DATA].reverse()
  );

  useEffect(() => {
    const setCertificationsFromSource = async () => {
      const certificationFromSource = await Promise.all(
        CERTIFICATIONS_DATA.map(async (skill) => {
          skill.issuerImageUrl = await getDownloadURL(
            ref(storage, skill.issuerImageFileName)
          );
          return skill;
        })
      );

      setCertifications([...certificationFromSource.reverse()]);
    };

    setCertificationsFromSource();
  }, []);

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
