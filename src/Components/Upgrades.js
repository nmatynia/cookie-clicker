import React from "react";
import "../Styles/Upgrades.css";

export default function Upgrades(props) {
  const action = props.workerPerSecond === 0 ? "Buy" : "Upgrade";

  return (
    <div className="upgrades">
      <div className="buttons">
        <button onClick={props.onClick}>Upgrade ({props.cost})</button>

        <button onClick={props.onUpgradePerSecond}>
          {action} +{props.workerPerSecond} score per second (
          {props.costPerSecond})
        </button>
      </div>
    </div>
  );
}
