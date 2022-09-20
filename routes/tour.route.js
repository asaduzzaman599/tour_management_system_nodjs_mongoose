const express=require('express')
const { route } = require('../app')
const { updateTours, getTrendingTour, getCheapestTour } = require('../controllers/tour.controller')
const router=express.Router()


router.route('/:id')
.patch(updateTours)

router.route('/trending')
.get(getTrendingTour)

router.route('/cheapest')
.get(getCheapestTour)


module.exports=router