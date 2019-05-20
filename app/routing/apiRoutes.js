// ===============================================================================
// LOAD DATA
// We are going to need the data friends.js to make the calculations here 

var friends = require("../data/friends");

// ===============================================================================



// ===============================================================================

// HANDLE THE POST REQUEST AND DO CALCULATION TO RETURN AN OBJECT

// Create the function that will handle the post and return the response to the user
module.exports = function (app) {
    // This is where the post request is being handled
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newFriend = req.body;
        // console.log(newFriend);

        // We Crate a new array that will contain  the results of all the scores calculated
        const resultsArr = [];

        // We loop trough the array of scores from or friends that we imported as well as pur newly created frend
        for (let i = 0; i < friends.length; i++) {
            let difference = 0;
            for (let j = 0; j < newFriend.scores.length; j++) {
                difference += Math.abs(parseFloat(friends[i].scores[j]) - parseFloat(newFriend.scores[j]));

            }
            resultsArr[i] = difference;
        }

        let friendIndex = resultsArr.indexOf(Math.min.apply(Math, resultsArr));

        friends.push(newFriend);

        res.json(friends[friendIndex]);
    });
};

// ===============================================================================