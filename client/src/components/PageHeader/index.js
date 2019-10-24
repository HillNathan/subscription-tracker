import React from "react";
import "./style.css"

function PageHeader(props) {
    return(
        <div className = "row justify-content-center">
            <div className = "col-4 text-center ">
                <div className = "header-font header-div">
                    {props.headerText}
                </div>
            </div>
        </div>
    )
}

export default PageHeader;