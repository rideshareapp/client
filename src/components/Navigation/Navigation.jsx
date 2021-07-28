/* eslint-disable react/prop-types */
import React from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation(props) {


    function handleExpand() {
        props.setExpand(!props.expand);
    }

    function setNav() {
        return props.expand ? styles.navExpanded : styles.navCollapsed;
    }
    // TODO: Let links take 100% of width
    // TODO: Transition when switching sidebar sizes
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

        <div className={`${styles.sidebar} ${setNav()}`}>
            <div className={styles.logo}>
                <h1>Rideshareapp</h1>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={`${props.location.pathname === "/events" ? styles.active : ""} ${styles.listItem}`}>
                        <Link to="/events">Events</Link>
                    </li>
                    <li className={`${props.location.pathname === "/requests" ? styles.active : ""} ${styles.listItem}`}>
                        <Link to="/requests">Requests</Link>
                    </li>
                    <li className={`${props.location.pathname === "/logout" ? styles.active : ""} ${styles.listItem}`}>
                        <Link to="/logout">Logout</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.collapseExpandButton}>
                <span style={{cursor: "pointer"}} onClick={handleExpand}>{props.expand ? "←" : "→"}</span>
            </div>
        </div>
    );
}

export default withRouter(Navigation);