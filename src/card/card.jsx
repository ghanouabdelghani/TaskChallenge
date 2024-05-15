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

const container = {
  background: "#fff",
  borderRadius: "24px",
  boxShadow: "0 6px 58px rgba(196, 203, 214, .104)",
  display: "flex",
  // display: "grid",
  // gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "15px",
  padding: "22px 30px",
};

const para = { color: "#91929e", fontSize: "14px" };

const subpara = {
  color: "#0a1629",
  fontSize: "16px",
};
const getPrioritycolor = (p) => {
  switch (p) {
    case "high":
      return "red";
    case "medium":
      return "orange";
    case "low":
      return "green";
  }
};

export default function Card({ task, priority }) {
  return (
    <div style={container}>
      <div style={{ width: "200px" }}>
        <p style={para}>Task</p>
        <p style={subpara}>{task}</p>
      </div>
      <div>
        <p style={para}>priority</p>
        <p style={{ ...subpara, color: getPrioritycolor(priority) }}>
          {" "}
          {priority}
        </p>
      </div>
      <button style={button}> To Do</button>
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
