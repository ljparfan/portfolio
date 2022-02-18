import React, { useContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeContext } from "./contexts/theme/ThemeContext";
import { getPaletteProps } from "./contexts/theme/theme-utils";
import BottomNavBar from "./components/menu/BottomNavBar";
import NavBar from "./components/nav-bar/NavBar";
import HomePage from "./pages/HomePage";
import WorkExperiencePage from "./pages/WorkExperiencePage";
import SkillsPage from "./pages/SkillsPage";
import CertificationsPage from "./pages/CertificationsPage";
import EducationPage from "./pages/EducationPage";
import useMediaQuery from "@mui/material/useMediaQuery";
import SideBar from "./components/menu/SideBar";
import ProjectsPage from "./pages/ProjectsPage";

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
  const isHandset = useMediaQuery(theme.breakpoints.down("md"));

  const myRoutes = (
    <Routes>
      <Route path="/" element={isHandset ? <HomePage /> : <ProjectsPage />} />
      <Route path="/experience" element={<WorkExperiencePage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/certifications" element={<CertificationsPage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="*" element={<Navigate to="/experience" />} />
    </Routes>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isHandset ? (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/experience" element={<WorkExperiencePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/education" element={<EducationPage />} />
          </Routes>
          <BottomNavBar />
        </>
      ) : (
        <SideBar appBar={NavBar}>{myRoutes}</SideBar>
      )}
    </ThemeProvider>
  );
};

export default App;
