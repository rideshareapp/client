import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../libs/contextLib";

export default function Logout() {
    const history = useHistory();
    const { userIsAuthenticated } = useAppContext();

    useEffect(() => {
        fetch(`http://127.0.0.1:9000/auth/refresh/logout`, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
        });
        userIsAuthenticated(false);
        history.push("/login");
    }, [userIsAuthenticated, history]);

    return (
        null
    );
}