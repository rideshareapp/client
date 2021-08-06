import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useAppContext } from "../../libs/contextLib";

export default function Logout() {
    document.title = "Rideshareapp | Log Out";
    const { userIsAuthenticated } = useAppContext();

    useEffect(() => {
        document.cookie = "REFRESH_TOKEN_VALID=;max-age=0;";
        fetch(`http://127.0.0.1:9000/auth/refresh/logout`, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
        });
        userIsAuthenticated(false);
        return <Redirect to="/" />;
    }, [userIsAuthenticated]);

    return (
        null
    );
}