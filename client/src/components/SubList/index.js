import React from "react";
import "./style.css"
let dummyData = require("../../test/dummyData.json");

function SubList() {
    return (
        <div className="row d-flex justify-content-center">
            <div className="col-10">
                <div className="accordian" id="sub-list">
                    {dummyData.map(data => {
                        return (
                            <div className="card" key={data.id}>
                                <div className="card-header" id={"heading" + data.id}>
                                    <h2 className="mb-0">
                                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target={"#collapse" + data.id} aria-expanded="true" aria-controls={"#collapse" + data.id}>
                                            {data.name}
                                        </button>
                                    </h2>
                                </div>
                                <div id={"collapse" + data.id} className="collapse show" aria-labelledby={"heading" + data.id} data-parent="#sub-list">
                                    <div className="card-body">
                                        Price: {data.cost} per {data.frequency}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default SubList


