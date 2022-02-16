import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import SKILLS_DATA from "./skills-data";
import Skill from "../skill/Skill";

const skills = SKILLS_DATA;
const Skills = () => {
  return (
    <List>
      <Grid container>
        {skills.map((skill) => (
          <Grid item md={6} xs={12} key={skill.id}>
            <Skill {...skill} />
            <Divider variant="inset" component="li" />
          </Grid>
        ))}
      </Grid>
    </List>
  );
};

export default Skills;
