const userDao = require('../dao/user.js');
const { encryptPassword} = require('../helpers/common.js');
const getUserList = async (request,response) => {
  try {
    let querySelector={email:1,fullName:1,gender:1,_id:1}
    let userList = await userDao.getAll(querySelector); 
    return response.status(200).send({userList:userList}); 
  } catch (error) {
    console.log('Error fetching user list from the database',error);
  }
};
const saveUser = async (request,response) =>{
  try {
   let userData = request.body.userData
   if(userData._id){
    let userId = userData._id;
    delete userData._id
      const user = await userDao.updateUserById(userId,userData)
      return response.status(201).send({success:true,message:'User Updated Successfully'})
   }
   else{
    userData.password = await encryptPassword(userData.password)
    const user = await userDao.addUser(userData)
    return response.status(201).send({success:true,message:'User Added Successfully'})
   }
  } catch (error) {
    console.log(error)
  }
   

}
const getUserById = async (request,response) =>{
  try {
    
    let userDetails = await userDao.getUserById(request.query.id,{password:0})
    console.log(userDetails)
    return response.status(201).send({success: true ,userData:userDetails})
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
    getUserList,
    getUserById,
    saveUser
};
