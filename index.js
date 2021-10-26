// global importing 
const {express,app } = require("./imports");
require('dotenv').config('./env')

const PORT = process.env.PORT || 8000


const UserController = require("./apis/v1/user/user.route");

app.use("*",(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","POST, PUT, GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers","Content-type, Authorization");
    if(req.method == "OPTIONS"){
        res.end();
        return;
    }
    next();

})

app.use("/api/v1/user",UserController)

app.listen(PORT,()=>{
    console.log(`PORT Running at ${PORT}`)
})


app.use("*/static/", express.static(__dirname + '/frontend/build/static'));

app.use("*",express.static(__dirname+"/frontend/build"));