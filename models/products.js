const productsArr = [];

module.exports = class Products {
  constructor(title) {
    this.title = title;
  }

  save() {
    productsArr.push(this);
  }

  static fetchAll() {
    return productsArr;
  }
};
