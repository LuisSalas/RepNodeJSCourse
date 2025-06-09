const path = require("path");

const express = require("express");

const app = express(); // create an express application

app.set("view engine", "ejs"); // set the view engine to ejs
app.set("views", "views"); // set the views directory

const adminData = require("./routes/admin"); // import the admin routes
const shopRoutes = require("./routes/shop"); // import the shop routes

app.use(express.urlencoded({ extended: true })); // to parse the body of incoming requests
app.use(express.static(path.join(__dirname, "public"))); // to serve static files such as images, CSS files, and JavaScript files

app.use("/admin", adminData.routes); // use the admin routes for all routes starting with /admin path of the incoming request (e.g., /admin/add-product)
app.use(shopRoutes); // use the shop routes for all routes of the incoming request

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
