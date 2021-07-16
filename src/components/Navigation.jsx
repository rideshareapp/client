/* eslint-disable react/prop-types */
import React from "react";
import { Link, withRouter } from "react-router-dom";

function isNotAuthNavigation(props) {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/login">Rideshareapp</Link>
                    <div>
                        <ul className="navbar-nav ml-auto">
                            {/* <li className={`nav-item  ${props.location.pathname === "/" ? "active" : ""}`}>
                                <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className={`nav-item  ${props.location.pathname === "/about" ? "active" : ""}`}>
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className={`nav-item  ${props.location.pathname === "/contact" ? "active" : ""}`}>
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li> */}

                            <li className={`nav-item  ${props.location.pathname === "/login" ? "active" : ""}`}>
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className={`nav-item  ${props.location.pathname === "/signup" ? "active" : ""}`}>
                                <Link className="nav-link" to="/signup">Signup</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

function isAuthNavigation(props) {
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

// export default withRouter(isAuthNavigation);
// export default withRouter(isNotAuthNavigation);
const isAuthNav = withRouter(isAuthNavigation);
const isNotAuthNav = withRouter(isNotAuthNavigation);
export { isAuthNav, isNotAuthNav };