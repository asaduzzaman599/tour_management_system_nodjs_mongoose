const { createToursService } = require("../services/tour.services");

exports.getTours = async (req, res, next) => {
    res.status(200).send("Tours Route and controller Working!")
}
exports.createTours = async (req, res, next) => {
    try {
        // save or create
    
        const result = await createToursService(req.body);
    
        result.logger();
    
        res.status(200).json({
          status: "success",
          messgae: "Data inserted successfully!",
          data: result,
        });
      } catch (error) {
        res.status(400).json({
          status: "fail",
          message: " Data is not inserted ",
          error: error.message,
        });
      }
}
exports.updateTours = async (req, res, next) => {
    res.status(200).send("Tours Route and controller Working!")
}


exports.getTour = async (req, res, next) => {
    res.status(200).send("Tour Route and controller Working!")
}


exports.getTrendingTour = async (req, res, next) => {
    res.status(200).send("Trending Tour Route and controller Working!")
}

exports.getCheapestTour = async (req, res, next) => {
    res.status(200).send("Cheapest Tour Route and controller Working!")
}