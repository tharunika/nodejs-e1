var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'thavarasatharunika83@gmail.com',
    pass: 'tharuni31'
  }
});

var mailOptions = {
  from: 'thavarasatharunika83@gmail.com',
  to: 'info@uki.life ',
  subject: 'Testing my nodemailer module',
  text: 'This is easy !'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
