import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./nav.css";

function displayGreeting(nameObj) {
    if (nameObj.firstname) {
        return (
            <li className="nav-item text-white nav-link pr-5">
                <h4><strong>Greetings, {nameObj.firstname}!</strong></h4>
            </li>
        )
    }
}



class Navbar extends Component {

    redirect = () => {
        console.log("Callback function hit")
        this.props.history.push("/");
    }


    render() {
        return (
            <nav className="navbar" style={{ marginLeft: 0, marginRight: 0 }}>
                <h1><a className="navbar-brand font" href="/">Submarine</a></h1>
                <div>
                <div className='buttons'>
									<a href='#' title='Title 1'>Subscriptions
									</a>
									<a href='#' title='Title 2'>Statistics
									</a>
									<a href='#' title='Title 3'>Logout
									</a>
                </div>
                    <ul className="nav justify-content-end">
                        {displayGreeting(this.props)}
                        <li className="nav-item">
                            <a className="nav-link" href="/main">
                                <button className="btn btn-secondary">Subscriptions</button>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/stats">
                                <button className="btn btn-secondary">Statistics</button>
                            </a>
                        </li>
                        <li className="nav-item">
                            <span className = "nav-link text-white" >
                                <button className="btn btn-secondary" 
                                        onClick={(event) => this.props.handleLogout(event, this.redirect)} >
                                Logout</button>
                            </span>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)