const nodemailer = require('nodemailer');

// variable
const SERVICE = process.env.SERVICE

const SENDER_EMAIL = process.env.SENDER_EMAIL
const SENDER_USERNAME = process.env.SENDER_USERNAME

const SENDER_PASSWORD = process.env.SENDER_PASSWORD

const RECIEVER_EMAIL  = process.env.RECIEVER_EMAIL
const SUBJECT  = process.env.SUBJECT
const CONTENT = process.env.CONTENT

// setup mail transporter service
let TransportData = {};

// service is sendgrid?
if(SERVICE === "sendgrid"){
  TransportData = {
    host: 'smtp.sendgrid.net',
    port: 465,
    secure: true,
    auth: {
      user: SENDER_USERNAME,
      pass: SENDER_PASSWORD
    }
  }
}else{
  TransportData = {
    service: SERVICE,
    auth: {
      user: SENDER_EMAIL,
      pass: SENDER_PASSWORD
    }
  }
}

// setup mail transporter service
const transporter = nodemailer.createTransport(TransportData);

// setup email data
const mailOptions = {
  from: SENDER_EMAIL,
  to: RECIEVER_EMAIL,
  subject: SUBJECT,
  html: CONTENT
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function (err, info) {
   if(err){
    console.log(err);
   }else{
    console.log(info);
   }
});