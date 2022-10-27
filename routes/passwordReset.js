const express = require("express");
const nodemailer = require("nodemailer");

const data = require(".././Models/DumData");

const router = express.Router();

var r = "nuffin";
router.post("/", async (req, res) => {

    // let testAccount = await nodemailer.createTestAccount();

    email = req.body.email;

    var obj = data.find(o => o.email == email);
    if(!obj) res.send("isnt in the db yo");
    else{

        r = (Math.random() +10).toString(36).substring(2);
        console.log("random", r);


    let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "youremail@gmail.com", // generated ethereal user
        pass: "APP_Password", // generated ethereal password
    },
    });
    let info = await transporter.sendMail({
    from: '"URG CRM "youremail@gmail.com', // sender address
    to: req.body.email, // list of receivers
    subject: "Your OTP for URG CRM", // Subject line
    text: "Your OTP is >> "+r, // plain text body
    html: "Your OTP is >> "+r, // html body
    });
    console.log("Message sent: %s", info.messageId);

    res.send("got it");

}

});

router.get("/",async (req,res)=>{
    console.log(r);
    res.send({"otp":r})
})

module.exports = router;