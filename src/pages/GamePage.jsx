import * as React from "react";

import "/src/styles.css";
import allEvents from "../db/allEvents.json";

import { Box, Grid, Typography, Button, LinearProgress } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import StatsProgressBar from "../components/StatsProgressBar";

import PromptPopup from "../page/prompt/PromptPopup";
import PromptPage from "../page/prompt/PromptPage";

function getScenarios(year) {
  const yearKey = "Year" + year;
  return allEvents[yearKey];
}

function GamePage() {
  const backgroundUrl = "./gameAssets/Background.jpg";
  const eventButtonUrl = "./gameAssets/EventsButton.png";
  const gameLogoUrl = "./gameAssets/BudgetChallengeIcon.png";
  const moneyIconUrl = "./gameAssets/MoneyIcon.png";

  const randomStartAmount = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const [year, setYear] = React.useState(1);

  const [happiness, setHappiness] = React.useState(40);
  const [intelligence, setIntelligence] = React.useState(40);
  const [health, setHealth] = React.useState(40);
  const [money, setMoney] = React.useState(() => randomStartAmount(500, 10000));

  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const [scenarios, setScenarios] = React.useState(getScenarios(year));
  const [scenarioCount, setScenarioCount] = React.useState(1);

  const [isGameOver, setIsGameOver] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isGameOver) {
      navigate("/results");
    }
  }, [isGameOver, navigate]);

  return (
    <>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <PromptPopup
          isOpen={isPopupOpen}
          onClose={closePopup}
          setMoney={setMoney}
          setHappiness={setHappiness}
          setIntelligence={setIntelligence}
          setHealth={setHealth}
          year={year}
          setYear={setYear}
          setIsGameOver={setIsGameOver}
          scenarios={scenarios}
          setScenarios={setScenarios}
          scenarioCount={scenarioCount}
          setScenarioCount={setScenarioCount}
        />
      </Box>
      <Box
        className="backgroundImage"
        sx={{
          "--background-url": `url(${backgroundUrl})`,
        }}
      >
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
            {/* Age */}
            <Typography variant="h6"> Year: {year}</Typography>
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
            {/* Game Logo */}
            <Box>
              <img src={gameLogoUrl} alt="The Budget Challenge" />
            </Box>

            {/* Events */}
            <Button
              disableRipple
              className="ageUpButton"
              onClick={() => {
                openPopup();
              }}
            >
              <img src={eventButtonUrl} alt="Event" />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default GamePage;
