import React from "react";
import List from "./List";
import "./App.css";
import Store from "./Store";

class App extends React.Component {
    constructor() {
        super();
        this.state = { Store };
    }

    deleteCard() {
        console.log("You can delete!");
    }

    addRandom() {
        console.log("You can add!");
    }

    render() {
        return (
            <div className="App">
                <List
                    data={this.state.cardData}
                    addRandom={this.addRandom}
                    deleteCard={this.deleteCard}
                />
            </div>
        );
    }
}

export default App;
