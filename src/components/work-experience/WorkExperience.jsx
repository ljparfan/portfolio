import React, { Fragment } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import WORK_EXPERIENCE_DATA from "./work-experience-data";
import Company from "../company/Company";

const companies = WORK_EXPERIENCE_DATA;

const WorkExperience = () => {
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
