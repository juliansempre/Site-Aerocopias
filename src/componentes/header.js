import React from 'react'
import logo1 from './img/white-logo.png'
import $ from 'jquery'
import Up from './img/up.png'



let zapbtn=()=>{
    window.open("https://wa.me/message/GMZWBWNO434JN1");
}

window.onload = function(){ 
    sairDoFixo();
   }

$(window).on('scroll', function() {
    if($(window).scrollTop() > 500) {
        $(".subira").show();
        $(".barraFixa").show(); 
    }else{
        $(".subira").hide();
        $(".barraFixa").hide(); 
    }

});
var sairDoFixo =()=>{
    $(".barraFixa").hide(); 
}

export default function header(){
return(
	<>
    <header>
<div className='barraFixa'>

            <div className='info infoFixo'>
               <img src={logo1} className='logo1 logo1Fixo'></img>
    
                <ul className="menu">
                <li><a href='#'>INICIO</a></li>
                <li><a className='quemsomosheader2' data-bs-toggle="modal" data-bs-target="#myModal">QUEM SOMOS</a></li>
                <li><a href='#'>
                        <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle btnFixo" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                        NOSSOS PRODUTOS
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li><button className="dropdown-item" type="button">Canecas</button></li>
                        <li><button className="dropdown-item" type="button">Placa de pvc</button></li>
                        <li><button className="dropdown-item" type="button">letreiros</button></li>
                        </ul>
                        </div>
                    
                </a></li>
                <li><a href='#'>BRINDES PERSONALIZADOS</a></li>
                <li><a href='#contatoLink'>CONTATO</a></li>

                </ul>
                <button className="zap zapFixo" onClick={zapbtn}>Whatsapp</button>
                <button className="sairFixo" onClick={sairDoFixo} alt="Fechar">X</button>
            </div>
     
</div>
        {
            //barraFixa acaba aqui
        } 
         <div className='cabecalho' id="bot" >
            <div className='info' id='subir'>
               <img src={logo1} className='logo1'></img>
    
                <ul className="menu">
                <li><a href='#'>INICIO</a></li>
                <li><a className='quemsomosheader' data-bs-toggle="modal" data-bs-target="#myModal">QUEM SOMOS</a></li>
                <li><a href='#'>
                        <div className="dropdown">
                        <button className="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                        NOSSOS PRODUTOS
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li><button className="dropdown-item" type="button">Canecas</button></li>
                        <li><button className="dropdown-item" type="button">Placa de pvc</button></li>
                        <li><button className="dropdown-item" type="button">letreiros</button></li>
                        </ul>
                        </div>
                    
                </a></li>
                <li><a href='#'>BRINDES PERSONALIZADOS</a></li>
                <li><a href='#contatoLink'>CONTATO</a></li>

                </ul>
                <button className="zap" onClick={zapbtn}>Whatsapp</button>

            </div>
            <div className='chamada1'>
            <div>
            <p>Sua gr??fica r??pida 
                <br></br> 
            em Maca??</p>
            <p> Siga nossas redes sociais e fique por dentro 
            <br></br>de nossas novidades e promo????es</p>
            </div>
            <div></div>
            </div>
        </div>


        <a href='#subir' className='subira' ><img src={Up} alt='Voltar para o topo'></img></a> 
    </header>
	</>
)
}