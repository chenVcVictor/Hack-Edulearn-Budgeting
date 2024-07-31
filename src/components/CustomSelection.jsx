import React from "react";
import "./CustomSelection.css";

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
function validateScenarioCount(scenarioCount, year, setYear, setScenarios) {
  if (scenarioCount < 3) {
    return scenarioCount + 1;
  } else {
    setYear((prevYear) => prevYear + 1);
    setScenarios(() => getScenarios(year + 1));
    return 1;
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
  data
) {
  setMoney((prevMoney) => prevMoney + data.money);
  setHappiness((prevHappiness) => validateStats(prevHappiness, data.happiness));
  setIntelligence((prevIntelligence) =>
    validateStats(prevIntelligence, data.intelligence)
  );
  setHealth((prevHealth) => validateStats(prevHealth, data.health));
  if (scenarioCount == 3 && year == 4) {
    setIsGameOver(() => true);
  } else {
    setScenarioCount((prevScenarioCount) =>
      validateScenarioCount(prevScenarioCount, year, setYear, setScenarios)
    );
  }
}

function CustomSelection({
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
  ...data
}) {
  return (
    // <div className="custom-select">
    <Box
      sx={{
        display: "flex",
        flexDirection: "column", // Stack children vertically
        alignItems: "center", // Center items horizontally
        justifyContent: "center", // Center items vertically
        position: "relative", // Allow absolute positioning of button
      }}
    >
      <Box
        sx={{
          height: "150px",
          width: "150px",
        }}
      >
        <img
          src={someRandomImage}
          alt="selection image"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        ></img>
      </Box>
      <Typography> {data.topic} </Typography>
      <div className="text-style">{data.description}</div>
      <div className="text-style">Money: ${data.money}</div>
      <Box
        sx={{
          marginTop: "auto", // Pushes the button to the bottom
          width: "100%", // Optional: makes the button full-width
          display: "flex",
          justifyContent: "center", // Center the button horizontally
        }}
      >
        <Button
          sx={{}}
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
