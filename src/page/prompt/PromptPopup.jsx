import React from "react";
import "./PromptPage.css";
import PromptPage from "./PromptPage";

function PromptPopup({
  isOpen,
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
  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup-backdrop">
      <PromptPage
        onClose={onClose}
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
    </div>
  );
}

export default PromptPopup;
