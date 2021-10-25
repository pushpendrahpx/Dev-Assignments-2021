// global importing 
const {express,app } = require("./imports");
require('dotenv').config('./env')

const PORT = process.env.PORT || 8000


const UserController = require("./apis/v1/user/user.route");


app.use("/api/v1/user",UserController)
app.get("/",(req,res)=>{
    res.send("HELLO")
})

app.listen(PORT,()=>{
    console.log(`PORT Running at ${PORT}`)
})