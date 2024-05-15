import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const value = 75;
export default function Cercle() {
  return (
    <div style={{ width: 50 }}>
      <CircularProgressbar
        value={value}
        strokeWidth={10}
        styles={{ root: { width: "100%" } }}
      />
    </div>
  );
}
