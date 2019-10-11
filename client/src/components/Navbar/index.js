import React from "react";


function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand text-white" href="/">Submarine</a>
            <div>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/main">Subscriptions</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/stats">Statistics</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar