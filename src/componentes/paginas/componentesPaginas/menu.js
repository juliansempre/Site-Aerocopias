import React from 'react'
import { useNavigate } from "react-router-dom";
import $ from 'jquery'
import logo1 from '../../img/white-logo.png'
import Header from '../../header';


export default function Menu(){
    const navigate = useNavigate();

    function goToSecondPage(){
        navigate("/Grafica");
        
    }
    function TrPage(){
        navigate("/Produtos");
        
    }
    function Inicio(){
        navigate("/");
      
    }
    function QuemsomosA(){
        navigate("/");
        setTimeout(() => {
           var quemsomo = document.querySelector('.quemsomosheader');
           quemsomo.click();

        }, 500);
        
    }
    function ContatoA(){
        navigate("/");
        setTimeout(() => {
            $('html, body'). animate({ scrollTop: 1550}, 50);
    }, 500);
    }
    let zapbtn=()=>{
        window.open("https://wa.me/message/GMZWBWNO434JN1");
    }
    let catabtn=()=>{
        window.open("https://wa.me/c/5522997161628");
    }
    
    window.onload = function(){ 
        Header.sairDoFixo();
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
    
    
return(
	<>
	<div className='info' id='subir'>
               <img src={logo1} className='logo1'></img>
    
                <ul className="menu">
                <li><a onClick={Inicio}>INICIO</a></li>
                <li><a className='quemsomosheader' onClick={QuemsomosA} data-bs-toggle="modal" data-bs-target="#myModal">QUEM SOMOS</a></li>
                <li><a href='#'>
                        <div className="dropdown">
                        <button className="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                        NOSSOS PRODUTOS
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li><button className="dropdown-item" type="button" onClick={catabtn}>Catálogo</button></li>
                        <li><button className="dropdown-item" type="button" onClick={goToSecondPage}>Gráfica rápida</button></li>
                        <li><button className="dropdown-item" type="button" onClick={TrPage}>Produtos</button></li>
                        
                        </ul>
                        </div>
                    
                </a></li>
                <li><a href='#'>BRINDES PERSONALIZADOS</a></li>
                <li><a onClick={ContatoA}>CONTATO</a></li>

                </ul>
                <button className="zap" onClick={Header.zapbtn}>Whatsapp</button>

            </div>
	</>
)
}