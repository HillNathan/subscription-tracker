import React from "react";
import "./style.css";
import SubLogo from "./yellowSub.png";
import SubLogoAlt from "./yellowSubAlt.png";

function Logo() {
  return (
    <div>
      <div className="subLogo">
        <img src={SubLogo} alt="sublogo"></img>
      </div>
      <div className="subLogoAlt">
        <img src={SubLogoAlt} alt="sublogoAlt"></img>
      </div>
    </div>
  );
}

export default Logo;
