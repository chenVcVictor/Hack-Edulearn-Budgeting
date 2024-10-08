import React from "react";
import "./CustomSelection.css";
import "/src/styles.css";

import { Box, Button, Typography } from "@mui/material";

import allEvents from "../db/allEvents.json";

const selectButtonUrl = "../../gameAssets/SelectButton.png";
const someRandomImage = "../../gameAssets/StrawberryMainCharacter.png";

function getScenarios(year) {
  const yearKey = "Year" + year;
  return allEvents[yearKey];
}

// Validates statistics such that 0 <= stat <= 100
function validateStats(prevStat, increment) {
  if (prevStat + increment >= 100) {
    return 100;
  } else if (prevStat + increment <= 0) {
    return 0;
  } else {
    return prevStat + increment;
  }
}

// ensures 1 <= scenarioCount <= 3 given there are only 3 scenarios per year
// function handleScenarioCount(
//   scenarioCount,
//   year,
//   setYear,
//   setScenarios,
//   onPromptClose,
//   isTransitionPopupOpen,
//   openTransitionPopupOpen,
//   closeTransitionPopupOpen
// ) {
//   if (scenarioCount < 3) {
//     return scenarioCount + 1;
//   } else {
//     setYear((prevYear) => prevYear + 1);
//     setScenarios(() => getScenarios(year + 1));
//     return 1;
//   }
// }

function handleScenarioTransition(
  scenarioCount,
  year,
  setScenarioCount,
  setYear,
  setIsGameOver,
  setScenarios,
  closePromptPopup,
  isTransitionPopupOpen,
  openTransitionPopupOpen,
  closeTransitionPopupOpen
) {
  if (year == 4 && scenarioCount == 3) {
    setIsGameOver(() => true);
  } else if (scenarioCount < 3) {
    setScenarioCount((prevCount) => prevCount + 1);
  } else {
    setYear((prevYear) => prevYear + 1);
    setScenarioCount(() => 1);
    setScenarios(() => getScenarios(year + 1));
    closePromptPopup();
    openTransitionPopupOpen();
  }
}

// Handles effects of selecting an event
function handleSelectClick(
  scenarioCount,
  year,
  setMoney,
  setHappiness,
  setIntelligence,
  setHealth,
  setScenarioCount,
  setYear,
  setIsGameOver,
  setScenarios,
  closePromptPopup,
  isTransitionPopupOpen,
  openTransitionPopupOpen,
  closeTransitionPopupOpen,
  data
) {
  setMoney((prevMoney) => prevMoney + data.money);
  setHappiness((prevHappiness) => validateStats(prevHappiness, data.happiness));
  setIntelligence((prevIntelligence) =>
    validateStats(prevIntelligence, data.intelligence)
  );
  setHealth((prevHealth) => validateStats(prevHealth, data.health));

  handleScenarioTransition(
    scenarioCount,
    year,
    setScenarioCount,
    setYear,
    setIsGameOver,
    setScenarios,
    closePromptPopup,
    isTransitionPopupOpen,
    openTransitionPopupOpen,
    closeTransitionPopupOpen
  );
}

function CustomSelection({
  onPromptClose,
  scenarioCount,
  year,
  setMoney,
  setHappiness,
  setIntelligence,
  setHealth,
  setScenarioCount,
  setYear,
  setIsGameOver,
  setScenarios,
  isTransitionPopupOpen,
  openTransitionPopupOpen,
  closeTransitionPopupOpen,
  ...data
}) {
  return (
    // <div className="custom-select">
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "400px",
        minWidth: "200px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          height: "150px",
          width: "150px",
        }}
      >
        <img
          src={data.imgUrl}
          alt="selection image"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        ></img>
      </Box>
      <Typography> {data.topic} </Typography>
      <div className="text-style">{data.description}</div>
      <Typography
        className="text-style"
        style={{ color: data.money >= 0 ? "green" : "red" }}
      >
        Money: {data.money >= 0 
        ? `\$${data.money}`:
          `- \$${Math.abs(data.money)}`
          } 
      </Typography>
      <Box
        sx={{
          marginTop: "auto", // Pushes the button to the bottom
          width: "100%", // Optional: makes the button full-width
          display: "flex",
          justifyContent: "center", // Center the button horizontally
        }}
      >
        <Button
          className="ageUpButton"
          disableRipple
          onClick={() =>
            handleSelectClick(
              scenarioCount,
              year,
              setMoney,
              setHappiness,
              setIntelligence,
              setHealth,
              setScenarioCount,
              setYear,
              setIsGameOver,
              setScenarios,
              onPromptClose,
              isTransitionPopupOpen,
              openTransitionPopupOpen,
              closeTransitionPopupOpen,
              data
            )
          }
        >
          <img src={selectButtonUrl} alt="Age Up" />
        </Button>
      </Box>
    </Box>
    // </div>
  );
}

export default CustomSelection;
