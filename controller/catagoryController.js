const Catagory = require("../model/catagoryModel");

// add catagory
// exports.postCatagory = async (req, res) => {
//   let catagoryToAdd = new Catagory({
//     catagory_name: req.body.catagory_name,
//   });
//   catagoryToAdd = await catagoryToAdd.save();
//   if (!catagoryToAdd) {
//     return res.status(400).json({ error: "somethings went wrong" });
//   }
//   res.send(catagoryToAdd);
// };
// req.body  to get data from user through form
// req.parms to get data from user through url
// req.query  to get data from user through url using variables
