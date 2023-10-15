const express = require("express");
const { default: mongoose } = require("mongoose");
const Vendor = require("../models/vendorSchema");
const Product = require("../models/productSchema");
const User = require("../models/userSchema");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();

// This will help us connect to the database
// const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
// const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the records.
// router.route("/record").get(function (req, res) {
// //  let db_connect = dbo.getDb("seller");
// //  db_connect
// //    .collection("user")
// //    .find({})
// //    .toArray(function (err, result) {
// //      if (err) throw err;
// //      res.json(result);
// //    });
//   res.send("Hello Firend")
// });

router.post("/adduser", async (req, res) => {
  const userData = {
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
    cpassword: req.body.cpassword,

    phone: req.body.phone,
    userName: req.body.userName,
  };
  try {
    if (req.body.password == req.body.cpassword) {
      const user = new User(userData);
      const createUser = await user.save();
      res.status(201).send(createUser);
    } else {
      res.status(404).send("Password Don't mach");
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/getuser", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(400).send("Fill the Filed Properly");
    } else {
      const userLogin = await User.findOne({ email: email });
      if (userLogin) {
        res.status(200).send(userLogin);
      }
    }
  } catch (e) {
    res.status(404).send(e);
  }
});
router.post("/addvendor", async (req, res) => {
  const userData = {
    email: req.body.email,
    phone: req.body.phone,
    fname: req.body.fname,
    lname: req.body.lname,
    password: req.body.password,
    cpassword: req.body.cpassword,
  };
  console.log(userData);
  try {
    if (req.body.password == req.body.cpassword) {
      const user = new Vendor(userData);
      const createUser = await user.save();
      res.status(201).send(createUser);
    } else {
      res.status(404).send("Password Don't mach");
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/getvendor", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(400).send("Fill the Filed Properly");
    } else {
      const vendorLogin = await Vendor.findOne({ email: email });
      if (vendorLogin) {
        res.status(200).send(vendorLogin);
      }
    }
  } catch (e) {
    res.status(404).send(e);
  }
});

router.post("/productType", async (req, res) => {
  const type = req.body.productType;
  try {
    const productDimond = await Product.findOne({
      productType: type.toString(),
    });
    if (productDimond) {
      res.status(200).send(productDimond);
    } else {
      res.status(500).send("Enter Field Properly");
    }
  } catch (e) {
    res.status(404).send(e);
  }
});

router.post("/type", async (req, res) => {
  const type = req.body.type;
  console.log(type);
  try {
    const productDimond = await Product.find({ type: type.toString() });
    if (productDimond) {
      res.status(200).send(productDimond);
    } else {
      res.status(500).send("Enter Field Properly");
    }
  } catch (e) {
    res.status(404).send(e);
  }
});

router.post("/category", async (req, res) => {
  const category = req.body.category;
  console.log(category);
  try {
    const productCategory = await Product.find({
      category: category.toString(),
    });
    if (productCategory) {
      res.status(200).send(productCategory);
    } else {
      res.status(500).send("Enter Field Properly");
    }
  } catch (e) {
    res.status(404).send(e);
  }
});

router.post("/addproduct", async (req, res) => {
  const { name, productType, seller, price, type, category, sellerName } =
    req.body;
  try {
    if (!name || !price || !seller) {
      res.status(400).send("Fill the Field Properly");
    } else {
      const ProductData = new Product({
        name,
        productType,
        seller,
        price,
        type,
        category,
      });
      const productList = await Product.find({ seller: sellerName });
      const addProduct = await ProductData.save();
      if (addProduct) {
        res.status(200).send(ProductData, productList);
      }
    }
  } catch (e) {
    res.status(404).send(e);
  }
});
router.post("/getproduct", async (req, res) => {
  const seller = req.body.sellerName;
  console.log(seller);
  try {
    const productCategory = await Product.find({ seller: seller.toString() });
    if (productCategory) {
      res.status(200).send(productCategory);
    } else {
      res.status(500).send("Enter Field Properly");
    }
  } catch (e) {
    res.status(404).send(e);
  }
});
// router.get("/addvendor", async(req, res) => {
//   const {email, password, name, number, cpassword} = req.body
//   try{

//   }catch(e){
//     res.status(404).send(e)
//   }
// })

// // This section will help you get a single record by id
// recordRoutes.route("/record/:id").get(function (req, res) {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  db_connect
//    .collection("user")
//    .findOne(myquery, function (err, result) {
//      if (err) throw err;
//      res.json(result);
//    });
// });

// // This section will help you create a new record.
// recordRoutes.route("/record/add").post(function (req, response) {
//  let db_connect = dbo.getDb();
//  let myobj = {
//    name: req.body.name,
//    position: req.body.position,
//    level: req.body.level,
//  };
//  db_connect.collection("user").insertOne(myobj, function (err, res) {
//    if (err) throw err;
//    response.json(res);
//  });
// });

// // This section will help you update a record by id.
// recordRoutes.route("/update/:id").post(function (req, response) {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  let newvalues = {
//    $set: {
//      name: req.body.name,
//      position: req.body.position,
//      level: req.body.level,
//    },
//  };
//  db_connect
//    .collection("user")
//    .updateOne(myquery, newvalues, function (err, res) {
//      if (err) throw err;
//      console.log("1 document updated");
//      response.json(res);
//    });
// });

// // This section will help you delete a record
// recordRoutes.route("/:id").delete((req, response) => {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId(req.params.id) };
//  db_connect.collection("user").deleteOne(myquery, function (err, obj) {
//    if (err) throw err;
//    console.log("1 document deleted");
//    response.json(obj);
//  });
// });

module.exports = router;
