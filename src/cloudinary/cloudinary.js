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















// import { v2 as cloudinary } from 'cloudinary';
// require('dotenv').config()

// (async function() {

//     cloudinary.config({ 
//         cloud_name: process.env.CloudName, 
//         api_key: process.env.APIKey, 
//         api_secret: process.env.APISecret 
//     });
    
//     // Upload an image
//      const uploadResult = await cloudinary.uploader
//        .upload(
//            'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
//                public_id: 'shoes',
//            }
//        )
//        .catch((error) => {
//            console.log(error);
//        });
    
//     console.log(uploadResult);
    
//     // Optimize delivery by resizing and applying auto-format and auto-quality
//     const optimizeUrl = cloudinary.url('shoes', {
//         fetch_format: 'auto',
//         quality: 'auto'
//     });
    
//     console.log(optimizeUrl);
    
//     // Transform the image: auto-crop to square aspect_ratio
//     const autoCropUrl = cloudinary.url('shoes', {
//         crop: 'auto',
//         gravity: 'auto',
//         width: 500,
//         height: 500,
//     });
    
//     console.log(autoCropUrl);    
// })();