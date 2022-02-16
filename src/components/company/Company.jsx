import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const Company = ({ imageUrl, name, jobTitle, experience, tools }) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={name} src={imageUrl} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <Grid container component="span">
            <Grid item xs={12} component="span">
              <Typography
                sx={{ display: "block" }}
                component="span"
                variant="subtitle2"
                color="text.primary"
              >
                {jobTitle}
              </Typography>
            </Grid>
            <Grid item xs={12} component="span">
              {experience}
            </Grid>
            <Grid
              item
              xs={12}
              component="span"
              sx={{ marginTop: 2, maxWidth: "100%", overflowX: "auto" }}
            >
              <Stack direction="row" spacing={1} component="span">
                {tools.map((tool, index) => (
                  <Chip
                    key={index}
                    component="span"
                    color="primary"
                    size="small"
                    label={tool}
                  />
                ))}
              </Stack>
            </Grid>
          </Grid>
        }
      />
    </ListItem>
  );
};

export default Company;
