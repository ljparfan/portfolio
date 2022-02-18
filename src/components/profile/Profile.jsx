import React from "react";
import Avatar from "@mui/material/Avatar";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import EmailIcon from "@mui/icons-material/Email";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import HEADER_DATA from "./profile-data";

const {
  name,
  imageUrl,
  jobTitle,
  location,
  linkedInProfile,
  twitterProfile,
  instagramProfile,
  email,
} = HEADER_DATA;

const Profile = () => {
  const theme = useTheme();
  const isHandset = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      direction={isHandset ? "column" : "row"}
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <Avatar alt={name} src={imageUrl} sx={{ width: 150, height: 150 }} />
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems={isHandset ? "center" : "flex-start"}
        >
          <Grid item>
            <Typography variant="h5">{name}</Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <BusinessCenterIcon color="primary" />
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">{jobTitle}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <MyLocationIcon color="primary" />
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">{location}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <EmailIcon color="primary" />
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">{email}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={1}>
              <IconButton
                color="primary"
                LinkComponent="a"
                href={linkedInProfile}
                target="_blank"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                color="primary"
                LinkComponent="a"
                href={twitterProfile}
                target="_blank"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                color="primary"
                LinkComponent="a"
                href={instagramProfile}
                target="_blank"
              >
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
