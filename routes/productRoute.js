// const express = require("express");
// const { getProduct, postProduct, deleteProduct, updateProduct } = require("../controller/productController");

// const router = express.Router();

// router.get("/getproduct", getProduct);
// router.post("/postProduct",postProduct)
// router.delete("/deleteProduct/:id",deleteProduct)
// router.put("/updateProduct/:id",updateProduct)
// module.exports = router;

// const express = require("express");
// const router = express.Router();
// const Product = require("../models/Product");

// // GET ALL PRODUCTS
// router.get("/getproduct", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // GET SINGLE PRODUCT
// router.get("/getproduct/:id", async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     res.json(product);
//   } catch (err) {
//     res.status(404).json({ message: "Product not found" });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET ALL PRODUCTS
router.get("/getproduct", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET PRODUCT BY ID
router.get("/getproduct/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(404).json({ message: "Product not found" });
  }
});

module.exports = router;
