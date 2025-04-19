const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    res.send("hey it's working fine..");
});

console.log(process.env.NODE_ENV);

router.post("/new-user", function(req,res){
    res.send("Succesfully created");
})
router.post("/create",function(req, res){
    res.send("Fine hai");
})

router.get("/", async function(req, res){
    res.send("new-cookie");
})


module.exports = router;
