import pkg from 'mongoose';

const { Schema: _Schema, model } = pkg;

const Schema = _Schema;

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


const Data = model("data", DataSchema);
export default Data;
