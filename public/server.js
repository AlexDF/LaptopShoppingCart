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
    ramCost: String,
    totalCost: String
  });

var Quote = mongoose.model('Quote', quoteSchema);

app.get('/', function(req, res) {
  res.render('index.ejs');

});

var quoteData;

app.get('/save/:laptopPrice/:screenPrice/:hardDrivePrice/:ramPrice/:totalPrice', function(req, res) {
  quoteData = new Quote({
    laptopCost: req.params.laptopPrice,
    screenCost: req.params.screenPrice,
    hardDriveCost: req.params.hardDrivePrice,
    ramCost: req.params.ramPrice,
    totalCost: req.params.totalPrice
  });

  quoteData.save(function (err, quoteData) {
    if (err) return console.error(err);
  });

  res.redirect('/');
});


app.get('/showMyQuotes', function(req, res) {
  Quote.find(function(err, quotes) {
    if(err) {console.log('Error: ' + err);}
    else{
      res.send(quotes);
    }
  });
});

app.get('/*', function(req, res) {
  res.sendfile(__dirname + req.url);
});


app.listen(3000);
