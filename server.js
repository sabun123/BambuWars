/*
    Due to the time constraint I'm only utilizing ExpressJS as the production server.
*/
var express = require('express');
var path = require('path');
var app = express(),
    DIST_DIR = path.join(__dirname, "dist"),
    HTML_FILE = path.join(DIST_DIR, "index.html");

// Tell Express to use the bundled files
app.use(express.static(DIST_DIR));

// Entry point for SPA, any and all requests point to this file
app.get("*", (req,res) => res.sendFile(HTML_FILE));

console.log("ExpressJS server is now listening on port 3000")
console.log("Open a browser and enter http://localhost:3000 to access this server")
app.listen(3000);