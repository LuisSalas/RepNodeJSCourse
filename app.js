const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express(); // create an express application

app.set("view engine", "pug"); // set the view engine to pug
app.set("views", "views"); // set the views directory

const adminData = require("./routes/admin"); // import the admin routes
const shopRoutes = require("./routes/shop"); // import the shop routes

app.use(bodyParser.urlencoded({ extended: false })); // to parse the body of incoming requests
app.use(express.static(path.join(__dirname, "public"))); // to serve static files such as images, CSS files, and JavaScript files

app.use("/admin", adminData.routes); // use the admin routes for all routes starting with /admin path of the incoming request (e.g., /admin/add-product)
app.use(shopRoutes); // use the shop routes for all routes of the incoming request

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);

/** The  app.use()  method is used to add a middleware function to the middleware stack. The middleware function is executed for every incoming request.
 * The middleware function takes three arguments:
 * req : The request object
 * res : The response object
 * next : A function that is used to pass the request to the next middleware function in line
 * The  next()  function is used to pass the request
 **/
