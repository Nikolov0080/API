const multer = require('multer');
const path = require('path');
const { getTime } = require('date-fns');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, process.cwd() + '/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, getTime(new Date()).toString() + ".png");
    }
});
// for just a single image

module.exports.upload = multer({ storage: storage });