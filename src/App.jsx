import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";

import GamePage from "./pages/GamePage";
import LandingPage from "./pages/LandingPage";
import InstructionsPage from "./pages/InstructionsPage";
import Results from "./pages/Results";

import "./global.css";

const theme = createTheme({
  typography: {
    fontFamily: "Fontdiner Swanky, Arial, sans-serif",
  },
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: "#ddd",
        },
        bar: {
          backgroundColor: "#FFD60A",
        },
      },
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ overflowX: "hidden" }}>
          <Router>
            <Routes>
              <Route path="" element={<LandingPage />} />
              <Route path="/instructions" element={<InstructionsPage />} />
              <Route path="/game" element={<GamePage />} />
              <Route path="/results" element={<Results />} />
            </Routes>
          </Router>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
