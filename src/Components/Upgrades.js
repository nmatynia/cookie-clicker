import React from "react";
import "../Styles/Upgrades.css";
import { Button } from "bootstrap";
export default function Upgrades(props) {
  return (
    <div className="upgrades">
      <button onClick={props.onClick}>Upgrade ({props.cost}$)</button>
      <button>holder</button>
    </div>
  );
}
