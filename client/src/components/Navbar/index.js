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
        <div className="row">
          <div className="col center-mobile">
              {/* <a className="font" href="/"> */}
              <Link to={"/"} label={"Home"} >
                Submarine
              </Link>
              {/* </a> */}
          </div>
          <div className="button-holder">
          {console.log(this.props.location)}
            <button
              className="nav-buttons"
              onClick={event => this.props.handleLogout(event, this.redirect)}
            >
              Logout
            </button>
            { (this.props.page === "stats") ?
              // <a href="/main" title="Subscriptions">
              <Link to={"/main"} label={"Subscriptions"}>
                <button className="nav-buttons">
                  Subscriptions
                </button>
              </Link>
              // </a>
              :
              // <a href="/stats" title="Statistics">
              <Link to={"/stats"} label={"Statistics"}>
                <button className="nav-buttons">
                  Statistics
                </button>
              </Link>  
              // </a>
            }
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
