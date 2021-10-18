const imageSchema = require('../../models/imageSchema')

module.exports.getImages = (req, res) => {

    const {
        limit,
        category,
        createdAt
    } = req.query

    const filters = {};

    if (category) filters.category = category
    if (createdAt) filters.category = createdAt
    console.log(332123123234)

    imageSchema
        .find(filters, images)
        .limit(Number(limit) || 10)

    // add query search in collection
    function images(err, data) {
        if (err) return res.status(500).send("something went wring :/");
        return res.send(data)
    }
}