const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    `<form action='/product' method='POST'>
      <input type='text' name='product'>
      <button type='submit'>Add Product</button>
    </form>`
  );
});

/*
  app.use will work for all the requests
  app.post will work only for post requests
  app.get will work only for get requests
*/

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);

// The  app.use()  method is used to add a middleware function to the middleware stack. The middleware function is executed for every incoming request.
// The middleware function takes three arguments:

// req : The request object
// res : The response object
// next : A function that is used to pass the request to the next middleware function in line

// The  next()  function is used to pass the request
