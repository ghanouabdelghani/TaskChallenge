import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Tags from "./tags";

const buttonStyle = {
  display: "flex",
  alignItems: "center",
  color: "white",
  background: "#713FFF",
  border: "none",
  borderRadius: "14px",
  boxShadow: "0 6px 12px rgba(113, 63, 255, .25)",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: 600,
  outline: "none",
  padding: "13px 30px",
};

const input = {
  background: "#fff",
  border: "1px solid #d8e0f0",
  borderRadius: "14px",
  boxShadow: "0 1px 2px rgba(184, 200, 224, .222)",
  fontWeight: 400,
  outline: "none",
  padding: "16px 18px",
  width: "80%",
};
const buttone = {
  background: "#713fff",
  border: "none",
  borderRadius: "14px",
  boxShadow: "0 6px 12px rgba(113, 63, 255, .25)",
  color: "#fff",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: 600,
  outline: "none",
  padding: "13px 30px",
  marginTop: "50px",
  float: "right",
};

export default function Button() {
  const [taskValue, setTaskValue] = useState("");
  const [priority, setPriority] = useState("")
  return (
    <Popup
      trigger={<button style={buttonStyle}>Add Task</button>}
      modal
      nested
      contentStyle={{
        borderRadius: "30px",
        boxSizing: "border-box",
        padding: "30px",
        width: "400px",
        height: "400px",
      }}
    >
      <div className="modal">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <h2>Add Task</h2>
          <button
            style={{
              textAlign: "center",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <p>x</p>
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <p style={{ color: "#7D8592" }}>Task</p>
          <input
            style={input}
            type="text"
            placeholder="Type your task here ..."
            onChange={(e) => {
              setTaskValue(e.target.value);
            }}
          />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <p
              style={{
                color: "#7D8592",
                fontSize: "14px",
                marginBottom: "15px",
              }}
            >
              priority
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <Tags texte="high" />
              <Tags texte="medium" />
              <Tags texte="low" />
            </div>
          </div>
        </div>
      </div>
      <button style={buttone}>Add</button>
    </Popup>
  );
}
