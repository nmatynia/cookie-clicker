import React from "react";
import "../Styles/Cookie.css";

export default function Cookie(props) {
  return (
    <div className="cookieContainer">
      <img
        src={require("../Images/picture.png").default}
        alt="cookie"
        onClick={props.onClick}
        onMouseDown={props.onMouseDown}
        onAnimationEnd={props.onAnimationEnd}
        className={`cookiePicture ${props.cookieClickedClassName}`}
      />
    </div>
  );
}
