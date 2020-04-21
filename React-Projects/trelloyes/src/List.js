import React from "react";
import Card from "./Card";

function List(props) {
    const cards = props.data.map((card, i) => (
        <Card key={i} deleteCard={props.deleteCard} />
    ));
    return (
        <div className="List-header">
            <button onClick={props.addRandom}>Add Random</button>
            {cards}
        </div>
    );
}

export default List;
