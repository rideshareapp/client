import React, { useEffect, useState } from "react";
import styles from "./EventCard.module.css";

export default function EventCard(props) {
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    // TODO: Allow wysiwyg functionality for description

    useEffect(() => {
        // let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let dateTimeString = new Date(props.date);
        
        setDate(`${dateTimeString.toDateString()}`);
        setTime(dateTimeString.toLocaleTimeString());
    }, [props.date]);

    return (
        <div className={styles.wrapper}>
            <h1>{props.event}</h1>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p>{props.location}</p>
            <p>{date}</p>
            <p>{props.include_time ? time : ""}</p>
        </div>
    );
}