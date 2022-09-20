const Tour = require("../models/tour");

exports.getToursService = async() =>{

}
exports.createToursService = async(data) =>{
    const tour = await Tour.create(data);
    return tour;
}