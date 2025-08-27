const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, default: null },
  password: { type: String, default: null },
  gender:{type:String,default:null},
  fullName: {
    firstName: { type: String, default: null },
    middleName: { type: String, default: null },
    lastName: { type: String, default: null }
  }
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
