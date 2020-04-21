import React, { Component } from "react";
import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import HomePage from "./HomePage/HomePage";
import BioPage from "./BioPage/BioPage";
import MenuPage from "./MenuPage/MenuPage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import "./App.css";
import { Route, Switch } from "react-router-dom";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <nav>
                    <Nav />
                </nav>
                <header>
                    <Header />
                </header>
                <main>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/bio" component={BioPage} />
                        <Route exact path="/menu" component={MenuPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}
