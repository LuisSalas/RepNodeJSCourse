const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router(); // create a new router object

router.get("/", (req, res, next) => {
  // console.log(adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html")); // send the shop.html file as a response
  res.render("shop"); // render the shop view
});

module.exports = router;
// The  exports  object is used to export functions, objects, or primitive values from a file so that they can be used in other files.
