const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const datauri = require('datauri');

exports.ImageUpload = async (imagePath, imageName, imageSize) => {

    const quality = Number(imageSize) > 2097152 ? "60" : "90";

    const upload = await cloudinary.uploader.upload(imagePath, {
        overwrite: true,
        public_id: `imagesAPI/${imageName}`,
        transformation: [{
            quality: quality
        }],
        invalidate: true,
        width: 1980, height: 1070, crop: "fill"
    })

    await fs.unlink(process.cwd() + "/uploads/" + imageName, (err) => {
        if (err) console.error(err);
        console.log("temp image clear")
    })

    return upload
}