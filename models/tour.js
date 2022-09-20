const mongoose = require('mongoose')
// schema design
const tourSchema = mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please provide a name for this tour."],
      trim: true,
      unique: [true, "Name must be unique"],
      minLength: [3, "Name must be at least 3 characters."],
      maxLenght: [100, "Name is too large"],
    },
    image: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      rquired: true,
      min: [0, "Price can't be negative"],
    },
    viewed: {
      type: Number,
      required: true,
      min: [0, "viewed cant be negative"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true
          } else {
            return false
          }
        }
      },
      message: "Viewed must be an integer"
    }
  }, {
    timestamps: true,
  })
  
  
  
   tourSchema.pre('save',function(next){
  
    
       if (this.viewed != 0) {
        this.viewed = 0
      }
  
     next()
   })
  
  
  
  tourSchema.methods.logger= function(){
    console.log(` Data saved for ${this.name}`);
  }
  
  
  // SCHEMA -> MODEL -> QUERY
  
  const Tour = mongoose.model('Tour', tourSchema)

  module.exports = Tour;