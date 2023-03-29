import React from 'react'
import { useNavigate } from "react-router-dom";
import $ from 'jquery'
import logo1 from '../../img/white-logo.png'
import Header from '../../header';
import { Button } from 'bootstrap';
import Up from '../../img/up.png'
import Dropdown from 'react-bootstrap/Dropdown';


export default function Menu(){
    const navigate = useNavigate();

    function goToSecondPage(){
        navigate("/Grafica");
        
    }
    function goToBrind(){
        navigate("/Brindes");
        
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
    function Su(){
       window.scrollTo({ top: 0, behavior: 'smooth' });
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
        
            $(".info").append("<style>.sairFixo {display:block;} .info{position:fixed; z-index: 211; background-color:rgb(0,0,0,60%);} .botmenu1{color: red;}</style>");
        }else{
            $(".info").append("<style>.sairFixo {display:none;} .info{position:absolute;  z-index: 219; background-color: black; display:flex;} </style>");
        }
    
    });
    
    
return(
	<>
	<div className='info' id='subir'>
               <img src={logo1} className='logo1'></img>
    
                <ul className="menu">
                <li><a onClick={Inicio} className='botmenu1'>INICIO</a></li>
                <li><a className='quemsomosheader' onClick={QuemsomosA} data-bs-toggle="modal" data-bs-target="#myModal">QUEM SOMOS</a></li>
                <li><a href='#'>
                  
                    <Dropdown>
                    <Dropdown.Toggle variant="btn btn-dark" id="dropdown-basic">
                    NOSSOS PRODUTOS
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item onClick={catabtn}>Catalogo</Dropdown.Item>
                    <Dropdown.Item onClick={goToSecondPage}>Gráfica rápida</Dropdown.Item>
                    <Dropdown.Item onClick={TrPage}>Produtos</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                  
                </a></li>
                <li><a onClick={goToBrind} className='botmenu1'>BRINDES PERSONALIZADOS</a></li>
                <li><a onClick={ContatoA} className='botmenu1'>CONTATO</a></li>

                </ul>
                <button className="zap" onClick={Header.zapbtn}>Whatsapp</button>
                <button className='sairFixo' onClick={()=>{ $(".info").append("<style>.info{display: none;} </style>");}}> X </button>

            </div>

            <a onClick={Su} className='subira' ><img src={Up} alt='Voltar para o topo'></img></a> 
	</>
)
}