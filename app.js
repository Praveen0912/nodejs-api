var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


Banner = require('./models/banners');
Service = require('./models/services');
Category = require('./models/categories');

app.use(bodyParser.json());

//connect to mongoose

mongoose.connect('mongodb://root:123@localhost:27017/yesMadam?authSource=admin');
var db = mongoose.connection;





//routes genre
app.get('/api/banners',function(req,res){
    Banner.getBanner(function(err, banners){
        if(err){
            throw err;
        }
        else{
            res.json(banners);
        }
    });
});







//routes PopularServices
app.get('/api/services',function(req,res){
    Service.getService(function(err, services){
        if(err){
            throw err;
        }
        else{
            res.json(services);
        }
    });
});

//routes Categories
app.get('/api/categories',function(req,res){
    Category.getCategory(function(err, categories){
        if(err){
            throw err;
        }
        else{
            res.json(categories);
        }
    });
});




app.listen(3000);
console.log("Running on port 3000");
