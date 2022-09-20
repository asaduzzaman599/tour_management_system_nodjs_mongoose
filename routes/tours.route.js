const express=require('express')
const { route } = require('../app')
const { getTours, createTours, updateTours } = require('../controllers/tour.controller')
const router=express.Router()

router.route('/')
.get(getTours)
.post(createTours)



router.route('/:id').patch(updateTours)
module.exports=router