"use strict";
// Setup Express
const express = require("express");
const app = express();
app.use(express.static("public"));
// Setup Body Parser
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
// Setup Handlebars Engine
const exphandbars = require("express-handlebars");
app.engine("handlebars", exphandbars({defaultLayout: "main"}));
app.set("view engine", "handlebars");
// Import Routes
const routes = require("./controllers/controller");
app.use("/", routes);
// Setup Database
const PORT = process.env.PORT || 8080;

    app.listen(PORT, () => console.log(`Server Listening on Port ${PORT}`))
