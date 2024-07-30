import React from "react";
import "./CustomSelection.css";

import { Button } from "@mui/material";

import allEvents from "../db/allEvents.json";

const selectButtonUrl = "../../gameAssets/SelectButton.png";

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
    <div className="custom-select">
      <div className="topic-style">{data.topic}</div>
      <div className="text-style">{data.description}</div>
      <div className="text-style">Money: ${data.money}</div>
      <Button
        disableRipple
        className="ageUpButton"
        sx={{ marginTop: "80px" }}
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
    </div>
  );
}

export default CustomSelection;
