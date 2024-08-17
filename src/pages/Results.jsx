import * as React from "react";

import "/src/styles.css";

import { Link as RouterLink, useLocation } from "react-router-dom";

import { Box, Grid, Typography, Button, Link } from "@mui/material";

import StatsProgressBar from "../components/StatsProgressBar";

const backgroundUrl = "./gameAssets/Background.jpg";
const moneyIconUrl = "./gameAssets/MoneyIcon.png";
const replayButtonUrl = "./gameAssets/ReplayButton.png";

const mainCharacterUrl = "./gameAssets/CharacterGraduated.png";

function Results() {
  const savedState = useLocation();
  const { money, happiness, intelligence, health } = savedState.state || {};
  return (
    <Box
      className="backgroundImage"
      sx={{
        "--background-url": `url(${backgroundUrl})`,
      }}
    >
      <Box className="resultsContainer">
        <Typography
          variant="h3"
          sx={{ textAlign: "center", paddingTop: "20px" }}
        >
          Results
        </Typography>
        <Grid container alignItems="center">
          <Grid item xs={5}>
            <img
              src={mainCharacterUrl}
              alt="Main Character"
              style={{ height: "300px", width: "250px" }}
            />
          </Grid>
          <Grid item xs={7}>
            <Typography>Happiness: </Typography>
            <StatsProgressBar value={happiness} />
            <Typography>Knowledge: </Typography>
            <StatsProgressBar value={intelligence} />
            <Typography>Health: </Typography>
            <StatsProgressBar value={health} />
            {/* Money Amount */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                marginTop: "10px",
              }}
            >
              <Box>
                <img src={moneyIconUrl} alt="Money Icon" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle1">
                  Money: <br />${money}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Link
          component={RouterLink}
          to="/game"
          className="ageUpButton"
          sx={{ top: "15px", display: "flex", justifyContent: "center" }}
        >
          <Button disableRipple>
            <img src={replayButtonUrl} alt="Replay" />
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Results;
