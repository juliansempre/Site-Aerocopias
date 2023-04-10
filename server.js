var express = require('express'),
    path = require('path'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');
	
    var app = express();
    app.set('view engine', 'ejs');
    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    var port = 3080;
    app.get('/', function (req, res) {
      res.render('http://localhost:3000/');
    });


    app.post('/send-email', function (req, res) {
		let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          //port: 465,
          secure: true,
          auth: {
              user: 'aerocopiasmidia@gmail.com',
              pass: 'cgteyyravahgqwgx'
          },
		  tls:{
        rejectUnauthorized: false
      }
      }); 
      let mailOptions = {
          from: '"Contato pelo site: " <aerocopiasmidia@gmail.com>', // sender address
          to: "aerocopias@gmail.com", // list of receivers
		  replyTo:'juliansilvacontato@gmail.com',
          subject: req.body.nome + " entrou em contato pelo site", // Subject line
          text:  "",// plain text body          
          html: "Nome: " + req.body.nome + "<br> Email: " + req.body.senha + "<br> Mensagem: " + req.body.contato,
      };
	  
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.render('index');
          });
      });
          app.listen(port, function(){
            console.log('Server is running at port: ',port);
          });
