const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router(); // create a new router object

router.get("/", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "shop.html")); // send the shop.html file as a response
  const products = adminData.products; // get the products array from the admin.js file
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0, // check if there are products
    activeShop: true,
    productCSS: true,
    activeShop: true,
  }); // render the shop view
});

module.exports = router;
// The  exports  object is used to export functions, objects, or primitive values from a file so that they can be used in other files.
