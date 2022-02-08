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

// ==================== Schema  Section Start ========================

const itemsSchema = {
    name: String,
    checked: Boolean
};

const Item = mongoose.model("Item", itemsSchema);

// ==================== Schema Section End ========================

// ==================== Get/Post Section Start ========================

app.get("/", function(req, res) {
    Item.find({}, function(err, itemsFound) {
        if(!err) {
            res.render("list", {itemList: itemsFound});
        } else {
            console.log(err);
        }
    })
})

app.post("/", function(req, res) {
    const item = req.body.newItem;

    updateItemList(item).save();
    // When post, save the value in variable then send to the "get"
    res.redirect("/");
})

app.post("/delete", function(req, res) {
    const deleteItemId = req.body.deleteItem;

    deleteItem(deleteItemId);

    // When post, save the value in variable then send to the "get"
    res.redirect("/");
})

// ==================== Get/Post Section End ========================

// ==================== Main Function Start ========================
app.listen(port, function() {
    console.log("Server is connected to port " + port);
});
// ==================== Main Function End ========================

// ==================== Sub Function Start ========================

function updateItemList(userInput) {
    const item = new Item({
        name: userInput,
        checked: false
    });

    return item;
}

function deleteItem(item_id) {
    Item.findByIdAndRemove(item_id, function(err) {
        if(!err) {
            console.log("Removal was successful");
        } else {
            console.log(err);
        }
    })
}


// ==================== Sub Function End ========================