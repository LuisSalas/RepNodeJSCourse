const http = require("http");

const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>The 'Add Product' Page</h1>");
});

app.use("/", (req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);

// The  app.use()  method is used to add a middleware function to the middleware stack. The middleware function is executed for every incoming request.
// The middleware function takes three arguments:

// req : The request object
// res : The response object
// next : A function that is used to pass the request to the next middleware function in line

// The  next()  function is used to pass the request
