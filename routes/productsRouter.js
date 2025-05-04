const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    res.send("Route is wroking...");
})

router.get("/new", function(req, res){
    res.send("created new route")
})

router.get("/new-function", function(req, res){
    res.send("working fine")

    
module.exports = router;
