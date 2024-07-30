import React from "react";
import "./CustomSelection.css";

import { Box, Grid, Typography, Button, LinearProgress } from "@mui/material";

function CustomSelection({
  setMoney,
  setHappiness,
  setIntelligence,
  setHealth,
  ...data
}) {
  const selectButtonUrl = "../../gameAssets/SelectButton.png";
  return (
    <div className="custom-select">
      <div className="topic-style">{data.topic}</div>
      <div className="text-style">{data.description}</div>
      <div className="text-style">Money: ${data.money}</div>
      <Button
        disableRipple
        className="ageUpButton"
        sx={{ marginTop: "80px" }}
        onClick={() => {
          setMoney((prevMoney) => prevMoney + data.money);
          setHappiness((prevHappiness) => prevHappiness + data.happiness);
          setIntelligence(
            (prevIntelligence) => prevIntelligence + data.intelligence
          );
          setHealth((prevHealth) => prevHealth + data.health);
        }}
      >
        <img src={selectButtonUrl} alt="Age Up" />
      </Button>
    </div>
  );
}

export default CustomSelection;
