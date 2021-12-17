import React from "react";
import "../Styles/Cookie.css";
export default function Cookie(props) {
  return (
    <div className="cookieContainer">
      <img
        src="http://assets.stickpng.com/images/580b57fbd9996e24bc43c0fc.png"
        alt="cookie"
        onClick={props.onClick}
        onMouseDown={props.onMouseDown}
        onAnimationEnd={props.onAnimationEnd}
        className={`cookiePicture ${props.cookieClickedClassName}`}
      />
    </div>
  );
}
