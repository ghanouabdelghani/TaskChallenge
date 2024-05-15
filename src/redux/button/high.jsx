import React, { useState } from "react";

const buttonStyle = {
  appearance: "none",
  backgroundColor: "transparent",
  border: "0.125em solid #1A1A1A",
  borderRadius: "0.9375em",
  boxSizing: "border-box",
  color: "#3B3B3B",
  cursor: "pointer",
  display: "inline-block",
  fontFamily:
    'Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "normal",
  margin: "0",
  minHeight: "3.75em",
  minWidth: "0",
  outline: "none",
  padding: "1em 2.3em",
  textAlign: "center",
  textDecoration: "none",
  transition: "all 300ms cubic-bezier(.23, 1, 0.32, 1)",
  userSelect: "none",
  WebkitUserSelect: "none",
  touchAction: "manipulation",
  willChange: "transform",
};

export default function High() {
  const [buttonColor, setButtonColor] = useState("");
  const [textecolor, settextecolor] = useState("");
  const handleClick = () => {
    setButtonColor("red");
    settextecolor("white");
  };

  return (
    <div>
      <button
        onClick={handleClick}
        style={{ ...buttonStyle, background: buttonColor, color: textecolor }}
      >
        High
      </button>
    </div>
  );
}
