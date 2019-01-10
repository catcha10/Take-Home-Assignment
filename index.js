// Import express
let express = require('express');

// Initialize the app
let app = express();

// Import routes
let apiRoutes = require("./api-routes");
// get the source from http
var source = require('./source');
var db = require('./db');

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', apiRoutes); //(req, res) => console.log("res")) //res.send(source.parsedData));

// Use Api routes in the App
app.use('/rates', apiRoutes);

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running currency on port " + port);
});

