import React, { useEffect, useState } from "react";
import { MainAppGrid, EventCard } from "../../components";
import styles from "./Events.module.css";
import { useAppContext } from "../../libs/contextLib";
import HandleAuth from "../../libs/authLib";

export default function Events() {
    document.title = "Rideshareapp | Events";
    const { userIsAuthenticated } = useAppContext();
    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                await HandleAuth(userIsAuthenticated);
                const eventListRes = await fetch(`http://127.0.0.1:9000/events/getAll`, {
                    method: 'GET',
                    mode: 'cors',
                    credentials: 'include'
                });
                if (eventListRes.ok) {
                    const eventListData = await eventListRes.json();
                    setEventList(eventListData.details.eventList);
                }
            }
            catch (err) {
                alert(err);
            }
        }
        fetchData();
    }, [userIsAuthenticated]);


    // TODO: Authentication middleware for every fetch call

    let content =
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h1>Events</h1>
            </div>
            <div className={styles.list}>
                {eventList.map((items, i) => <EventCard event={items.event_name} date={items.event_date} key={i} />)}
            </div>
        </div>;

    return (
        userIsAuthenticated && (
            <MainAppGrid content={content} />
        )
    );
}