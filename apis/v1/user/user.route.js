const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const RegisterValidation = require("./../../../middlewares/register.middleware");
const loginMiddleware = require("../../../middlewares/login.middleware");

require('dotenv').config('./../../../.env')

const UserModal = require("./../../../schemas/user.schema");
const {verifyToken,verifyTokenAddPokemon} = require("./../../../middlewares/verifytoken.middleware");

const token2payload = require("./../../../functions/token2payload.function")



router.post("/login",async (req,res)=>{
    try{    
        
        let {email,password} = req.body;
        

        if(await UserModal.exists({email:email})){
            let hashedPassword = await CryptoJS.SHA512(password).toString();
    
            let user = await UserModal.findOne({email:email})
            // console.log(password+"+++"+hashedPassword)
            if(user.password != hashedPassword) throw {ok:false,message:"Incorrect Password or Email"}
    
            
            let accessToken = await jwt.sign(JSON.stringify(user),process.env.JWT_SECRET_KEY)
    
            delete user.password
            res.status(200).json({ok:true,message:"Login success",path:"login",data:user,accessToken:accessToken})
        }else{
            // Registration Process
            let hashedPassword = await CryptoJS.SHA512(password).toString();
            
            let {favs} = req.body;
            let user = new UserModal({email:email,password:hashedPassword,favs:favs})
        
            let userstatus = await user.save()
            if(!userstatus) throw {ok:false,message:"FAILED to save"}

            delete user.password;

            let accessToken = jwt.sign(JSON.stringify(userstatus),process.env.JWT_SECRET_KEY)
            res.status(200).json({ok:true,message:"Object created",path:"register",data:user,accessToken:accessToken})
        }
        
        
        
    }catch(error){
        console.log(error)
        res.status(500).send(error)
    }
})

router.put("/addFavPokemon",verifyTokenAddPokemon,async (req,res)=>{
    
    try{
        let {pokemonId} = req.body;
        let dataFromToken = token2payload(req,res);
        let user = await UserModal.findOne({email:dataFromToken.email});
        user.favs.push(pokemonId)
        await user.save();
        res.status(200).json({ok:false,message:"Updated",data:user})
    }catch(error){
        console.log(error)
        res.status(501).json({ok:false,message:"INTERNAL SERVER ERROR - Add pokemon"})
    }
})
router.get("/getFavPokemon",verifyToken,async (req,res)=>{
    
    try{
        let dataFromToken = token2payload(req,res);
        let user = await UserModal.findOne({email:dataFromToken.email});
        res.status(200).json({ok:false,message:"Updated",data:user.favs})
    }catch(error){
        console.log(error)
        res.status(501).json({ok:false,message:"INTERNAL SERVER ERROR - Add pokemon"})
    }
})
router.post("/checkFavPokemon",verifyTokenAddPokemon,async (req,res)=>{
    
    try{
        let {pokemonId} = req.body;
        let dataFromToken = token2payload(req,res);
        let user = await UserModal.exists({email:dataFromToken.email, favs: { "$in" : [pokemonId]}})
        if(user){
            res.status(200).json({ok:false,message:"Checked",data:true})
        }else{

            res.status(200).json({ok:false,message:"Checked",data:false})
        }
        
    }catch(error){
        console.log(error)
        res.status(501).json({ok:false,message:"INTERNAL SERVER ERROR - Add pokemon"})
    }
})
module.exports = router;