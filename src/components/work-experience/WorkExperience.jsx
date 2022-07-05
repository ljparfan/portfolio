import React, { Fragment, useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../utils/firebase";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import WORK_EXPERIENCE_DATA from "./work-experience-data";
import Company from "../company/Company";

const WorkExperience = () => {
  const [companies, setCompanies] = useState(WORK_EXPERIENCE_DATA);

  useEffect(() => {
    const setCompaniesFromSource = async () => {
      const companiesFromSource = await Promise.all(
        WORK_EXPERIENCE_DATA.map(async (company) => {
          company.imageUrl = await getDownloadURL(
            ref(storage, company.imageFileName)
          );
          return company;
        })
      );

      setCompanies(companiesFromSource);
    };

    setCompaniesFromSource();
  }, []);
  return (
    <List>
      {companies.map((company, index) => (
        <Fragment key={index}>
          <Company {...company} />
          {index !== companies.length - 1 && (
            <Divider variant="inset" component="li" />
          )}
        </Fragment>
      ))}
    </List>
  );
};

export default WorkExperience;
