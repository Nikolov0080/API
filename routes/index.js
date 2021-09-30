const express = require('express');
const { saveImage } = require('../controllers/POST/postImage');
const router = express.Router();
const { upload } = require('../controllers/Cloudinary/multer');
const { getImages } = require('../controllers/GET/getImages');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Images API' });
});

router.get('/get_images', getImages)
router.post("/post_image", upload.single("image"), saveImage)

module.exports = router;
