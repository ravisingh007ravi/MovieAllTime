const cloudinary = require('cloudinary').v2;
require('dotenv').config()

exports.UploadImage = async (img) => {
    try {
   
        cloudinary.config({
            cloud_name: process.env.CloudName,
            api_key: process.env.APIKey,
            api_secret: process.env.APISecret
        });


        const uploadResult = await cloudinary.uploader.upload(img)
            .catch((error) => { return res.status(500).send({ status: false, msg: error.message }) });

        return uploadResult.secure_url
    }
    catch (e) { return res.status(500).send({ status: false, msg: e.Message }) }
};





