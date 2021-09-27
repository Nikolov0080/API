const express = require('express');
const { saveImage } = require('../controllers/POST/postImage');
const router = express.Router();
const multer = require('multer');
const { upload } = require('../controllers/Cloudinary/multer');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Images API' });
});

router.post("/postImage", upload.single("image"), saveImage)

module.exports = router;
