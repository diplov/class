const erxpress = require("express");
const { postCatagory } = require("../controller/catagoryController");
const router = erxpress.Router();

router.post("/addcatagory", postCatagory);

module.exports = router;
