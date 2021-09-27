const saveImageSchema = require('../../models/postImageSchema');
const { ImageUpload } = require('../Cloudinary/uploadImage');
const { upload } = require('../Cloudinary/multer');

module.exports.saveImage = async (req, res, next) => {

    const { path, filename, size } = req.file
    const { creator, location, title } = req.body
    const responseData = await ImageUpload(path, filename, size);

    const {
        created_at: createdAt,
        url,
        secure_url: secureUrl,

    } = responseData;

    const metaData = {
        creator,
        location,
        title,
        createdAt,
        url,
        secureUrl
    }

    const response = await saveImageSchema.create(metaData)

    res.send(response)
}