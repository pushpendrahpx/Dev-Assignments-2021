const jwt = require("jsonwebtoken");
require('dotenv').config('./../.env')
const token2payload = (req,res)=>{ 
    try{
        let token = req.headers["authorization"].split(" ")[1]
        return jwt.verify(token,process.env.JWT_SECRET_KEY)
    }catch(error){
        
        return error
    }
}
module.exports = token2payload