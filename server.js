// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

var express = require("express");
var path = require("path");
var favicon = require('serve-favicon');  // Favicon to track my Icon

// ==============================================================================


// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server

// Create app and specify the port 
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing ====== Middle ware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/app/css"));
app.use(favicon(path.join(__dirname, "/app/public/my_ir_favicon.png")));

// ==============================================================================


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


// ================================================================================

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// Start the server to begin listening 

app.listen(PORT, function () {
    console.log(`Server Listening at http://localhost:${PORT}`)
});

// =============================================================================
