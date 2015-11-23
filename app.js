var application_root = __dirname,
	path = require('path'),
	express = require('express');


// Create server
var app = express();

// Configure server
app.configure(function() {
	app.use(app.router);
	app.use(express.logger());
	app.use(express.static(path.join(application_root, 'static')));
});

// Start server
var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Website running on port %d in %s mode", port, app.settings.env );
});
