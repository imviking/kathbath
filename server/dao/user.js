const Mongoose = require('mongoose');
const objectId = Mongoose.Types.ObjectId;
const UserModel = require('../models/user.js'); // Assuming UserModel is correctly defined as a Mongoose model

async function getAll(querySelector) {
    return await UserModel.find({}, querySelector || {});
}

async function getUserById(userId, querySelector) {
    return await UserModel.findOne({ _id: new objectId(userId) }, querySelector || {});
}

async function getUserByEmail(emailId, querySelector) {
    return await UserModel.findOne({ email: emailId }, querySelector || {});
}

async function addUser(userData) {
    return await UserModel.create(userData);
}

async function updateUserById(userId, newData) {
    return await UserModel.updateOne({ _id: new objectId(userId) }, { $set: newData });
}

module.exports = {
    getAll,
    getUserById,
    addUser,
    updateUserById,
    getUserByEmail
};
