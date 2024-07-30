import React from "react";
import "./PromptPage.css";

import CustomSelection from "../../components/CustomSelection";
import HeadPrompt from "../../components/prompt/HeadPrompt";

import prompt from "../../db/Dialog.json";
import selection from "../../db/Selection.json";
import allEvents from "../../db/allEvents.json";

import { Button } from "@mui/material";

// shuffle array alg (Fisher-Yates)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateRandomEvents(data, numEvents) {
  const randomizedEvents = shuffle(data);
  return randomizedEvents.slice(0, numEvents);
}

function PromptPage({
  onClose,
  setMoney,
  setHappiness,
  setIntelligence,
  setHealth,
}) {
  const events = generateRandomEvents(allEvents, 4);
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
        <HeadPrompt text={prompt["young-adult"].graduation} />
      </div>

      <div className="selection-container">
        {events.map((event, index) => (
          <CustomSelection
            key={index}
            {...event}
            setMoney={setMoney}
            setHappiness={setHappiness}
            setIntelligence={setIntelligence}
            setHealth={setHealth}
          />
        ))}
      </div>
    </div>
  );
}

export default PromptPage;
