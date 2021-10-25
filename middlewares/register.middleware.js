const registerValidation = (req,res,next)=>{
    try{
        let {email,password,favs} = req.body;
        if(!(email.length > 10 && password.length >= 6)) throw {ok:false,message:"Input Fields does not meet criteria ..."}
        next();
    }catch(error){
        res.status(501).json({ok:false,message:"INTERNAL SERVER ERROR"})
    }
}
module.exports = registerValidation