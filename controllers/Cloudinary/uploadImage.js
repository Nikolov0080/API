const cloudinary = require('cloudinary').v2;
const fs = require('fs');

exports.ImageUpload = async (imagePath, imageName, imageSize) => {

    const quality = Number(imageSize) > 2097152 ? "60" : "90";

    const upload = await cloudinary.uploader.upload(imagePath, {
        overwrite: true,
        sign_url: true,
        public_id: `imagesAPI/${imageName}`,
        transformation: [
            { quality: quality },
        ],
        invalidate: true,
    })
    await fs.unlink(process.cwd() + "/uploads/" + imageName, (err) => {
        if (err) console.error(err);
        console.log("temp image clear")
    })

    return upload;
}