const imageSchema = require('../../models/imageSchema')

module.exports.getImages = (req, res) => {

    const {
        limit
    } = req.query

    imageSchema
        .find({}, images)
        .limit(Number(limit) || 10)

    // add query search in collection
    function images(err, data) {
        if (err) return res.status(500).send("something went wring :/");
        return res.send(data)
    }
}