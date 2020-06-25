const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DataSchema = new Schema({
  deviceId :{
    type: String,
    default: "none"
   },
  date: {
    type: String
   },
   pm25:  {
    type: String
    },
   NO2: {
     type: Number
    },
   O3: {
     type: Number
    },
   pos: {
     type: String
    }
}, { collection: 'data' }); // specifying the collection name seems necessary else mongoose plurialize it by default (data --> datas)

module.exports = Data = mongoose.model("data", DataSchema);
