import React from "react";
import "./style.css";

function cb() {
  document.getElementById("name-input").value = "";
  document.getElementById("cost-input").value = "";
  document.getElementById("frequency-input").value = "";
}

function SubForm(props) {
  return (
    <div className="row">
      <div className="col-sm subscription-page-input-fields">
        <form id="sub-form">
          <div className="form-group cost">
            <div className="row cost">
              <div className="col-sm">
                <label htmlFor="name">Subscription Name</label>
                <input
                  className="form-control form-control-lg"
                  id="name-input"
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="col-sm ">
                <label htmlFor="cost">Cost (USD):</label>
                <input
                  className="form-control form-control-lg"
                  id="cost-input"
                ></input>
              </div>
              <div className="col-sm">
                <label htmlFor="frequency">Frequency</label>
                <select
                  className="form-control form-control-lg"
                  id="frequency-input"
                >
                  <option>Monthly</option>
                  <option>Yearly</option>
                  <option>Weekly</option>
                  <option>Daily</option>
                </select>
              </div>
            </div>
          </div>
          <button
            onClick={event =>
              props.addSub(event, cb, {
                name: document.getElementById("name-input").value,
                cost: document.getElementById("cost-input").value,
                frequency: document.getElementById("frequency-input").value
              })
            }
            className="subscription-page-button"
            id="form-submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SubForm;
