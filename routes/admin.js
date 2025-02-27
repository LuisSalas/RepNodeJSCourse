const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    `<form action='/product' method='POST'>
        <input type='text' name='product'>
        <button type='submit'>Add Product</button>
      </form>`
  );
});

/*
    router.use will work for all the requests
    router.post will work only for post requests
    router.get will work only for get requests
  */

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
// The  module.exports  object is used to export functions, objects, or primitive values from a file so that they can be used in other files.
