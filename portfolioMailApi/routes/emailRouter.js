var express=require('express');
var bodyParser = require('body-parser')
var cors = require('./../cors');
const emailRouter = express.Router();
var nodemailer = require('nodemailer');

emailRouter.route('/')
.options(cors.cors,(req,res)=>{
    console.log("Coming email here");
    res.sendStatus(200);
})

.post(cors.cors,(req,res,next)=>{
  
  console.log("oooo",req.body.email)

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '************', //mail wysyłający
      pass: '**********'
    }
  }); 

 
  var mailOptions = {
    from: '***********8', //mail wysyłający
    to: '*************', //mail do wysłania
    subject: `Wiadomosc z portfolio`,
    html: req.body.email
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.send({error: 'Błąd wysyłania',
      msg: error
    })
    } else {
      res.send({success: 'success.email'})
    }
  });
})


module.exports = emailRouter;