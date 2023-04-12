import React from 'react'
import ImLogo from './img/logocolor.png'
import { useState } from 'react';
import emailjs from 'emailjs-com';

let testo =()=>{
    try{
        var form = document.querySelector('#contatoLink');
        var nome = document.querySelector('#nome');

        form.addEventListener('submit', function(e) {
            // alerta o valor do campo
            alert(nome.value);
        
            // impede o envio do form
            e.preventDefault();
        });
    }catch(e){
        alert(e);
    }

};
var EmManutencao =()=>{
alert('Em manutenção! Você pode entrar em contato pelo whatsapp');
}

function exibirAlerta() {
    alert('Preencha todos os campos obrigatórios.');
  }
export default function Bloco5(){

    //Formulario de contato

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
  
    function sendEmail(e){
      e.preventDefault();
    if(name === "" || email === "" || message === "" ){
      alert("preencha os campos!");
      return;
    }
    
    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }
    // Ordem Emailjs: service | template | template params | Public key
    emailjs.send("service_b3hdrx4","template_6q980mb", templateParams,"LhScN5B2fMz8mIjha")
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      alert("Email enviado!");
      setName('')
      setEmail('')
      setMessage('')
      
    }, (err) =>{
      console.log("ERRO: ", err)
      alert("Erro! Não foi possível enviar seu email.");
    })
    
    }

return(
	<>
    <div className='containerBloco5'>

	<div className='redesSocias1'>
        <img src={ImLogo}></img>
<p>ATENDIMENTO ONLINE E PRESENCIAL</p>
<p>
Segunda à Sexta: 9h às 18h <br></br>
Sábado de 9h às 13h
</p>
<br></br>

    </div>


    <div className='contato' id='contatoLink' >
    
    <center> <p>Entre em contato conosco</p></center>
    <br/>
    <form onSubmit={sendEmail} class="formulario1">
        
    <center> <input type="text" id="nome" placeholder='Digite o seu nome' onChange={(e) => setName(e.target.value)} value={name}></input></center>
        <br/>
        <center> <input type="text" id="senha" placeholder='Digite o seu e-mail' onChange={(e) => setEmail(e.target.value)} value={email}></input></center>
        <br/>
        <center>   <input id="contato" type="textarea" onChange={(e) => setMessage(e.target.value)} value={message}></input></center>
        <br/>
        <div>
        
        <button className='botContato btn btn-primary' name="Enviar" type="submit">Enviar</button>
        <button className='botContato btn btn-primary'>Limpar</button>
        </div>
    </form>
    </div>

    </div>
	</>
)
}
