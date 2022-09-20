const express=require('express')
const { route } = require('../app')
const { getTours, createTours, getTour } = require('../controllers/tour.controller')
const router=express.Router()

router.route('/')
.get(getTours)
.post(createTours)



router.route('/:id').get(getTour)
module.exports=router