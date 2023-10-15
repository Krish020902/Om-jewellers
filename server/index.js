const express = require("express");
const app = express();
const cors = require("cors");
const router = require('./routes/record')
require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
require('./db/conn')

app.use(cors());
app.use(express.json());
app.use(router)


 
app.listen(port, () => {

  console.log(`Server is running on port: ${port}`);
});
