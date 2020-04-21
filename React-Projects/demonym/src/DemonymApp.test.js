import React from "react";
import DemonymApp from "./DemonymApp";
import ReactDOM from "react-dom";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<DemonymApp />, div);
    ReactDOM.unmountComponentAtNode(div);
});
