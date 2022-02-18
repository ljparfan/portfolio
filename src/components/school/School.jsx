import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const School = ({ name, degree, duration, award, imageUrl }) => {
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
                {degree}
              </Typography>
            </Grid>
            <Grid item xs={12} component="span">
              {duration}
            </Grid>
            <Grid item xs={12} component="span">
              {award}
            </Grid>
          </Grid>
        }
      />
    </ListItem>
  );
};

export default School;
