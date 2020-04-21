import React from "react";

class Card extends React.Component {
    render() {
        return (
            <div className="Card button">
                <h3>This is a sample card</h3>
                <p>
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh, ut fermentum massa justo sit amet risus.
                </p>
                <button onClick={this.props.deleteCard}>Delete Card</button>
            </div>
        );
    }
}

Card.defaultProps = {};

export default Card;
