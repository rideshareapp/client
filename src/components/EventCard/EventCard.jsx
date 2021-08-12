import React, { useEffect, useState } from "react";
import styles from "./EventCard.module.css";
import geo from "../../assets/icons/geo-alt.svg";

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
            <div className={styles.dateTime}>
                <div className={styles.date}>{date}</div>
                <p>{props.include_time ? time : null}</p>
            </div>
            <div className={styles.info}>
                <h1>{props.event}</h1>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <p><img src={geo} alt="Location" /> {props.location}</p>
            </div>
        </div>
    );
}