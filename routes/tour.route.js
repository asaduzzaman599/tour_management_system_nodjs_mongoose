const express=require('express')
const { route } = require('../app')
const { getTour, getTrendingTour, getCheapestTour } = require('../controllers/tour.controller')
const router=express.Router()


router.route('/')
.get(getTour)

router.route('/trending')
.get(getTrendingTour)

router.route('/cheapest')
.get(getCheapestTour)


module.exports=router