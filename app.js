var express = require('express');
var path = require('path');
var app = express();

// Load static assets file
app.use(express.static('assets'));

// View engine
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

// Routing
app.get('/', function (req, res) {
  res.render('home');
})

app.get('/booking', function (req, res) {
  res.render('Booking');  
})

// Start service
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})