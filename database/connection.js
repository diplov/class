const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    return console.log("database connected");
  })
  .catch((error) => console.log(error.message));
