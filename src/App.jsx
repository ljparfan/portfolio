import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Card from "@mui/material/Card";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import useMediaQuery from "@mui/material/useMediaQuery";
import { pink } from "@mui/material/colors";
import Header from "./components/Header";

const App = () => {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: pink,
      background: {
        paper: "#fafafa",
        default: "#fafafa",
      },
    },
    typography: {
      fontFamily: `"Cairo", "Arial", sans-serif`,
    },
  });
  const [value, setValue] = React.useState(0);
  const isHandset = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{ paddingTop: 5, background: "#fff", paddingBottom: 3 }}
        >
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Card
            variant="outlined"
            sx={{
              height: "100%",
              borderLeft: 0,
              borderRight: 0,
              borderBottom: 0,
            }}
          >
            <AppBar elevation={0} position="static" color="transparent">
              <Tabs
                textColor="primary"
                indicatorColor="primary"
                value={value}
                variant={isHandset ? "scrollable" : "fullWidth"}
                scrollButtons="auto"
                onChange={handleChange}
              >
                <Tab label="Skills" />
                <Tab label="Work Experience" />
                <Tab label="Certifications" />
                <Tab label="Education" />
                <Tab label="Projects" />
              </Tabs>
            </AppBar>
          </Card>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
