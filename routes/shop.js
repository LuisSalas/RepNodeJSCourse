const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router(); // create a new router object

// / => GET
router.get("/", shopController.getIndex);

// /products => GET
router.get("/products", shopController.getProducts);

// /cart => GET
router.get("/cart", shopController.getCart);

// /checkout => GET
router.get("/checkout", shopController.getCheckout);

module.exports = router;
// The  exports  object is used to export functions, objects, or primitive values from a file so that they can be used in other files.
