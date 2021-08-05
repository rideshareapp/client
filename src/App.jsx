import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Login, Logout, Signup, NotFound, Events, Requests } from "./domain";
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
                            <Route exact path="/">
                                {isAuthenticated ? <Redirect to="/events" /> : <Redirect to="/login" />}
                            </Route>
                            <Route path="/login" exact component={() => isAuthenticated ? <Redirect to="/" /> : <Login />} />
                            <Route path="/signup" exact component={() => isAuthenticated ? <Redirect to="/" /> : <Signup />} />

                            {/* <Route path="/dashboard" exact component={() => isAuthenticated ? <Dashboard /> : <Redirect to="/" />} /> */}
                            <Route path="/events" exact component={() => isAuthenticated ? <Events /> : <Redirect to="/" />} />
                            <Route path="/requests" exact component={() => isAuthenticated ? <Requests /> : <Redirect to="/" />} />
                            <Route path="/settings" exact component={() => isAuthenticated ? <Requests /> : <Redirect to="/" />} />
                            <Route path="/logout" exact component={() => isAuthenticated ? <Logout /> : <Redirect to="/" />} />
                            <Route component={NotFound} />

                        </Switch>
                    </Router>
                </AppContext.Provider>
            </div>
        )
    );
}

export default App;