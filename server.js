const express = require("express");
const mongoose = require ("mongoose");
//const routes= require ("./routes")
//const routes = require('./app/routes')
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
//app.use(routes)

// Define API routes here


// Define API routes here
require('./routes/apiRoutes')(app)

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
res.sendFile(path.join(__dirname, './client/build/index.html'))
})


//Connet to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/news", {useNewUrlParser: true});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
