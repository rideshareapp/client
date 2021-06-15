import React, { Component } from "react";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        console.log("test");
        return (
            <div className="App">
                <p>test</p>
            </div>
        );
    }
}

export default App;