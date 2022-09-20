const express = require("express");
const app = express();
const cors = require("cors");
//routes
const tourRoute= require('./routes/tour.route')

app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {
  res.send("Server Running!");
});


app.use('/tour',tourRoute)

module.exports = app;
