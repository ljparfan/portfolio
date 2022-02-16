import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

function calculateExperienceInYears(startDate, endDate) {
  const value = endDate.getYear() - startDate.getYear();
  return `${value} ${value === 1 ? "year" : "years"}`;
}

const Skill = ({
  name,
  imageUrl,
  startDate,
  endDate = new Date(),
  skillLevel,
  experience,
}) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={name} src={imageUrl} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "block" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {experience || calculateExperienceInYears(startDate, endDate)}
            </Typography>
            <Rating readOnly name="customized-10" value={skillLevel} max={10} />
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default Skill;
