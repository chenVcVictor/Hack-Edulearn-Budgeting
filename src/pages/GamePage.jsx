import * as React from "react";

import "/src/styles.css";

import { Box, Grid, Typography, Button, LinearProgress } from "@mui/material";
import StatsProgressBar from "../components/StatsProgressBar";

function GamePage() {
  const backgroundUrl = "./gameAssets/Background.jpg";
  const ageUpButtonUrl = "./gameAssets/AgeUpButton.png";
  const gameLogoUrl = "./gameAssets/BudgetChallengeIcon.png";
  const moneyIconUrl = "./gameAssets/MoneyIcon.png";

  const [happiness, setHappiness] = React.useState(50);
  const [intelligence, setIntelligence] = React.useState(0);
  const [health, setHealth] = React.useState(0);
  const [age, setAge] = React.useState(0);
  const [money, setMoney] = React.useState(0);

  return (
    <>
      <Box className="backgroundImage">
        <Grid container className="gridContainer">
          {/* left side */}
          <Grid
            item
            xs={4}
            sx={{
              marginLeft: "10px",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Typography variant="h6"> Age: {age}</Typography>
            {/* spacing */}
            <Box sx={{ height: "40px" }} />
            {/* Statistics */}
            <Typography variant="h5">Statistics: </Typography>
            <Typography>Happiness: </Typography>
            <StatsProgressBar value={happiness} />
            <Typography>Intelligence: </Typography>
            <StatsProgressBar value={intelligence} />
            <Typography>Health: </Typography>
            <StatsProgressBar value={health} />
            {/* Money Amount */}
            {/* Nested Grid for C and D */}
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
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "space-between", // for horizontal
              alignItems: "center	", // for vertical
              flexDirection: "column",
            }}
          >
            {/* middle */}
            <Box>
              <img src={gameLogoUrl} alt="The Budget Challenge" />
            </Box>
            <Button
              disableRipple
              className="ageUpButton"
              onClick={() => {
                setAge((prevAge) => prevAge + 1);
              }}
            >
              <img src={ageUpButtonUrl} alt="Age Up" />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default GamePage;
