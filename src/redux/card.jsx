import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import React from "react";

export default function Card() {
  return (
    <div>
      <IconButton aria-label="delete" size="large">
        <DeleteIcon />
      </IconButton>
    </div>
  );
}
