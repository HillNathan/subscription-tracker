import React from "react";

function displayGreeting(nameObj) {
    if (nameObj.firstname) {
        return (
            <li className="nav-item text-white nav-link pr-5">
                <h4><strong>Greetings, {nameObj.firstname}!</strong></h4>
            </li>
        )
    }
}

function Navbar(props) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand text-white" href="/">Submarine</a>
            <div>
                <ul className="nav justify-content-end">
                    {displayGreeting(props)}
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/main">Subscriptions</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/stats">Statistics</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/logout">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar