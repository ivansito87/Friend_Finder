// Dependencies
//=========-=-=-=-=-==--==-=--=-=-==-
var express = require("express");
var path = require("path");

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






/// Temp for friens
var friends = [
    {
        routeName: "yoda",
        name: "Yoda",
        role: "Jedi Master",
        age: 900,
        forcePoints: 2000
    },
    {
        routeName: "darthmaul",
        name: "Darth Maul",
        role: "Sith Lord",
        age: 200,
        forcePoints: 1200
    },
    {
        routeName: "obiwankenobi",
        name: "Obi Wan Kenobi",
        role: "Jedi Master",
        age: 55,
        forcePoints: 1350
    }
];