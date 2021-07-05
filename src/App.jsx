import React, { Component } from "react";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    async login() {
        const res = await fetch('http://127.0.0.1:9000/users/login', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: "test5@email", password: "password"})
        })
        const data = await res.json();
        console.log(res);
        console.log(data.details.token);
        // document.cookie = `token=${data.details.token};httpOnly:True`
        // document.cookie(res.json().details);
        
    }

    render() {
        console.log("test");
        return (
            <div className="App">
                <button onClick={this.login}>testButton</button>
            </div>
        );
    }
}

export default App;