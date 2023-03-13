import React from 'react'



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
	
    <div className='contato' id='contatoLink' >
    
    <p>Entre em contato conosco</p>
    <br/>
    <form action='envia.php' onsubmit="return verifica();" name="formu" method="POST" enctype="multipart/form-data">
        <input type="text" id="nome" placeholder='Digite o seu nome'></input>
        <br/>
        <input type="text" id="email" placeholder='Digite o seu e-mail'></input>
        <br/>
        <input id="mensagem" type="textarea"></input>
        <br/>
        <div>
        <button className='botContato btn btn-primary' onClick={testo} >Enviar</button>
        <button className='botContato btn btn-primary'>Limpar</button>
        </div>
    </form>
    </div>

	</>
)
}