'use strict'

var mongoose = require('mongoose');

// Banner Schema
var serviceSchema = mongoose.Schema({
    serviceUrl: {
        type: String,
        required: true
    }
});

var Service = module.exports = mongoose.model('Service',serviceSchema);


//get Banner

module.exports.getService = function(callback){
    Service.find(callback);
}



