import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Header from "./components/header/Header";
import Sections from "./components/sections/Sections";

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
          <Sections />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
