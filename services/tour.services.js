const Tour = require("../models/tour");

exports.getToursService = async ( queries,filters) =>{
  
    const tours = await Tour.find(/* filters */)
    .select(queries.fields)
    .sort(queries.sort)
    .skip(queries.skip)
    .limit(queries.limit)

  const total = await Tour.countDocuments(filters)
  const page = Math.ceil(total/queries?.limit)
  return {total,page,tours};
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