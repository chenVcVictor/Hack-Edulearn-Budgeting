import React from "react";
import "./PromptPage.css";
import PromptPage from "./PromptPage";

function PromptPopup({
  isPromptOpen,
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
  if (!isPromptOpen) {
    return null;
  }

  return (
    <div className={`popup-backdrop ${isPromptOpen ? "open" : ""}`}>
      <PromptPage
        onPromptClose={onPromptClose}
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
    </div>
  );
}

export default PromptPopup;
