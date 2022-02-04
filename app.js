// ==================== Setup Section Start ========================
// Using .env file to store sensitive data
require("dotenv").config();

// Extracting the required information
const DB = process.env.DB_URL;

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const port = process.env.PORT || 3000;

const app = express();

// Needed to use EJS
app.set("view engine", "ejs");

// Needed to use "body"
app.use(bodyParser.urlencoded({extended: true}));
// Used to style the pages
app.use(express.static("public"))

// Create mongoose DB
mongoose.connect(DB);

// ==================== Setup Section End ========================

// ==================== Get/Post Section Start ========================

app.get("/", function(req, res) {
    res.render("list");
})

// ==================== Get/Post Section End ========================

// ==================== Main Function Start ========================
app.listen(port, function() {
    console.log("Server is connected to port " + port);
});
// ==================== Main Function End ========================