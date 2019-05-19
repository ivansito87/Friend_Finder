// Dependencies
//=========-=-=-=-=-==--==-=--=-=-==-
var express = require("express");
var path = require("path");
var friends = require("./app/data/friends");
var fs = require("fs");

// =============== Set up Server
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing ====== middle ware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Start the server to begin listening =======
app.listen(PORT, function () { 
    console.log(`Server Listening at http://localhost:${PORT}`)
});

// Routes begin Routes to send the user first to the ajax page.
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html")); 
});

// Route to display the Survey file
app.get("/survey", function (req, res) { 
    res.sendFile(path.join(__dirname, "/app/public/survey.html"))
});

app.get("/api/friends", function (req, res) { 
    return res.json(friends);
});

 ////// Testing the  Funtional post
app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;

    // for (let i = 0; i < newFriend.scores.length; i++){
    //     newFriend.scores[i] = parseFloat(newFriend.scores[i])
    // }    
    console.log(newFriend);

    const resultsArr = [];

    for (let i = 0; i < friends.length; i++) {
        let difference = 0; 
        for (let j = 0; j < newFriend.scores.length; j++) {
            difference += Math.abs(parseFloat(friends[i].scores[j]) - parseFloat(newFriend.scores[j]));
            
        }
        resultsArr[i] = difference;
    }
    console.log(resultsArr);
    let friendIndex = resultsArr.indexOf(Math.min.apply(Math, resultsArr));

    console.log(friendIndex);
    // default friend match is the first friend but result will be whoever has the minimum difference in scores
    // var bestFriendIndex = 0;
    // var minimumDifference = 40;

    // // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
    // //  whatever the difference is, add to the total difference
    // for (var i = 0; i < friends.length; i++) {
    //     var totalDifference = 0;
    //     for (var j = 0; j < friends[i].scores.length; j++) {
    //         var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
    //         totalDifference += difference;
    //     }

    //     // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
    //     if (totalDifference < minimumDifference) {
    //         bestFriendIndex = i;
    //         minimumDifference = totalDifference;
    //     }
    // }

    // console.log(friends[bestFriendIndex]);

    friends.push(newFriend);

    res.json(friends[friendIndex]);
});















