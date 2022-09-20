const express=require('express')
const { route } = require('../app')
const router=express.Router()

router.route('/').get((req,res)=>{
    res.status(200).send("Tour Route Working!")
})


module.exports=router