import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./nav.css";

function displayGreeting(nameObj) {
  if (nameObj.firstname) {
    return (
      <li className="nav-item text-white nav-link pr-5">
        <h4>
          <strong>Greetings, {nameObj.firstname}!</strong>
        </h4>
      </li>
    );
  }
}

class Navbar extends Component {
  redirect = () => {
    console.log("Callback function hit");
    this.props.history.push("/");
  };

  render() {
    return (
      <nav style={{ marginLeft: 0, marginRight: 0 }}>
        <div className="row">
          <div className="col-sm top">
            <h1>
              <a className="font" href="/">
                Submarine
              </a>
            </h1>
          </div>
          <div className="col-sm top">
            <h3>{displayGreeting(this.props)}</h3>
          </div>
          <div className="col-sm top">
            <button className="buttons">
              <a href="/main" title="Title 1">
                Subscriptions
              </a>
            </button>
            <button className="buttons">
              <a href="/stats" title="Title 2">
                Statistics
              </a>
            </button>
            <button
              className="buttons"
              onClick={event => this.props.handleLogout(event, this.redirect)}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
