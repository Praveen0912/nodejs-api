'use strict'

var mongoose = require('mongoose');

// Banner Schema
var bannerSchema = mongoose.Schema({
    bannerUrl: {
        type: String,
        required: true
    }
});

var Banner = module.exports = mongoose.model('Banner',bannerSchema);


//get Banner

module.exports.getBanner = function(callback){
    Banner.find(callback);
}



