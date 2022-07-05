import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import { Box } from "@mui/material";
import moment from "moment";

const Company = ({ imageUrl, name, jobTitle, startDate, tools, endDate }) => {
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
              {moment(startDate).format("MMMM YYYY")}
              <Box
                sx={{ marginLeft: 1, marginRight: 1, display: "inline" }}
                component="span"
              >
                -
              </Box>
              {endDate ? moment(endDate).format("MMMM YYYY") : "Present"}
            </Grid>
            <Grid item xs={12} component="span">
              {moment
                .duration(new moment(endDate).diff(new moment(startDate)))
                .humanize()}
            </Grid>
            <Grid
              item
              xs={12}
              component="span"
              sx={{ marginTop: 2, maxWidth: "100%", overflowX: "auto" }}
            >
              {tools.map((tool, index) => (
                <Chip
                  key={index}
                  component="span"
                  color="primary"
                  size="small"
                  label={tool}
                  sx={{ margin: "5px" }}
                />
              ))}
            </Grid>
          </Grid>
        }
      />
    </ListItem>
  );
};

export default Company;
