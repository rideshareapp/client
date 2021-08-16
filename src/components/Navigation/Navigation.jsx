import React from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "./Navigation.module.css";
import arrowRight from "../../assets/icons/arrow-bar-right.svg";
import arrowLeft from "../../assets/icons/arrow-bar-left.svg";
import eventsIcon from "../../assets/icons/calendar-check.svg";
import eventsIconSel from "../../assets/icons/calendar-check-fill.svg";
import requestsIcon from "../../assets/icons/chat-square-quote.svg";
import requestsIconSel from "../../assets/icons/chat-square-quote-fill.svg";
import logout from "../../assets/icons/box-arrow-right.svg";
import settings from "../../assets/icons/gear.svg";
import settingsSel from "../../assets/icons/gear-fill.svg";
import logo from "../../assets/icons/logo.png";

export default withRouter(function Navigation(props) {

    function handleExpand() {
        props.setExpand(!props.expand);
        window.localStorage.setItem('expand', !props.expand);
    }

    function setNav() {
        return props.expand ? styles.navExpanded : styles.navCollapsed;
    }

    function setIcon(path, icon, iconSel, title) {
        const src = props.location.pathname === `/${path}` ? iconSel : icon;
        return <img src={src} alt={title} title={title} className={styles.icon} />;
    }

    function setActive(path) {
        return props.location.pathname === `/${path}` ? styles.active : "";
    }

    return (
        <div className={`${styles.sidebar} ${setNav()}`}>
            <div className={styles.logo}>
                {props.expand ? <div><img src={logo}/><h1>Rideshareapp</h1></div> : <img src={logo}/>}
            </div>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={`${setActive("events")} ${styles.listItem}`}>
                        <Link to="/events">{setIcon("events", eventsIcon, eventsIconSel, "Events")}{props.expand ? " Events" : ""}</Link>
                    </li>
                    <li className={`${setActive("requests")} ${styles.listItem}`}>
                        <Link to="/requests">{setIcon("requests", requestsIcon, requestsIconSel, "Requests")}{props.expand ? " Requests" : ""}</Link>
                    </li>
                    <li className={`${setActive("settings")} ${styles.listItem}`}>
                        <Link to="/settings">{setIcon("settings", settings, settingsSel, "Settings")}{props.expand ? " Settings" : ""}</Link>
                    </li>
                    <li className={`${setActive("logout")} ${styles.listItem}`}>
                        <Link to="/logout">{setIcon("logout", logout, logout, "Logout")}{props.expand ? " Logout" : ""}</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.collapseExpandButton}>
                <img style={{ cursor: "pointer" }} onClick={handleExpand} src={props.expand ? arrowLeft : arrowRight} />
            </div>
        </div>
    );
});