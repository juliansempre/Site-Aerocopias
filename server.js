const express = require('express');
const path = require('path');
const nodeMailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const port = 3080;

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/send-email', function (req, res) {
// validação de campo vazio
  if (req.body.nome == "" || req.body.senha  == "" || req.body.contato == "" ) {
    res.redirect('https://aerocopias.net/');
    res.send('<script>exibirAlerta();</script>');
    return;
  }

  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    //port: 465,
    secure: true,
    auth: {
      user: 'aerocopiasmidia@gmail.com',
      pass: '_senha_de_App',
    },
    tls:{
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: '"Contato pelo site: " <aerocopiasmidia@gmail.com>',
    to: 'aerocopias@gmail.com',
    replyTo: 'juliansilvacontato@gmail.com',
    subject: req.body.nome + ' entrou em contato pelo site',
    text: '',
    html:
      'Nome: ' + req.body.nome + '<br> Email: ' + req.body.senha + '<br> Mensagem: ' + req.body.contato,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    res.redirect('https://aerocopias.net/');
  });
});

app.listen(port, function () {
  console.log('Server is running at port: ', port);
});
