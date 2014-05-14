var express = require('express');
var mongoose = require('mongoose');
var fs = require('fs');
var bodyparser = require('body-parser');

app = express();

mongoose.connect('mongodb://localhost/quotes/');
var db = mongoose.connection;

var quoteSchema = mongoose.Schema({
    laptopCost: String,
    screenCost: String,
    hardDriveCost: String,
    ramCost: String
  });

var Quote = mongoose.model('Quote', quoteSchema);

app.get('/', function(req, res) {
  res.render('index.ejs');

});

app.get('/save/:laptopPrice', function(req, res) {
  res.send(req.params.laptopPrice);
});

app.get('/*', function(req, res) {
  res.sendfile(__dirname + req.url);
});


app.listen(3000);
