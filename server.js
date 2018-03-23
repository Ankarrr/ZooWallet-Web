var express = require('express');
var wp = require('webpack');
var port = 5566;

var app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/src/views/wallets/index.html');
})

app.get('/wallet', function(req, res) {
    res.sendFile(__dirname + '/src/views/wallets/index.html');
})

app.use(express.static('dist'));

app.listen(port, function(error){
    if (error) {
        console.log(error)
    } else {
        console.log('Server start at localhost:%s', port)
    }
})