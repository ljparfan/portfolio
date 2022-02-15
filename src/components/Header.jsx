import React from "react";
import Avatar from "@mui/material/Avatar";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import CodeIcon from "@mui/icons-material/Code";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import HEADER_DATA from "../data/header.data";

const data = HEADER_DATA;

const Header = () => {
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
        <Avatar
          alt={data.name}
          src={data.imageUrl}
          sx={{ width: 150, height: 150 }}
        />
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems={isHandset ? "center" : "flex-start"}
        >
          <Grid item>
            <Typography variant="h5">{data.name}</Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <CodeIcon color="primary" />
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">{data.jobTitle}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <MyLocationIcon color="primary" />
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">{data.location}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={1}>
              <IconButton color="primary">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="primary">
                <TwitterIcon />
              </IconButton>
              <IconButton color="primary">
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
