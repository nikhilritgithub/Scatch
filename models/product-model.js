const mongoose = require('mongoose');

const productSchema = mongoose.Schema ({
    image : String,
    name :  String,
    Id : NUmber,
    Quantity : Number,
    price : Number,
    discount : 
    {
        type : Number,
        default : 0
    },
    
    bgcolor: String,
    panelcolor: String,
    textcolor: String,
    border : Number
    
});

module.exports = mongoose.model("product", productSchema);
