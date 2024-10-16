const express = require('express');
const multer = require('multer');
const router = express.Router();
const { createUser, getallUserData } = require('../controller/UserControler');
const { restPassword } = require('../controller/nodemailer')


const upload = multer({ storage: multer.diskStorage({}), });

router.post("/register", upload.single('profileImg'), createUser);
router.post("/restPassword", upload.single(), restPassword);
router.get("/getallUserData", getallUserData);


// router.post("/login", logInUserData);
// router.get("/user/:userId/profile", authentication, authorization, checkUserId, getUserData);
// router.put("/user/:userId/profile", authentication, authorization, checkUserId, updateUserData);

router.all('/*', (req, res) => {
    return res.status(404).send({ status: false, msg: "Invalid URL" });
});

module.exports = router;
