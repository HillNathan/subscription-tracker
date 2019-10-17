import React from "react";
import "./style.css"

function SubForm(props) {
    return (
            <div className="row d-flex justify-content-center">
                <div className="col-10">
                    <form id="sub-form">
                        <div className="form-group">
                            <label htmlFor="name">Subscription Name</label>
                            <input className="form-control form-control-lg" id="name-input"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cost">Cost (USD):</label>
                            <input className="form-control form-control-lg" id="cost-input"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="frequency">Frequency</label>
                            <select className="form-control form-control-lg" id="frequency-input">
                                <option>Daily</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                                <option>Yearly</option>
                            </select>
                        </div>
                        <button onClick={(event) => props.addSub(event, 
                            { 
                                name: document.getElementById("name-input").value,
                                cost: document.getElementById("cost-input").value,
                                frequency: document.getElementById("frequency-input").value 
                            })}
                            className="btn btn-dark" 
                            id="form-submit">Submit</button>
                    </form>
                </div>
            </div>
    )
}

export default SubForm