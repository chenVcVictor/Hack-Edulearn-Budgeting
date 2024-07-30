import * as React from "react";
import "/src/styles.css";

import { Box, Container, Typography, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Results() {
  const backgroundUrl = "./gameAssets/Background.jpg";

  return (
    <>
      <Box
        className="backgroundImage"
        sx={{
          "--background-url": `url(${backgroundUrl})`,
        }}
      ></Box>
    </>
  );
}

export default Results;
