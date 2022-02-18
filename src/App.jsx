import React, { useContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./contexts/theme/ThemeContext";
import { getPaletteProps } from "./contexts/theme/theme-utils";
import BottomNavBar from "./components/bottom-nav-bar/BottomNavBar";
import NavBar from "./components/nav-bar/NavBar";
import HomePage from "./pages/HomePage";
import WorkExperiencePage from "./pages/WorkExperiencePage";
import SkillsPage from "./pages/SkillsPage";
import CertificationsPage from "./pages/CertificationsPage";
import EducationPage from "./pages/EducationPage";

const App = () => {
  const { theme: mode } = useContext(ThemeContext);

  const theme = createTheme({
    palette: {
      ...getPaletteProps(mode),
    },
    typography: {
      fontFamily: `"Cairo", "Arial", sans-serif`,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<WorkExperiencePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/education" element={<EducationPage />} />
      </Routes>
      <BottomNavBar />
    </ThemeProvider>
  );
};

export default App;
