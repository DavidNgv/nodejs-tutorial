var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var online_count = req.online.length;
  res.render('index', { title: 'Express', online: online_count });
});

module.exports = router;
