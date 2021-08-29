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
    // TODO: Add event modals to allow user to request a ride and provide geolocation and passenger information

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

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    function handleKeyDown(event) {
        if (event.key === "Escape") {
            setActive(null);
        }
    }
    function handleCardClick(i) {
        setActive(eventList[i]);
    }

    function handleModalExitClick(event) {
        if (event.target === event.currentTarget) {
            setActive(null);
        }
    }

    let content =
        <div className={styles.wrapper}>
            {active !== null ? <EventModal onClick={handleModalExitClick} name={active.org_name} event={active.event_name} description={active.event_description} location={active.event_location} date={active.event_date} include_time={active.include_time} /> : null}
            <div className={styles.title}>
                <h1>Events</h1>
            </div>
            <div className={styles.list}>
                {eventList.length > 0 ?
                    eventList.map((items, i) => (
                        <EventCard onClick={() => handleCardClick(i)} id={items.id} name={items.org_name} event={items.event_name} description={items.event_description} location={items.event_location} date={items.event_date} include_time={items.include_time} key={i} />
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