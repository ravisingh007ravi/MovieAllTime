const userModel = require('../models/UserModel');
const { errorHandle } = require('../errorHandling/errorHandle')
const cloudinary = require('cloudinary').v2;
const bcrypt = require('bcrypt')
require('dotenv').config()

cloudinary.config({
    cloud_name: process.env.CloudName,
    api_key: process.env.APIKey,
    api_secret: process.env.APISecret
});


exports.createUser = async (req, res) => {

    try {

        const ImageData = req.file;
        const data = req.body;
      
        if(!data.password)return res.status(400).send({ status: false, message: "pls Provide Password"})
        const bcryptPassword = await bcrypt.hash(data.password, 10);

        if (ImageData == undefined) {
            data.password = bcryptPassword;
            const createData = await userModel.create(data);
            return res.status(201).send({ status: true, message: "User Data Created successfully!", 
                data: createData })
        } 
        
            const result = await cloudinary.uploader.upload(ImageData.path)
            data.profileImg = result.secure_url;
            data.password = bcryptPassword;
            const createData = await userModel.create(data);

            return res.status(201).send({ status: true, message: "User Data Created successfully!", data: createData })

    }
    catch (err) { return errorHandle(err, res) }
}

