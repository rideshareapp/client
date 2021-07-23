/* eslint-disable react/prop-types */
import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">Rideshareapp</Link>
                    <div>
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item  ${props.location.pathname === "/page2" ? "active" : ""}`}>
                                <Link className="nav-link" to="/page">Page2</Link>
                            </li>
                            <li className={`nav-item  ${props.location.pathname === "/logout" ? "active" : ""}`}>
                                <Link className="nav-link" to="/logout">Logout</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navigation);