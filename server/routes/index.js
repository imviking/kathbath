const express = require('express')
const router = express.Router()
const userRoutes = require('./user-routes.js')

const middleWare = (req,res,next)=>{
    console.log('running middleWare')
    next()
}
router.use('/user',middleWare,userRoutes)

module.exports = router