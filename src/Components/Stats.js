import React from "react";
import "../Styles/Stats.css";

export default function Stats(props) {
  return (
    <div className="stats">
      <p className="stat">Current click power: {props.upgrade}</p>
      <p className="stat">Score per second: {props.upgradePerSecond}</p>
      <p className="stat">Score: {props.counter}</p>
    </div>
  );
}
