// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var friends = require("../data/friends");


// ===============================================================================
// Routing

// Define the responses that will handle the html display ========================

module.exports = function (app) {

    // Respond with the html file
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //Respond with the html for survey
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });

    //Respond with the api call
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};

// ===============================================================================