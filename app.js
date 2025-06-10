const path = require("path");

const express = require("express");

const app = express(); // create an express application

app.set("view engine", "ejs"); // set the view engine to ejs
app.set("views", "views"); // set the views directory

const adminRouter = require("./routes/admin"); // import the admin routes
const shopRouter = require("./routes/shop"); // import the shop routes
const errorController = require("./controllers/error");
const { error } = require("console");

app.use(express.urlencoded({ extended: true })); // to parse the body of incoming requests
app.use(express.static(path.join(__dirname, "public"))); // to serve static files such as images, CSS files, and JavaScript files

app.use("/admin", adminRouter); // use the admin routes for all routes starting with /admin path of the incoming request (e.g., /admin/add-product)
app.use(shopRouter); // use the shop routes for all routes of the incoming request

app.use(errorController.get404);

app.listen(3000);
