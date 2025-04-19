const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    res.send("Route is wroking...");
})

module.exports = router;
