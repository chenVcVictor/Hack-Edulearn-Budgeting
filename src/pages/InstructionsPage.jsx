import * as React from "react";

import { Box, Container, Typography, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function InstructionsPage() {
  const backgroundUrl = "./gameAssets/CityNightBackground.jpg";
  const gameLogoUrl = "./gameAssets/BudgetChallengeIcon.png";
  const playButtonUrl = "./gameAssets/PlayButton.png";

  const instructionsText =
    "How to play: \nWelcome to the challenge! Your goal is to maximize your stats - happiness, intelligence, and health - as much as possible with a randomized amount of money. Each year, you will encounter scenarios that allow you to spend or earn money, directly affecting your stats. Be wise about your spending to achieve the best outcome. Good luck!";

  return (
    <Box
      className="backgroundImage"
      sx={{
        "--background-url": `url(${backgroundUrl})`,
        display: "flex",
        justifyContent: "space-between", // for horizontal
        alignItems: "center	", // for vertical
        flexDirection: "column",
      }}
    >
      <Box>
        <img
          src={gameLogoUrl}
          alt="The Budget Challenge"
          style={{ width: "500px", height: "auto", marginTop: "50px" }}
        />
      </Box>
      <Typography
        variant="h6"
        align="center"
        maxWidth="sm"
        sx={{ whiteSpace: "pre-line", marginBottom: "60px" }}
      >
        {instructionsText}
      </Typography>
      <Link component={RouterLink} to="/game" className="ageUpButton">
        <Button disableRipple>
          <img src={playButtonUrl} alt="Play" />
        </Button>
      </Link>
    </Box>
  );
}

export default InstructionsPage;
