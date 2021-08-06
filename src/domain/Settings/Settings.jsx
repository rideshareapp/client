import React, { useEffect } from "react";
import { MainAppGrid } from "../../components";
import { useAppContext } from "../../libs/contextLib";
import HandleAuth from "../../libs/authLib";

export default function Settings() {
    document.title = "Rideshareapp | Settings";
    const { userIsAuthenticated } = useAppContext();

    useEffect(()=> {
        async function fetchData() {
            try {
                await HandleAuth(userIsAuthenticated);
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
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry&apos;s standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                </p>
            </div>
        </div>;

    return (
        <MainAppGrid content={content} />
    );
}