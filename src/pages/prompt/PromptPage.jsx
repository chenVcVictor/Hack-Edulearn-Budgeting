import React from "react";
import "./PromptPage.css";

import CustomSelection from "../../components/CustomSelection";
import HeadPrompt from "../../components/prompt/HeadPrompt";

import prompt from "../../db/Dialog.json";
import selection from "../../db/Selection.json";
import allEvents from "../../db/allEvents.json";

import { Button, Typography } from "@mui/material";

const closeButtonUrl = "/gameAssets/CloseButton.png";

function PromptPage({
  onPromptClose,
  setMoney,
  setHappiness,
  setIntelligence,
  setHealth,
  year,
  setYear,
  setIsGameOver,
  scenarios,
  setScenarios,
  scenarioCount,
  setScenarioCount,
  isTransitionPopupOpen,
  openTransitionPopupOpen,
  closeTransitionPopupOpen,
}) {
  const scenarioKey = "Scenario" + scenarioCount;
  const curScenario = scenarios[scenarioKey];

  const curScenarioDescription = curScenario["description"];
  const curScenarioOptions = curScenario["options"];

  return (
    <div className="box-container">
      <div className="button-wrapper">
        <Button onClick={onPromptClose} className="closeButton">
          <img src={closeButtonUrl} alt="Close Button"></img>
        </Button>
      </div>
      <Typography variant="h5" className="text-container">
        {"Scenario " + scenarioCount + ": " + curScenarioDescription}
      </Typography>
      <div className="selection-container">
        {curScenarioOptions.map((event, index) => (
          <CustomSelection
            key={index}
            {...event}
            onPromptClose={onPromptClose}
            scenarioCount={scenarioCount}
            year={year}
            setMoney={setMoney}
            setHappiness={setHappiness}
            setIntelligence={setIntelligence}
            setHealth={setHealth}
            setYear={setYear}
            setScenarioCount={setScenarioCount}
            setIsGameOver={setIsGameOver}
            setScenarios={setScenarios}
            isTransitionPopupOpen={isTransitionPopupOpen}
            openTransitionPopupOpen={openTransitionPopupOpen}
            closeTransitionPopupOpen={closeTransitionPopupOpen}
          />
        ))}
      </div>
    </div>
  );
}

export default PromptPage;
