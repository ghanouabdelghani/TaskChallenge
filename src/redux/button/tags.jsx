import React from "react";

const getTaggsstyle = (t) => {
  switch (t) {
    case "high":
      return {
        color: "red",
        backgroundColor: "white",
        border: "1px solid red",
      };
    case "medium":
      return {
        color: "orange",
        backgroundColor: "white",
        border: "1px solid orange",
      };
    case "low":
      return {
        color: "green",
        backgroundColor: "white",
        border: "1px solid green",
      };
  }
};

export default function Tags({ texte, sendPriority }) {
  const handleClick = () => {
    sendPriority(texte);
  };
  return (
    <div>
      <button
        style={{
          padding: "10px 20px",
          borderRadius: "10px",
          ...getTaggsstyle(texte),
        }}
        onClick={handleClick}
      >
        {texte}
      </button>
    </div>
  );
}
