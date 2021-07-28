import React, { useState } from "react";
import styles from "./MainAppGrid.module.css";
import { Navigation } from "../../components";

function MainAppGrid(props) {
    const [expand, setExpand] = useState(true);
    // TODO: Fix CSS to display grid properly at 10% on medium
    return (
        <div className={`${expand ? styles.wrapperExpanded : styles.wrapperCollapsed}`}>
            <div className={styles.navigation}>
                <Navigation expand={expand} setExpand={setExpand} />
            </div>
            <div className={styles.mainContent}>
                {props.content}
            </div>
        </div>
    );
}

export default MainAppGrid;
