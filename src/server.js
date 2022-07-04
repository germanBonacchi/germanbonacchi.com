const express = require('express')
const nodemailer = require('nodemailer')
const app = express()

app.post('/send-email', (req, res) => {
 var transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
   user: 'jarred.okeefe84@ethereal.email',
   pass: 'kxm1Hx5GMfWGf6xjeW',
  },
 })
 var mailOptions = {
  from: 'Remitente',
  to: 'bonacchigerman@gmail.com',
  subject: 'HOla',
  text: 'asdasdasd',
 }
 transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
   res.status(500).send(error.message)
  } else {
   console.log('Email sent: ' + info.response)
   res.status(200).jsonp(req.body)
  }
 })
 console.log('Email enviado')
})

app.listen(3000, () => console.log('Server Running on '))
