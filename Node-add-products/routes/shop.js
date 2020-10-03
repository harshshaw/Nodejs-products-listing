const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

//loading every view pages here

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/products/:productId", shopController.getProduct); //colon here indicates a variable not endpoint route

router.get("/cart", shopController.getCart);

router.get("/orders", shopController.getOrders);

router.get("/checkout", shopController.getCheckout);

module.exports = router;
