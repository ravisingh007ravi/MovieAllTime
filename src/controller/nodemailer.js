const nodemailer = require("nodemailer");
const userModel = require('../models/UserModel');
require('dotenv').config();

exports.restPassword = async (req, res) => {
    try {
        const data = req.body;
       
        const checkuserName = await userModel.findOne({ userName: data.userName });
        if (!checkuserName) return res.status(404).send({ status: false, msg: "User Not Found" });


        const transporter = nodemailer.createTransport({
            service: "gmail",
            secure: true,
            port: 465,
            auth: {
                user: process.env.UserNameNodeMailer,
                pass: process.env.Password
            }   
        });

        let randomOtp = Math.floor(1000 + Math.random() * 9999); 
        const info = await transporter.sendMail({
            from: '"Ravi Singh 👻😊💕😊" <your-email@gmail.com>', 
            to: checkuserName.userName, 
            subject: "Your Email OTP to Reset Password on MoviesAll",
            
            html: `
            <div style="background-color:#16253D;padding:20px;color:#fff;font-family:Arial, sans-serif;border-radius:10px;">
                <h2 style="color:#FF4500;">MoviesAll</h2>
                <p>Hi ${checkuserName.name},</p>
                <p>Please find your One Time Password (OTP) for reset password below:</p>
                <div style="background-color:#fff;color:#000;font-size:24px;font-weight:bold;text-align:center;padding:10px;margin:20px 0;border-radius:5px;">
                    ${randomOtp}
                </div>
                <p>The OTP is valid for 5 minutes.</p>
                <p>For account safety, do not share your OTP with others.</p>
                <br>
                <p>Regards,</p>
                <p>Team MoviesAll</p>
            </div>
            `,
        });

        return res.send(`Message sent: ${info.messageId}`);
    } catch (error) {
        return res.status(500).send({ msg: "Failed to send email", data: error });
    }
};
