const path = require("path");

const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router(); // create a new router object

router.get("/", productsController.getProducts);

module.exports = router;
// The  exports  object is used to export functions, objects, or primitive values from a file so that they can be used in other files.
