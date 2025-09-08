const express = require('express')
const router = express.Router()
const userRoutes = require('./user-routes.js')
const authRoutes = require('./auth-routes.js')
const kathbathRoutes = require('./kath-bath.js')
const contactRoutes = require('./contact-routes.js')
// const chatRoutes = require('./chat-routes.js')

const middleWare = (req,res,next)=>{
    console.log('running middleWare')
    next()
}
router.use('/auth',middleWare,authRoutes)
router.use('/user',middleWare,userRoutes)
router.use('/kathbath',kathbathRoutes)
router.use('/contacts',contactRoutes)
// router.use('/chat',chatRoutes)   

module.exports = router