import React from "react";
import "./PromptPage.css";
import "/src/styles.css";

import { Box, Grid, Typography, Button, LinearProgress } from "@mui/material";

const classNames = ["", "Freshman", "Sophomore", "Junior", "Senior"];

const checkStatsUrl = "/gameAssets/CheckStatsButton.png";

function TransitionPopup({ isPopupOpen, onClose, year }) {
  if (!isPopupOpen) {
    return null;
  }
  return (
    <>
      <div className="popup-backdrop">
        <div className="box-container">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              textAlign={"center"}
              sx={{ margin: "100px" }}
            >
              Congrats on finishing year {year - 1} of college, you are now
              going into <br /> <br />
              Year {year}: {classNames[year]}!
            </Typography>
            <Button className="ageUpButton" onClick={onClose}>
              {" "}
              <img src={checkStatsUrl} alt="Check Stats" />
            </Button>
          </Box>
        </div>
      </div>
    </>
  );
}

export default TransitionPopup;
