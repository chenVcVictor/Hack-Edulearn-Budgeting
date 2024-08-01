import * as React from "react";

import "/src/styles.css";
import allEvents from "../db/allEvents.json";

import { Box, Grid, Typography, Button, LinearProgress } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import StatsProgressBar from "../components/StatsProgressBar";

import PromptPopup from "./prompt/PromptPopup";
import PromptPage from "./prompt/PromptPage";
import TransitionPopup from "./prompt/TransitionPopup";

const backgroundUrl = "./gameAssets/Background.jpg";
const eventButtonUrl = "./gameAssets/NextEventButton.png";
const gameLogoUrl = "./gameAssets/BudgetChallengeIcon.png";
const moneyIconUrl = "./gameAssets/MoneyIcon.png";

function getScenarios(year) {
  const yearKey = "Year" + year;
  return allEvents[yearKey];
}

function GamePage() {
  const randomStartAmount = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const [year, setYear] = React.useState(1);

  const [happiness, setHappiness] = React.useState(40);
  const [intelligence, setIntelligence] = React.useState(40);
  const [health, setHealth] = React.useState(40);
  const [money, setMoney] = React.useState(() => randomStartAmount(500, 10000));

  const [isPromptPopupOpen, setIsPromptPopupOpen] = React.useState(false);
  const openPromptPopup = () => setIsPromptPopupOpen(true);
  const closePromptPopup = () => setIsPromptPopupOpen(false);

  const [isTransitionPopupOpen, setIsTransitionPopupOpen] =
    React.useState(false);
  const openTransitionPopupOpen = () => setIsTransitionPopupOpen(true);
  const closeTransitionPopupOpen = () => setIsTransitionPopupOpen(false);

  const [scenarios, setScenarios] = React.useState(getScenarios(year));
  const [scenarioCount, setScenarioCount] = React.useState(1);

  const [isGameOver, setIsGameOver] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isGameOver) {
      navigate("/results", {
        state: { money, happiness, intelligence, health },
      });
    }
  }, [isGameOver, navigate, money, happiness, intelligence, health]);

  return (
    <>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <PromptPopup
          isPromptOpen={isPromptPopupOpen}
          onPromptClose={closePromptPopup}
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
          isTransitionPopupOpen={isTransitionPopupOpen}
          openTransitionPopupOpen={openTransitionPopupOpen}
          closeTransitionPopupOpen={closeTransitionPopupOpen}
        />

        <TransitionPopup
          isPopupOpen={isTransitionPopupOpen}
          onClose={closeTransitionPopupOpen}
          year={year}
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
                openPromptPopup();
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
