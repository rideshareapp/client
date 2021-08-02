import React, { useState } from "react";
import styles from "./MainAppGrid.module.css";
import { Navigation } from "../../components";

function MainAppGrid(props) {
    const [expand, setExpand] = useState(true);
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

export default MainAppGrid;
