/* eslint-disable react/prop-types */
import React from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation(props) {
    return (
        // <div className="navigation">
        //     <nav className="navbar navbar-expand navbar-dark bg-dark">
        //         <div className="container">
        //             <Link className="navbar-brand" to="/">Rideshareapp</Link>
        //             <div>
        //                 <ul className="navbar-nav ml-auto">
        //                     <li className={`nav-item  ${props.location.pathname === "/page2" ? "active" : ""}`}>
        //                         <Link className="nav-link" to="/page">Page2</Link>
        //                     </li>
        //                     <li className={`nav-item  ${props.location.pathname === "/logout" ? "active" : ""}`}>
        //                         <Link className="nav-link" to="/logout">Logout</Link>
        //                     </li>

        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </div>

        <aside className="sidebar">
            <nav className={styles.navbar}>
                <ul className={styles.list}>
                    <li className={`${props.location.pathname === "/events" ? "active" : ""}`}>
                        <Link className="nav-link" to="/events">Events</Link>
                    </li>
                    <li className={`${props.location.pathname === "/requests" ? "active" : ""}`}>
                        <Link className="nav-link" to="/requests">Requests</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default withRouter(Navigation);