import React, { useEffect, useState } from "react";
import styles from "./EventModal.module.css";
import geo from "../../assets/icons/geo-alt.svg";

export default function EventModal(props) {
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [time, setTime] = useState();


    useEffect(() => {
        // let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let dateTimeString = new Date(props.date);
        setMonth(`${dateTimeString.toLocaleDateString('default', { month: 'short' }).toLocaleUpperCase()}`);
        setDay(`${dateTimeString.toLocaleDateString('default', { day: 'numeric' })}`);
        setTime(dateTimeString.toLocaleTimeString('default', { hour: 'numeric', minute: '2-digit' }));
    }, [props.date]);

    // function handleKeyDown(event) {
    //     if (event.keyCode === 27) {
    //         console.log("keypress");
    //     }
    // }

    return (
        <div tabIndex="0" className={styles.box} onClick={props.onClick}>
            <div className={styles.wrapper}>
                <div className={styles.dateTime}>
                    <div className={styles.date}>
                        <div className={styles.month}>{month}</div>
                        <div className={styles.day}>{day}</div>
                    </div>
                    <div className={styles.time}>
                        {props.include_time ? <time>{time}</time> : null}
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.glance}>
                        <h1>{props.event}</h1>
                        <h2>{props.name}</h2>
                        <h3><img src={geo} alt="Location" /> {props.location}</h3>
                    </div>
                    <p className={styles.description}>{props.description}</p>
                </div>
                <button onClick={props.onClick}>Exit</button>
            </div>
        </div>
    );
}