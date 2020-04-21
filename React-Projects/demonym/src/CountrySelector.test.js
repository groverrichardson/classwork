import React from "react";
import CountrySelector from "./CountrySelector";
import ReactDOM from "react-dom";

it("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CountrySelector />, div);
    ReactDOM.unmountComponentAtNode(div);
});
