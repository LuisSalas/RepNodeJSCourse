const fs = require("fs");
const path = require("path");
const rootDir = require("../util/path");

const getProductsFromFile = (callback) => {
  const p = path.join(rootDir, "data", "products.json");
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return callback([]);
    }
    return callback(JSON.parse(fileContent));
  });
};

module.exports = class Products {
  constructor(title, imageURL, description, price) {
    this.title = title;
    this.imageURL = imageURL;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      const p = path.join(rootDir, "data", "products.json");
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  /*
    This return nothing cause read file is async function
    We need to use a callback function to make it works
  */

  static fetchAll(callback) {
    getProductsFromFile(callback);
  }
};
