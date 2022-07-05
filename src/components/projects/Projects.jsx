import { Divider, List } from "@mui/material";
import { getDownloadURL, ref } from "firebase/storage";
import React, { Fragment, useEffect, useState } from "react";
import { storage } from "../../utils/firebase";
import Project from "../project/Project";
import PROJECTS_DATA from "./projects-data";

const Projects = () => {
  const [projects, setProjects] = useState(PROJECTS_DATA);

  useEffect(() => {
    const setProjectsFromSource = async () => {
      const projectsFromSource = await Promise.all(
        PROJECTS_DATA.map(async (project) => {
          project.imageUrl = await getDownloadURL(
            ref(storage, project.imageFileName)
          );
          return project;
        })
      );

      setProjects(projectsFromSource);
    };

    setProjectsFromSource();
  }, []);

  return (
    <List>
      {projects.map((project, index) => (
        <Fragment key={index}>
          <Project key={project.name} project={project} />
          {index !== projects.length - 1 && (
            <Divider variant="inset" component="li" />
          )}
        </Fragment>
      ))}
    </List>
  );
};

export default Projects;
