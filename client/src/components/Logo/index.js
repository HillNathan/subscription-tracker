import React from "react";
import "./style.css";
import SubLogo from "./yellowSub.png";
import SubLogoAlt from "./yellowSubAlt.png";

function Logo() {
  return (
    <div className="logoHolder">
      <div className="subLogo">
        <img src={SubLogo} alt="sublogo" style={{width: '13rem'}}></img>
      </div>
      <div className="subLogoAlt">
        <img src={SubLogoAlt} alt="sublogoAlt" style={{width: '13rem'}}></img>
      </div>
    </div>
  );
}

export default Logo;
