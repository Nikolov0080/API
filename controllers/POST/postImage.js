const saveImageSchema = require('../../models/imageSchema');
const { ImageUpload } = require('../Cloudinary/uploadImage');

module.exports.saveImage = async (req, res, next) => {

    try {
        const { path, filename, size } = req.file
        const { creator, category, title } = req.body
        const responseData = await ImageUpload(path, filename, size);
        const dateCreated = new Date();

        const {
            created_at: createdAt,
            url,
            secure_url: secureUrl,
        } = responseData;

        const metaData = {
            creator,
            category,
            title,
            createdAt,
            url,
            secureUrl,
            dateCreated
        }

        const response = await saveImageSchema.create(metaData)

        res.send(response)

    } catch (error) {
        res.status(500).send(error)
    }

}