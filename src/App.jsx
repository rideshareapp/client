import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Login, Logout, Signup, NotFound, Events, Requests, Settings } from "./domain";
import { AppContext } from "./libs/contextLib";
import HandleAuth from "./libs/authLib";
import "./App.css";


function App() {
    const [isAuthenticated, userIsAuthenticated] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(true);

    useEffect(() => {
        async function onLoad() {
            await HandleAuth(userIsAuthenticated);
            setIsAuthenticating(false);
        }
        onLoad();
    }, []);

    return (
        !isAuthenticating && (
            <div className="App">
                <AppContext.Provider value={{ isAuthenticated, userIsAuthenticated }}>
                    <Router>
                        <Switch>
                            <Route path="/" exact render={() => isAuthenticated ? <Redirect to="/events" /> : <Redirect to="/login" />} />
                            <Route path="/login" exact render={() => isAuthenticated ? <Redirect push to="/" /> : <Login />} />
                            <Route path="/signup" exact render={() => isAuthenticated ? <Redirect push to="/" /> : <Signup />} />

                            <Route path="/events" exact render={() => isAuthenticated ? <Events /> : <Redirect push to="/" />} />
                            <Route path="/requests" exact render={() => isAuthenticated ? <Requests /> : <Redirect push to="/" />} />
                            <Route path="/settings" exact render={() => isAuthenticated ? <Settings /> : <Redirect push to="/" />} />
                            <Route path="/logout" exact render={() => isAuthenticated ? <Logout /> : <Redirect push to="/" />} />
                            <Route component={NotFound} />

                        </Switch>
                    </Router>
                </AppContext.Provider>
            </div>
        )
    );
}

export default App;