var express = require('express');
const { saveImage } = require('../controllers/POST/postImage');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Images API' });
});

router.post("/postImage", saveImage)

module.exports = router;
