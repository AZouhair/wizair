import { Router } from "express";
// Load User model
import Data from "../../models/Data.js";

const router = Router();

router.get("/", function (req, res) {
    
    Data.find({deviceId : req.query.id})
    .sort({date:-1})
    .limit(10)
    .exec()
    .then( data => {
        res.send(data)  // seding a json array
    })
    
});

export default router;