import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import SKILLS_DATA from "./skills-data";
import Skill from "../skill/Skill";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../utils/firebase";

const Skills = () => {
  const [skills, setSkills] = useState(SKILLS_DATA);

  useEffect(() => {
    const setSkillsFromSource = async () => {
      const companiesFromSource = await Promise.all(
        SKILLS_DATA.map(async (skill) => {
          skill.imageUrl = await getDownloadURL(
            ref(storage, skill.imageFileName)
          );
          return skill;
        })
      );

      setSkills(companiesFromSource);
    };

    setSkillsFromSource();
  }, []);

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
