var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'joseph@dotogroup.com',
    pass: 'Babu13579@!@'
  }
});

var mailOptions = {
  from: 'joseph@dotogroup.com',
  to: 'tibin@dotogroup.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});