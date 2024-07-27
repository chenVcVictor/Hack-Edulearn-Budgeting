import * as React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import GamePage from "./pages/GamePage";

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
  const [count, setCount] = React.useState(0);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ overflowX: "hidden" }}>
          <CssBaseline />
          <GamePage />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
