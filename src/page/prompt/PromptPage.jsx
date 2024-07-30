import React from "react";
import "./PromptPage.css";

import CustomSelection from "../../components/CustomSelection";
import HeadPrompt from "../../components/prompt/HeadPrompt";

import prompt from "../../db/Dialog.json";
import selection from "../../db/Selection.json";
import allEvents from "../../db/allEvents.json";

import { Button } from "@mui/material";

// shuffle array alg (Fisher-Yates)
// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

// function generateRandomEvents(data, numEvents) {
//   const randomizedEvents = shuffle(data);
//   console.log(randomizedEvents);
//   return randomizedEvents.slice(0, numEvents);
// }

// const events = generateRandomEvents(allEvents, 4);

/*
 Returns dictionary containing scenarios 1, 2, 3 for given YEAR
 // {"Scenario1": {
        "description": "...",
        "options": [{...}, {...}, {...}]}
      },
      "Scenario2": {
        "description": "...",
        "options": [{...}, {...}, {...}]}
      },
      "Scenario3": {
        "description": "...",
        "options": [{...}, {...}, {...}]}
      },
    }
*/

function PromptPage({
  onClose,
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
}) {
  const scenarioKey = "Scenario" + scenarioCount;
  const curScenario = scenarios[scenarioKey];

  const curScenarioDescription = curScenario["description"];
  const curScenarioOptions = curScenario["options"];

  return (
    <div className="box-container">
      <div className="button-wrapper">
        <Button
          variant="contained"
          onClick={onClose}
          sx={{
            borderRadius: "5% 20% 5% 5%",
            backgroundColor: "red",
            "&:hover": {
              backgroundColor: "darkred",
            },
          }}
        >
          &times;
        </Button>
      </div>
      <div className="text-container">
        <HeadPrompt text={curScenarioDescription} />
      </div>

      <div className="selection-container">
        {curScenarioOptions.map((event, index) => (
          <CustomSelection
            key={index}
            {...event}
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
          />
        ))}
      </div>
    </div>
  );
}

export default PromptPage;
