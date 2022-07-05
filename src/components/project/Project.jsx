import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { Box, Chip } from "@mui/material";

const Project = ({ project }) => {
  return (
    <Card variant="outlined" sx={{ background: "transparent", border: 0 }}>
      <CardHeader
        avatar={<Avatar src={project.imageUrl} />}
        action={
          <IconButton href={project.demoUrl} target="_blank">
            <ArrowForward />
          </IconButton>
        }
        title={project.name}
        subheader={project.category}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: 2 }}
        >
          {project.description}
        </Typography>
        <Box
          flexDirection="row"
          component="span"
          sx={{ marginTop: 2, maxWidth: "100%", overflowX: "auto" }}
        >
          {project.tools.map((tool, index) => (
            <Chip
              sx={{ margin: "5px" }}
              key={index}
              component="span"
              color="primary"
              size="small"
              label={tool}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Project;
