const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  //   res.status(404);
  res.status(404).send("<h1>Page not found!</h1>");
});

app.listen(3000);

// The  app.use()  method is used to add a middleware function to the middleware stack. The middleware function is executed for every incoming request.
// The middleware function takes three arguments:

// req : The request object
// res : The response object
// next : A function that is used to pass the request to the next middleware function in line

// The  next()  function is used to pass the request
