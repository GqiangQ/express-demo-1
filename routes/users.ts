import { RequestHandler } from "express";

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
} as RequestHandler);

module.exports = router;
