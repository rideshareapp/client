import React from "react";
import styles from "./EventCard.module.css";

export default function EventCard(props) {

    return (
        <div className={styles.wrapper}>
            <p>{props.event}</p>
            <p>{props.date}</p>
        </div>
    );
}