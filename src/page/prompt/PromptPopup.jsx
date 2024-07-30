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
      />
    </div>
  );
}

export default PromptPopup;
