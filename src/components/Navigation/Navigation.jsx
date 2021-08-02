/* eslint-disable react/prop-types */
import React from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "./Navigation.module.css";
import arrowRight from "../../assets/icons/arrow-bar-right.svg";
import arrowLeft from "../../assets/icons/arrow-bar-left.svg";

function Navigation(props) {


    function handleExpand() {
        props.setExpand(!props.expand);
    }

    function setNav() {
        return props.expand ? styles.navExpanded : styles.navCollapsed;
    }
    return (
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
                <img style={{ cursor: "pointer" }} onClick={handleExpand} src={props.expand ? arrowLeft : arrowRight} />
            </div>
        </div>
    );
}

export default withRouter(Navigation);