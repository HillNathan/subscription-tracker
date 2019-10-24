import React from "react";
import "./style.css"

function cb () {
    console.log("Callback hit")
    document.getElementById("name-input").value = "";
    document.getElementById("cost-input").value = "";
    document.getElementById("frequency-input").value = ""
}

function SubForm(props) {
    return (
        <div className = "row">
            <div className="col">
                <form id="sub-form">
                    <div className="form-group">
                        <label htmlFor="name">Subscription Name</label>
                        <input className="form-control form-control-lg" id="name-input"></input>
                    </div>
                    <div className="form-group">
                        <div className = "row" >
                            <div className = "col-6">
                                <label htmlFor="cost">Cost (USD):</label>
                                <input className="form-control form-control-lg" id="cost-input"></input>
                             </div>
                            <div className = "col">
                                <label htmlFor="frequency">Frequency</label>
                                <select className="form-control form-control-lg" id="frequency-input">
                                    <option>Daily</option>
                                    <option>Weekly</option>
                                    <option>Monthly</option>
                                    <option>Yearly</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button onClick={(event) => props.addSub(event, cb, 
                        { 
                            name: document.getElementById("name-input").value,
                            cost: document.getElementById("cost-input").value,
                            frequency: document.getElementById("frequency-input").value 
                        })}
                        className="Formfield__Button" 
                        id="form-submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SubForm