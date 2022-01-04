const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ["American", "Delta", "Southwest", "United"],
        required: true,
      },
      airport: {
          type: String,
          enum: ["ATL", "DFW", "DEN", "LAX", "SAN"],
          default: "DEN",
          required: true,
      },
      flightNo: {
          type: Number,
          min: 10,
          max: 9999,
          required: true,
      },
      departs: {
          type: Date,
          default: function(){
              let d = new Date(Date.now);
              d.setFullYear(d.getFullYear() + 1);
              console.log(d.toString())
          }
      }
})

module.exports = mongoose.model("Flight", flightSchema);