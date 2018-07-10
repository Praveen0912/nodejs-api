'use strict'

var mongoose = require('mongoose');

// Categories Schema
var categoriesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    iconUrl:{
        type:String,
        required:true
    }
});

var Category = module.exports = mongoose.model('Category',categoriesSchema);


//get categories

module.exports.getCategory = function(callback){
    Category.find(callback);
}



