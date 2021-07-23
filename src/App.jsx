import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import { Navigation, Footer, Home, About, Contact } from "./components";
import { Navigation } from "./components";
import { Login, Logout, Signup, Dashboard, Page } from "./domain";
import { AppContext } from "./libs/contextLib";
import "./App.css";


function App() {
    const [isAuthenticated, userIsAuthenticated] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(true);

    useEffect(() => {
        onLoad();
    }, []);

    async function onLoad() {
        try {
            const res = await fetch(`http://127.0.0.1:9000/auth/validToken`, {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
            });
            if (res.status === 200) {
                userIsAuthenticated(true);
            } else if (res.status === 401) {
                const res = await fetch(`http://127.0.0.1:9000/auth/refresh`, {
                    method: 'POST',
                    mode: 'cors',
                    credentials: 'include'
                });
                if (res.status === 200) {
                    userIsAuthenticated(true);
                } else if (res.status === 401) {
                    userIsAuthenticated(false);
                }
            }
        }
        catch (err) {
            alert(err);
        }
        setIsAuthenticating(false);

    }
    return (
        !isAuthenticating && (
            <div className="App">
                <Router>
                    {isAuthenticated ? <Navigation /> : null}
                    <Switch>
                        <AppContext.Provider value={{ isAuthenticated, userIsAuthenticated }}>
                            <Route exact path="/">
                                {isAuthenticated ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
                            </Route>
                            <Route path="/login" exact component={() => isAuthenticated ? <Redirect to="/" /> : <Login />} />
                            <Route path="/signup" exact component={() => isAuthenticated ? <Redirect to="/" /> : <Signup />} />

                            <Route path="/dashboard" exact component={() => isAuthenticated ? <Dashboard /> : <Redirect to="/" />} />
                            <Route path="/logout" exact component={() => isAuthenticated ? <Logout /> : <Redirect to="/" />} />
                            <Route path="/page" exact component={() => isAuthenticated ? <Page /> : <Redirect to="/" />} />
                        </AppContext.Provider>

                    </Switch>
                </Router>
            </div>
        )
    );
}

export default App;