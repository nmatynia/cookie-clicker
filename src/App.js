import React from "react";
import { useState, useEffect } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Cookie from "./Components/Cookie";
import Upgrades from "./Components/Upgrades";
import Stats from "./Components/Stats";

export default function App() {
  const [counter, setCounter] = useState(1);
  const [upgrade, setUpgrade] = useState(1);
  const [cost, setCost] = useState(10);
  const [costPerSecond, setCostPerSecond] = useState(50);
  const [upgradePerSecond, setUpgradePerSecond] = useState(0);

  //Score handle function
  const handleClick = () => {
    setCounter(counter + upgrade);
  };

  //Upgrade handle function
  const handleUpgrade = () => {
    if (counter >= cost) {
      setCounter(counter - cost);
      setUpgrade(upgrade + 1);
      setCost(Math.round(cost * 2));
    }
  };

  //Handles upgrading score increment per second
  const handleUpgradePerSecond = () => {
    if (counter >= costPerSecond) {
      setCounter(counter - costPerSecond);
      setUpgradePerSecond((prevUpgradePerSecond) => prevUpgradePerSecond * 2);
      setCostPerSecond(Math.round(costPerSecond * 2));
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + upgradePerSecond);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <Upgrades
        onClick={handleUpgrade}
        cost={cost}
        onUpgradePerSecond={handleUpgradePerSecond}
        workerPerSecond={upgradePerSecond}
        costPerSecond={costPerSecond}
      />
      <Cookie onClick={handleClick} />
      <Stats
        counter={counter}
        upgrade={upgrade}
        upgradePerSecond={upgradePerSecond}
      />
    </div>
  );
}
