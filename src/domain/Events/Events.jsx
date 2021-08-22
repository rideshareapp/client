import React, { useEffect, useState } from "react";
import { MainAppGrid, EventCard, EventModal } from "../../components";
import styles from "./Events.module.css";
import { useAppContext } from "../../libs/contextLib";
import HandleAuth from "../../libs/authLib";

export default function Events() {
    document.title = "Rideshareapp | Events";
    const { userIsAuthenticated } = useAppContext();
    const [eventList, setEventList] = useState([]);
    const [active, setActive] = useState(null);
    // TODO: Add sort and filter states

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
                    const eventListData = (await eventListRes.json()).details.eventList;
                    eventListData.sort((a, b) => { return new Date(a.event_date) - new Date(b.event_date); });
                    setEventList(eventListData);
                }
            }
            catch (err) {
                alert(err);
            }
        }
        fetchData();
    }, [userIsAuthenticated]);

    function handleClick(i) {
        setActive(eventList[i]);
    }

    let content =
        <div className={styles.wrapper}>
            {active !== null ? <EventModal /> : null}
            <div className={styles.title}>
                <h1>Events</h1>
            </div>
            <div className={styles.list}>
                {eventList.length > 0 ?
                    eventList.map((items, i) => (
                        <EventCard onClick={() => handleClick(i)} id={items.id} name={items.org_name} event={items.event_name} description={items.event_description} location={items.event_location} date={items.event_date} include_time={items.include_time} key={i} />
                    ))
                    :
                    <div>No events found!</div>
                }
            </div>
        </div>;

    return (
        <MainAppGrid content={content} />
    );
}