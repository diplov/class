const express = require("express");
require("dotenv").config();
require("./database/connection");
const port = process.env.PORT;
// middleware
const bodyParser = require("body-parser");
const morgan = require("morgan");
// const add = require("./server");
const app = express();

// routes
const catagoryRoute = require("./route/catagoryRoute");

// middleware
app.use(bodyParser.json());
app.use(morgan("dev"));

app.listen(port, () => {
  console.log(`server started at ${port}`);
});
// routes
app.use("/api", catagoryRoute);
