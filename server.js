const express = require("express");

const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

const AmazonApiKey = process.env.REACT_APP_AMAZON_API_KEY;
const WalmartApiKey = process.env.REACT_APP_WALMART_API_KEY;
const TargetApiKey = process.env.REACT_APP_TARGET_API_KEY;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Saved";
mongoose.connect(MONGODB_URI,  { useNewUrlParser: true });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.export = AmazonApiKey;
module.export = WalmartApiKey;
module.export = TargetApiKey;