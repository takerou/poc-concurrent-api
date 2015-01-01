var express = require('express');
var router = express.Router();
var async = require("async");
var util = require('util');

router.get('/get', function(req,res){
  res.status(200).send('ok');
  return;
});

module.exports = router;
