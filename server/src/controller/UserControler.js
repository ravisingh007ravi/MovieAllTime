const userModel = require('../models/UserModel');
const { errorHandle } = require('../errorHandling/errorHandle')
const bcrypt = require('bcrypt')
const {UploadImage} = require('../cloudinary/cloudinary.js')

exports.createUser = async (req, res) => {
    
    try { 
        const data  = req.body;
        const imageData  = req.file;
       
        if (!data.password) return res.status(400).send({ status: false, message: "Please provide a password" });

        data.password = await bcrypt.hash(data.password, 10);
 
        if (imageData) {
            const result = await UploadImage(imageData.path);
            req.body.profileImg = result; 
        }
        
        const createData = await userModel.create(data);
        return res.status(201).send({ status: true, message: "User data created successfully!", data: createData });

    } catch (err) {
        return errorHandle(err, res);
    }
};



// exports.createUser = async (req, res) => {

//     try {

//         const ImageData = req.file;
//         const data = req.body;

//         if (!data.password) return res.status(400).send({ status: false, message: "pls Provide Password" })
//         const bcryptPassword = await bcrypt.hash(data.password, 10);

//         if (ImageData == undefined) {
//             data.password = bcryptPassword;
//             const createData = await userModel.create(data);
//             return res.status(201).send({
//                 status: true, message: "User Data Created successfully!",
//                 data: createData
//             })
//         }

//         const result = await cloudinary.uploader.upload(ImageData.path)
//         data.profileImg = result.secure_url;
//         data.password = bcryptPassword;
//         const createData = await userModel.create(data);

//         return res.status(201).send({ status: true, message: "User Data Created successfully!", data: createData })

//     }
//     catch (err) { return errorHandle(err, res) }
// }


exports.getallUserData = async (req, res) => {
    try {

        const data = await userModel.find()
        return res.status(201).send({ status: true, message: "Get Data All User successfully!", data: data })
    }
    catch (err) { return errorHandle(err, res) }

}