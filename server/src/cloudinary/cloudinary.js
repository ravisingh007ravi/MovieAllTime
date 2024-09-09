const cloudinary= require ('cloudinary').v2;
require('dotenv').config()

exports.UploadImage = async(img) =>{
try{

    cloudinary.config({ 
        cloud_name: process.env.CloudName, 
        api_key: process.env.APIKey, 
        api_secret: process.env.APISecret 
    });
    

     const uploadResult = await cloudinary.uploader
       .upload(
           img, {
               public_id: 'shoes',
           }
       )
       .catch((error) => {
           console.log(error);
       });
    
    console.log(uploadResult);
    

    const optimizeUrl = cloudinary.url('shoes', {
        fetch_format: 'auto',
        quality: 'auto'
    });
    
    console.log(optimizeUrl);
    

    const autoCropUrl = cloudinary.url('shoes', {
        crop: 'auto',
        gravity: 'auto',
        width: 500,
        height: 500,
    });
    
    console.log(autoCropUrl);    
}
catch(e){ return res.status(500).send({status:false, msg:e.Message}) }
};

