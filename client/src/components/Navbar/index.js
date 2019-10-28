import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./style.css";

class Navbar extends Component {
  redirect = () => {
    console.log("Callback function hit");
    this.props.history.push("/");
  };

  render() {
    return (
      <nav style={{ marginLeft: 0, marginRight: 0 }}>
        <div className="row justify-content-between">
          <div className="col-lg-3 col-md-4">
            <h1>
              <a className="font" href="/">
                Submarine
              </a>
            </h1>
          </div>
          <div className="col-xl-6 col-lg-8">
          {console.log(this.props.location)}
            <button
              className="nav-buttons"
              onClick={event => this.props.handleLogout(event, this.redirect)}
            >
              Logout
            </button>
            { (this.props.page === "stats") ?
              <a href="/main" title="Subscriptions">
                <button className="nav-buttons">
                  Subscriptions
                </button>
              </a>
              :
              <a href="/stats" title="Statistics">
                <button className="nav-buttons">
                  Statistics
                </button>
              </a>
            }
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
