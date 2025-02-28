const path = require("path");

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
// The  exports  object is used to export functions, objects, or primitive values from a file so that they can be used in other files.
