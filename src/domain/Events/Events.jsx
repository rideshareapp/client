import React, { useEffect, useState } from "react";
import { MainAppGrid, EventCard } from "../../components";
import styles from "./Events.module.css";

function Dashboard() {
    document.title = "Rideshareapp | Events";

    const [data, setData] = useState([]);

    useEffect(async () => {
        const res = await fetch(`http://127.0.0.1:9000/events/getAll`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include'
        });
        const res1 = await res.json();
        setData(res1.details.eventList);
    }, []);

    // TODO: Authentication middleware for every fetch call

    let content =
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h1>Events</h1>
            </div>
            <div className={styles.list}>
                {data.map((items, i) => <EventCard event={items.event_name} date={items.event_date} key={i} />)}
            </div>
        </div>;

    return (
        <MainAppGrid content={content} />
    );
}

export default Dashboard;