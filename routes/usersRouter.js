const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    res.send("hey it's working fine");
})

router.get("/login",  function(req, res){
    res.send("login.ejs");
})
module.exports = router;
