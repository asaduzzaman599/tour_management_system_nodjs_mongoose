const Tour = require("../models/tour");

exports.getToursService = async ( queries,filters) =>{
  
    const tours = await Tour.find()
    .select(queries.fields)
    .sort(queries.sort)
    .skip(queries.skip)
    .limit(queries.limit)

  const total = await Tour.countDocuments()
  const page = Math.ceil(total/queries.limit)||1
  return {total,page,tours};
}

exports.getToursByIdService = async ( _id) =>{
   await Tour.updateOne(
    {_id},
    {$inc:{viewed:1}});
    const tour = await Tour.findById(_id)
    

  return tour;
}

exports.createToursService = async(data) =>{
    const tour = await Tour.create(data);
    return tour;
}


exports.updateToursByIdService = async(_id,data) =>{
  const tour = await Tour.updateOne(
    {_id},
    {...data},
    {runValidators: true});
  return tour;
}