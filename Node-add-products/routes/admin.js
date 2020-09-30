const path = require("path");

const express = require("express");
const productsController = require("../controllers/products");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", productsController.getAddProduct); //we dont execute getAddproduct therefore
//we dont write getAddProduct() we
//pass referrence to it

// /admin/add-product => POST
router.post("/add-product", productsController.postAddProduct);
module.exports = router;
