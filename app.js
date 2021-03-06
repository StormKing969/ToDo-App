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
    content: String,
    checked: Boolean
};

const Item = mongoose.model("Item", itemsSchema);

// ==================== Schema Section End ========================

// ==================== Get/Post Section Start ========================

app.get("/", function(req, res) {
    function displayList() {
        Item.find({}, function(err, itemsFound) {
            if(!err) {
                Item.find({checked: false}, function(err, activeitemsFound) {
                    if(!err) {
                        res.render("list", {
                            itemList: itemsFound,
                            activeItemsLeft: activeitemsFound.length
                        });  
                    } else {
                        return console.log(err);
                    }
                })
            } else {
                console.log(err);
            }
        })
    }

    setTimeout(displayList, 100)
})

app.get("/active", function(req, res) {
    function displayList() {
        Item.find({checked: false}, function(err, activeitemsFound) {
            if(!err) {
                res.render("list", {
                    itemList: activeitemsFound,
                    activeItemsLeft: activeitemsFound.length
                });  
            } else {
                return console.log(err);
            }
        })    
    }
    

    setTimeout(displayList, 100)
})

app.get("/completed", function(req, res) {
    function displayList() {
        Item.find({}, function(err, itemsFound) {
            if(!err) {
                Item.find({checked: true}, function(err, completeditemsFound) {
                    if(!err) {
                        res.render("list", {
                            itemList: completeditemsFound,
                            activeItemsLeft: (itemsFound.length - completeditemsFound.length)
                        });  
                    } else {
                        return console.log(err);
                    }
                })
            } else {
                console.log(err);
            }
        })
    }

    setTimeout(displayList, 100)
})

app.post("/", function(req, res) {
    const item = req.body.userInput;
    
    updateItemList(item).save();
    // When post, save the value in variable then send to the "get"
    res.redirect("/");
})

app.post("/update", function(req, res) {
    const completedItem = req.body.completedItemID;
    
    Item.findOne(
        {_id: completedItem},
        function(err, item) {
            if(!err) {
                if(item.checked === false) {
                    checkItem(completedItem, true);
                } else {
                    checkItem(completedItem, false);
                }
            }
        }
    )

    // // When post, save the value in variable then send to the "get"
    res.redirect("/");
})

app.post("/clear", function(req, res) {
    deleteAllItems(true)
    
    // When post, save the value in variable then send to the "get"
    res.redirect("/");
})

app.post("/delete", function(req, res) {
    const item_id = req.body.itemID;
    
    deleteItem(item_id)
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
        content: userInput,
        checked: false
    });

    return item;
}

function checkItem(checkedItemID, state) {
    Item.findOneAndUpdate(
        {_id: checkedItemID}, // Filter
        {checked: state},      // Updated item
        function(err, itemsFound) {
            if(!err) {
                console.log("Update was successful");
            } else {
                console.log(err);
            }
        }
    );
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

function deleteAllItems(condition) {
    Item.deleteMany(
        {checked: condition},
        function(err, foundItems) {
            if(!err) {
                console.log("Removal was successful");
            } else {
                console.log(err);
            }
        }
    )
}

// ==================== Sub Function End ========================