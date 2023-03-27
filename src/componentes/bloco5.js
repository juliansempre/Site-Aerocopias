import React from 'react'
import ImLogo from './img/logocolor.png'


let testo =()=>{
    try{
        var form = document.querySelector('#contatoLink');
        var nome = document.querySelector('nome');

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

export default function bloco5(){
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
    <form action='envia.php' onsubmit="return verifica();" name="formu" method="POST" enctype="multipart/form-data">
        
    <center> <input type="text" id="nome" placeholder='Digite o seu nome'></input></center>
        <br/>
        <center> <input type="text" id="email" placeholder='Digite o seu e-mail'></input></center>
        <br/>
        <center>   <input id="mensagem" type="textarea"></input></center>
        <br/>
        <div>
        
        <button className='botContato btn btn-primary' onClick={testo} >Enviar</button>
        <button className='botContato btn btn-primary'>Limpar</button>
        </div>
    </form>
    </div>

    </div>
	</>
)
}