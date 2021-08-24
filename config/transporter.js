const nodemailer = require('nodemailer')

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    //465 puerto seguro SSL // 587, puerto default TLS
    secure: true, // true for 465, false for other ports
    auth: {
        user: "julieta.gold@gmail.com", // user Mail
        pass: "qaucdwfiecinkrjj", // password user Mail
    },
});

module.exports = transporter