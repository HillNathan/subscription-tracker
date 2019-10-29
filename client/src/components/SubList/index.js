import React from "react";
import "./style.css"
// let dummyData = require("../../test/dummyData.json");

function SubList(props) {
    return (
        <div className="row justify-content-center">
            <div className="col-md-10">
                <ul id="sub-list">
                    {props.subscriptions.map(data => {
                        return (
                            <li className="list-group-item" key={data._id}><strong>{data.name}</strong>
                            <i onClick={() => props.removeSub(data.name, data._id)} className="fas fa-minus-circle"></i>
                            <div className="details">${data.cost} {data.frequency}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div >
    )
}

export default SubList


