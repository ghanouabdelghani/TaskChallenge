import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./redux/button/button";
import Card from "./card/card";

function App() {
  return (
    <div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          margin: "50px 0",
        }}
      >
        <h2
          style={{
            color: "#0a1629",
            fontSize: "36px",
            fontWeight: 700,
          }}
        >
          Task List
        </h2>
        <Button />
      </div>
      <div style={{}}>
        <Card />
      </div>
    </div>
  );
}

export default App;
