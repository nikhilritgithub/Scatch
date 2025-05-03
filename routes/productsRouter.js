const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    res.send("Route is wroking...");
})

router.get("/new", function(req, res){
    res.send("created new route")
})


module.exports = router;
