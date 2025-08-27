const bcrypt = require('bcrypt')

const comparePassword=async(password,hashedPassword) =>{
    let match = bcrypt.compare(password,hashedPassword)
    return match

}
const encryptPassword=async(password) =>{
    let rounds = 12
    let hashedPassword = await bcrypt.hash(password,rounds)
    console.log(hashedPassword)
    return hashedPassword

}

module.exports={
    comparePassword,
    encryptPassword,
}