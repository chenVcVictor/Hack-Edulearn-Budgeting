import * as React from "react";

import "/src/styles.css";

import { Box, Grid, Typography, Button } from "@mui/material";

function GamePage() {
  const backgroundUrl = "./gameAssets/Background.jpg";
  const ageUpButtonUrl = "./gameAssets/AgeUpButton.png";
  const gameLogoUrl = "./gameAssets/BudgetChallengeIcon.png";

  const [happiness, setHappiness] = React.useState(0);
  const [intelligence, setIntelligence] = React.useState(0);
  const [health, setHealth] = React.useState(0);
  const [age, setAge] = React.useState(0);
  const [money, setMoney] = React.useState(0);

  return (
    <>
      <Box className="backgroundImage">
        <Grid container className="gridContainer">
          <Grid item xs={4}>
            <Typography>Age: {age}</Typography>
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
            <img src={gameLogoUrl} alt="The Budget Challenge" />
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
