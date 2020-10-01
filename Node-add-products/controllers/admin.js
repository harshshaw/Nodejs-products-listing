const Product = require("../Models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};
exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title); //passing title to class constructor
  product.save();
  res.redirect("/");
};

exports.getAddProduct = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};
