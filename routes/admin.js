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

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html")); // send the add-product.html file as a response
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
// The  module.exports  object is used to export functions, objects, or primitive values from a file so that they can be used in other files.
