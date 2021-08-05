import React, { useEffect, useState } from "react";
import styles from "./MainAppGrid.module.css";
import { Navigation } from "../../components";

export default function MainAppGrid(props) {

    function getExpandSession() {
        try {
            return JSON.parse(window.localStorage.getItem('expand').toLowerCase());
        } catch (err) {
            return true;
        }
    }

    const [expand, setExpand] = useState(getExpandSession());
    useEffect(() => {
        setExpand(getExpandSession());
    }, []);
    return (
        <div className={`${expand ? styles.wrapperExpanded : styles.wrapperCollapsed} ${styles.wrapper}`}>
            <div className={`${expand ? styles.navigationExp : styles.navigationCol} ${styles.navigation}`}>
                <Navigation expand={expand} setExpand={setExpand} />
            </div>
            <div className={styles.mainContent}>
                {props.content}
            </div>
        </div>
    );
}