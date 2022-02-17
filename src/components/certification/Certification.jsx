import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const formatDate = (date) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = monthNames[date.getMonth()];

  return `${month} ${date.getFullYear()}`;
};

const Certification = ({
  issuer,
  title,
  issueDate,
  certificateUrl,
  issuerImageUrl,
}) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={title} src={issuerImageUrl} />
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <Grid container component="span">
            <Grid item xs={12} component="span">
              <Typography
                sx={{ display: "block" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {issuer}
              </Typography>
            </Grid>
            <Grid item xs={12} component="span">
              {formatDate(issueDate)}
            </Grid>
            {certificateUrl && (
              <Grid item xs={12} component="span" sx={{ marginTop: 1 }}>
                <Button
                  variant="outlined"
                  size="small"
                  LinkComponent="a"
                  href={certificateUrl}
                  target="_blank"
                >
                  View Certificate
                </Button>
              </Grid>
            )}
          </Grid>
        }
      />
    </ListItem>
  );
};

export default Certification;
