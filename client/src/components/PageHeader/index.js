import React from "react";
import "./style.css";

function PageHeader(props) {
  return (
    <div className="row justify-content-center">
      <div className="header-font header-div ">{props.headerText}</div>
    </div>
  );
}

export default PageHeader;
