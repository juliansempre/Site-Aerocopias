const express = require('express');
const path = require('path');
const nodeMailer = require('nodemailer');
const bodyParser = require('body-parser');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Add proxy middleware
app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://localhost:5000',
    changeOrigin: true,
  })
);

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const port = 3080;

app.get('/', function (req, res) {
  res.render('http://localhost:3000/');
});

app.post('/send-email', function (req, res) {
  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    //port: 465,
    secure: true,
    auth: {
      user: 'aerocopiasmidia@gmail.com',
      pass: 'cgteyyravahgqwgx',
    },
    tls:{
      rejectUnauthorized: false,
    },
  });
  const mailOptions = {
    from: '"Contato pelo site: " <aerocopiasmidia@gmail.com>', // sender address
    to: 'aerocopias@gmail.com', // list of receivers
    replyTo: 'juliansilvacontato@gmail.com',
    subject: req.body.nome + ' entrou em contato pelo site', // Subject line
    text: '', // plain text body
    html:
      'Nome: ' + req.body.nome + '<br> Email: ' + req.body.senha + '<br> Mensagem: ' + req.body.contato,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    res.redirect('http://localhost:3000/');
  });
});

app.listen(port, function () {
  console.log('Server is running at port: ', port);
});
