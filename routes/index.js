var express = require('express');
var router = express.Router();
var db = require('../server/inc/db');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Saturn CRM' });
});

module.exports = router;