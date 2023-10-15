
const mongoose = require('mongoose')

const Db = process.env.ATLAS_URI;

mongoose.connect(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connection to DB"))
.catch(err => console.log(err))