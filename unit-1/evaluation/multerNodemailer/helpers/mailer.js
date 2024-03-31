
const nodemailer = require('nodemailer');
const generateOtp = require('./generatOtp');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
    }
});

const sendMail = async (email) => {
    try {
      const otp=generateOtp();


        var mailOptions = {
            from: process.env.SMTP_MAIL,
            to: email,
            subject: "OTP form Stock Market",
            text: `Your OTP is :${otp}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            }

            console.log("Mail sent", info.messageId);
        });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    sendMail
}
