import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import High from "./high";
import Low from "./low";
import Medium from "./medium";

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

export default function Button() {
  return (
    <Popup
      trigger={<button style={buttonStyle}>Add Task</button>}
      modal
      nested
      contentStyle={{
        borderRadius: "30px",
        boxSizing: "border-box",
        width: "400px",
        height: "400px",
      }}
    >
      <div className="modal">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: " 20px",
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
            margin: "20px",
          }}
        >
          <p style={{ color: "#7D8592" }}>Task</p>
          <input
            style={{
              width: "300px",
              height: "50px",
              borderRadius: "20px",
              color: "#7D8592",
              border: "1px solid",
            }}
            type="text"
            placeholder="Type your task here ..."
          />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <p style={{ color: "#7D8592" }}>priority</p>
            <div style={{ display: "flex" }}>
              <High />
              <Low />
              <Medium />
            </div>
          </div>
        </div>
      </div>
      <button
        style={{
          appearance: "none",
          backgroundColor: "transparent",
          border: "0.125em solid #1A1A1A",
          borderRadius: "0.9375em",
          boxSizing: "border-box",
          color: "#3B3B3B",
          cursor: "pointer",
          // display: "inline-block",
          fontFamily:
            'Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
          fontSize: "16px",
          fontWeight: 600,
          lineHeight: "normal",
          margin: "0",
          // minHeight: "3.75em",
          // minWidth: "0",
          // outline: "none",
          padding: "1em 2.3em",
          textAlign: "center",
          // textDecoration: "none",
          // transition: "all 300ms cubic-bezier(.23, 1, 0.32, 1)",
          // userSelect: "none",
          WebkitUserSelect: "none",
          touchAction: "manipulation",
          // willChange: "transform",
          // textAlignLast: "start",
        }}
      >
        Add
      </button>
    </Popup>
  );
}
