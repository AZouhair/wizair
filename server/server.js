import express from "express";
import pkg_mongoose from 'mongoose';
import pkg_bp from 'body-parser';
import passport from "passport";

import { mongoURI as db } from "./config/keys.js";
import { config_passport } from "./config/passport.js";
import users from "./routes/api/users.js";
import data from "./routes/api/data.js";


const { connect } = pkg_mongoose;
const { urlencoded, json } = pkg_bp;
const app = express();

// Bodyparser middleware
app.use(
  urlencoded({
    extended: false
  })
);
app.use(json());

// DB Config

// Connect to MongoDB
connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected to the database"))
  .catch(err => console.log(err));


// Passport middleware
app.use(passport.initialize() );

// Passport config
config_passport(passport);

// Routes
app.use("/api/users", users);
app.use("/api/data", data);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
