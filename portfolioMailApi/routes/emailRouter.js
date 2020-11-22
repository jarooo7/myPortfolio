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
      user: 'jarpiotr56a@gmail.com',
      pass: 'SwEmKo&7!1'
    }
  }); 

 
  var mailOptions = {
    from: 'jarpiotr56a@gmail.com',
    to: 'jarek564as@gmail.com',
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
      res.send({success: 'Wiadomość wysłana'})
    }
  });
})


module.exports = emailRouter;