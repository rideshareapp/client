import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../libs/contextLib";

function Logout() {
    const history = useHistory();
    const { userIsAuthenticated } = useAppContext();

    function handleLogout() {
        useEffect(() => {
            fetch(`http://127.0.0.1:9000/users/logout`, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
            });
            userIsAuthenticated(false);
            history.push("/login");
        }, []);
    }

    return (
        <>{handleLogout()}</>
    );
}

export default Logout;
