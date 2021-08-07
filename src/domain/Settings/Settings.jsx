import React, { useEffect, useState } from "react";
import { MainAppGrid } from "../../components";
import { useAppContext } from "../../libs/contextLib";
import HandleAuth from "../../libs/authLib";

export default function Settings() {
    document.title = "Rideshareapp | Settings";
    const { userIsAuthenticated } = useAppContext();
    const [user, setUser] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                await HandleAuth(userIsAuthenticated);
                const userDataRes = await fetch('http://127.0.0.1:9000/users/profile', {
                    method: 'GET',
                    mode: 'cors',
                    credentials: 'include',
                });
                if (userDataRes.ok) {
                    // console.log(await userDataRes.json());
                    const userData = await userDataRes.json();
                    setUser(userData.details.user_info);
                }
            } catch (err) {
                alert(err);
            }
        }
        fetchData();
    }, [userIsAuthenticated]);

    let content =
        <div className="settings">
            <div>
                <h1>Settings</h1>
                <p>First: {user.first}</p>
                <p>Last: {user.last}</p>
                <p>Phone: {user.phone}</p>
                <p>Email: {user.email}</p>
            </div>
        </div>;

    return (
        <MainAppGrid content={content} />
    );
}