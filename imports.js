// Importing library files
const 
    express = require("express"),
    bodyParser = require('body-parser'),
    mongoose = require("mongoose");

require('dotenv').config('./env')

mongoose.connect(String(process.env.DB_URI),{
    useNewUrlParser: true,
    useUnifiedTopology: true
   },(err)=>{
       if(!err) {}
    console.log("Connected to Mongo Database");
});

// Ininitialising 
const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


module.exports = {
    express,
    app,
    mongoose
}