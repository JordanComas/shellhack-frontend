import React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const AddButton = () => {
  const token = localStorage.getItem("token");

  return token ? (
    <div>
      <Box
        sx={{
          "& > :not(style)": { m: 1 },
          position: "fixed",
          bottom: "1%",
          right: "1%",
          zIndex: 1,
        }}
      >
        <Link to="/transaction">
          <Fab color={"primary"} aria-label="add">
            <AddIcon />
          </Fab>
        </Link>
      </Box>
    </div>
  ) : null;
};

export default AddButton;
