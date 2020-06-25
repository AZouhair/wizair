const express = require("express");
const router = express.Router();


// Load User model
const Data = require("../../models/Data");




router.get("/", function (req, res) {
    
    Data.find({deviceId : req.query.id})
    .sort({date:-1})
    .limit(10)
    .exec()
    .then( data => {
        res.send(data)  // seding a json array
    })
    
});

module.exports = router;