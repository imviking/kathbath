const express = require('express')
const router = express.Router()
const userController = require("../controller/user.js")
console.log('user routes')
router.get('/user-list',userController.getUserList)
router.post('/save-user',userController.saveUser)
router.get('/user-details',userController.getUserById)

module.exports = router