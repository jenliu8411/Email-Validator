const express = require('express')
const bodyParser = require('body-parser')
const port = parseInt(process.env.PORT, 10) || 8000;

const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

app.post('/validation/', function (req, res) {
  if (req.body['email'] && emailPattern.test(req.body['email'])) {
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
})

app.listen(port, function () {
  console.log('Email validator is listening on port ' + port + '.')
})