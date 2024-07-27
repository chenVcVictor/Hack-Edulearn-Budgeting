import * as React from "react";

import "/src/styles.css";

import { Box, Container, Typography, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function LandingPage() {
  const backgroundUrl = "./gameAssets/CityNightBackground.jpg";
  const gameLogoUrl = "./gameAssets/BudgetChallengeIcon.png";
  const playButtonUrl = "./gameAssets/PlayButton.png";

  return (
    <Box
      className="backgroundImage"
      sx={{
        "--background-url": `url(${backgroundUrl})`,
        display: "flex",
        justifyContent: "center", // for horizontal
        alignItems: "center	", // for vertical
        flexDirection: "column",
      }}
    >
      <Box sx={{ padding: "10px", marginBottom: "60px" }}>
        <img
          src={gameLogoUrl}
          alt="The Budget Challenge"
          style={{ width: "600px", height: "auto" }}
        />
      </Box>
      <Link component={RouterLink} to="/instructions">
        <Button disableRipple className="ageUpButton">
          <img src={playButtonUrl} alt="Play" />
        </Button>
      </Link>
    </Box>
  );
}

export default LandingPage;
