const userDao = require("../dao/user");
const { comparePassword } = require("../helpers/common");

const login = async(request,response)=>{
   let credentials = request.body.credentials 
    let userDetails = await userDao.getUserByEmail(credentials.email)
    let valid = comparePassword(credentials.password,userDetails.password)
    if(!valid){
        return response.status(200).send({success:false,message:'Invalid credentials'})
    }
    return response.status(200).send({success:true,message:'Successfully Logged In'})
}
module.exports={
    login
}