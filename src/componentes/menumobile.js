import React from 'react'
import $ from 'jquery'
import logo1 from './img/white-logo.png'
import Fechar1 from './img/menumobsair.png'
import menumob from './img/menumob.png'
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function MenuMobile(){
    const navigate = useNavigate();

    function PriPage(){
        navigate("/");
        
    }
    function QuemsomosA(){
        navigate("/");
       var tempo = setInterval(() => {
        
        
            //alert();
                var quemsomo = document.querySelector('#meumodal');
            quemsomo.click();
            

        
        }, 600);
        setTimeout(() => { clearTimeout(tempo); }, 601);
        
    }
    function goToSecondPage(){
        navigate("/Grafica");
        
    }
    function goToBrind(){
        navigate("/Brindes");
        
    }
    function TrPage(){
        navigate("/Produtos");
        
    }
    var contatu =()=>{
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
 
    var acaomob =()=> {
        $("#mobmenu1").append("<style>#mobmenu1{display: flex;} .menumobi{position: absolute; top: 0px;}</style>");
        $("#mobmenu0").append("<style>#mobmenu0 img:nth-child(2){display: none;}</style>");
        $("#mobmenu0").append("<style>#mobmenu0 img:nth-child(3){display: flex;}</style>");
    }
    var fecharmob =()=>{
        $("#mobmenu1").append("<style>#mobmenu1{display: none;} .menumobi{position: relative;}</style>");
        $("#mobmenu0").append("<style>#mobmenu0 img:nth-child(2){display: flex;}</style>");
        $("#mobmenu0").append("<style>#mobmenu0 img:nth-child(3){display: none;}</style>");
    }
   
return(
	<>
    <div className='menumobi'  id='subir'>
    <nav id='mobmenu0'>
    <img  src={logo1}></img>
    <img  src={menumob} onClick={acaomob}></img>
    <img  src={Fechar1} onClick={fecharmob}></img>
    </nav>

    <nav id='mobmenu1'>
    <ul>
    <a onClick={PriPage}><li>INICIO</li></a>
    <a onClick={QuemsomosA}><li>QUEM SOMOS</li></a>
    <a className="dropdown-item" type="button" onClick={catabtn}><li>CATÁLOGO</li></a>
    <a className="dropdown-item" type="button" onClick={goToSecondPage}><li>GRÁFICA RÁPIDA</li></a>
    <a className="dropdown-item" type="button" onClick={TrPage}><li>PRODUTOS</li></a>
    <a onClick={goToBrind}><li>BRINDES PERSONALIZADOS</li></a>
    <a onClick={contatu}><li>CONTATO</li></a>
    </ul>
    </nav>
    </div>

	</>
)
}



