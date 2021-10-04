import mongoose from 'mongoose';

// Create Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  deviceId :{
    type: String,
    default: "none"
   }
});

const User = mongoose.model("users", UserSchema);

export default User;

