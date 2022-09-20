const { createToursService, getToursService } = require("../services/tour.services");

exports.getTours = async (req, res, next) => {
    try {
      const queries={}
        // save or create
        if(req.query?.fields){
          queries.fields = req.query.fields.split(",").join(' ')
        }
        if(req.query?.sort){
          queries.sort = req.query.sort.split(",").join(' ')
        }
        
        if(req.query?.sort && req.query?.limit){
          const {page=1,limit=10}= req.query
          queries.skip =( +page-1 * +limit) 
          queries.limit = +limit
        }
        const result = await getToursService(queries);
    
        res.status(200).json({
          status: "success",
          data: result,
        });
      } catch (error) {
        res.status(400).json({
          status: "fail",
          message: "can't get the data",
          error: error.message,
        });
      }
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
  try{
    const queries = {
      sort: "-viewed",
      limit: 3,
    } 
  const result = await getToursService(queries);
    res.status(200).json({
      status: "Top Three Viewed Tour",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't get the data",
      error: error.message,
    });
  }
}

exports.getCheapestTour = async (req, res, next) => {
      try{
        const queries = {
          sort: "price",
          limit: 3,
        } 
      const result = await getToursService(queries);
        res.status(200).json({
          status: "Top Three Cheapest Tour",
          data: result,
        });
      } catch (error) {
        res.status(400).json({
          status: "fail",
          message: "can't get the data",
          error: error.message,
        });
      }
}