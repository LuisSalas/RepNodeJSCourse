/*
    router.use will work for all the requests
    router.post will work only for post requests
    router.get will work only for get requests
  */

const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

// The  express.Router()  function is used to create a new router object. This function is used when you want to create a new router object in your application to handle requests.
const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html")); // send the add-product.html file as a response
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  }); // render the add-product view
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  // console.log(req.body);
  products.push({ product: req.body.product });
  res.redirect("/");
});

module.exports = { routes: router, products: products };
// module.exports = router;
// The  module.exports  object is used to export functions, objects, or primitive values from a file so that they can be used in other files.
