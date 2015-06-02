var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function (req, res) {
  res.send('I love free food and free t-shirts!');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

  fs.writeFile('FOO.txt', 'Hello World! Your cows are delicious here at ' + host + ':' + port, function (err) {
    if (err) throw err;

  });

});
