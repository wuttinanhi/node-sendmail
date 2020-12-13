const nodemailer = require('nodemailer');

const SERVICE = process.env.SERVICE
const SENDER_EMAIL = process.env.SENDER_EMAIL
const SENDER_PASSWORD = process.env.SENDER_PASSWORD

const RECIEVER_EMAIL  = process.env.RECIEVER_EMAIL
const SUBJECT  = process.env.SUBJECT
const CONTENT = process.env.CONTENT

// setup mail transporter service
const transporter = nodemailer.createTransport({
  service: SERVICE,
  auth: {
    user: SENDER_EMAIL,    // Sender email
    pass: SENDER_PASSWORD  // Sender password
  }
});

// setup email data with unicode symbols
const mailOptions = {
  from: SENDER_EMAIL,    // Sender
  to: RECIEVER_EMAIL,    // Recievers
  subject: SUBJECT,      // Mail subject
  html: CONTENT          // HTML body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function (err, info) {
   if(err){
    console.log(err);
   }else{
    console.log(info);
   }
});