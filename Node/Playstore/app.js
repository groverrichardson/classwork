const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("common"));

app.get("/apps", (req, res) => {
    res.send("This works!");
    //return the complete list of apps in the playstore.js
});

module.exports = app;
