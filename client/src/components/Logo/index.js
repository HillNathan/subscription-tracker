import React from "react";
import "./style.css";
import SubLogo from "./yellowSub.png";

function Logo() {
  return (
		<div className="subLogo">
			<img src={SubLogo} alt="sublogo"></img>
		</div>
	)
}

export default Logo;