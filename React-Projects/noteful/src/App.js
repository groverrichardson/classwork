import React, { Component } from "react";
import "./App.css";
// import Main from "./Main";
// import Sidebar from "./Main";
// import Header from "./Header";
// import Store from "./Store";
import { Route, Switch, Link } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Link to={"/"}>Noteful</Link>
            </div>
        );
    }
}

export default App;
