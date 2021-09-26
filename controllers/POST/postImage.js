const saveImageSchema = require('../../models/postImageSchema');

module.exports.saveImage = async (req, res) => {

    const response = await saveImageSchema.create({
        ...req.body
    })

    res.send(response)
}