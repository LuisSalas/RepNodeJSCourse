/*
  router.use will work for all the requests
  router.post will work only for post requests
  router.get will work only for get requests
*/

const path = require("path");

const express = require("express");

const productsController = require("../controllers/products");

// The  express.Router()  function is used to create a new router object. This function is used when you want to create a new router object in your application to handle requests.
const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", productsController.getAddProduct);

// /admin/add-product => POST
router.post("/add-product", productsController.postAddProduct);

module.exports = router;
// module.exports = router;
// The  module.exports  object is used to export functions, objects, or primitive values from a file so that they can be used in other files.
