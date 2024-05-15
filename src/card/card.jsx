import React from "react";
import Cercle from "./cercle";
import Edit from "./edit";
import Delete from "./delete";

const button = {
  background: "hsla(217, 9%, 53%, .14)",
  border: "none",
  borderRadius: "8px",
  color: "#7d8592",
  cursor: "pointer",
  fontSize: "12px",
  fontWeight: 700,
  outline: "none",
  padding: "7px 14px",
};

export default function Card() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "24px",
        boxShadow: "0 6px 58px rgba(196, 203, 214, .104)",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "15px",
        padding: "22px 30px",
      }}
    >
      <div>
        <p>Task</p>
        <p>Priority</p>
      </div>
      <div>
        <p>Go to gym</p>
        <p> high</p>
      </div>
      <button style={button}>
        {" "}
        To Do
      </button>
      <div style={{ marginRight: "20px" }}>
        <Cercle />
      </div>
      <div style={{ display: "flex", gap: "6px" }}>
        <Edit />
        <Delete />
      </div>
    </div>
  );
}
