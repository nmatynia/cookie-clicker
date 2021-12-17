import React from "react";
import "../Styles/Stats.css";

export default function Stats(props) {
  return (
    <div className="stats">
      Current click power: {props.upgrade}
      <br />
      Score per second: {props.upgradePerSecond}
      <br />
      <br />
      Score: {props.counter}
    </div>
  );
}
