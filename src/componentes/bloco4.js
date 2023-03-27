import React from 'react'
import $ from 'jquery'
import imag1 from './img/catalogo1.jpg'
import imag2 from './img/catalogo2.jpg'
import imag3 from './img/catalogo3.jpg'
import imag4 from './img/catalogo4.jpg'
import imag5 from './img/catalogo5.jpg'
import imag6 from './img/catalogo6.jpg'
import imag7 from './img/catalogo7.jpg'
import imag8 from './img/catalogo8.jpg'
import imag9 from './img/catalogo9.jpg'
import imag10 from './img/catalogo10.jpg'
import imag11 from './img/catalogo11.jpg'
import imag12 from './img/catalogo12.jpg'
import imag13 from './img/catalogo0.jpg'
import { redirect } from 'react-router-dom'

// var numero0 = 300;
// var numero1 = numero0 + 300;
// setInterval(function(){ 
//                 $(".cardMae").append("<style>.cardMae{transform: translateX("+numero1+"px);}</style>");
// },5000);


setInterval(() => {
    let i = -1200;
      setTimeout(() => {
        $(".cardMae").append("<style>.cardMae{transform: translateX("+i+"px);}</style>");
    }, 2000);
    setTimeout(() => {
        if(i = -1200){ 
            i = -900;
        $(".cardMae").append("<style>.cardMae{transform: translateX("+i+"px);}</style>");
    }
    }, 4000);
    setTimeout(() => {
        if(i = -900){ 
            i = -600;
        $(".cardMae").append("<style>.cardMae{transform: translateX("+i+"px);}</style>");
    }
    }, 6000);
    setTimeout(() => {
        if(i = -600){ 
            i = -300;
        $(".cardMae").append("<style>.cardMae{transform: translateX("+i+"px);}</style>");
    }
    }, 8000);
    setTimeout(() => {
        if(i = -300){ 
            i = 0;
        $(".cardMae").append("<style>.cardMae{transform: translateX("+i+"px);}</style>");
    }
    }, 10000);
    setTimeout(() => {
        if(i = 0){ 
            i = 300;
        $(".cardMae").append("<style>.cardMae{transform: translateX("+i+"px);}</style>");
    }
    }, 12000);
    setTimeout(() => {
        if(i = 300){ 
            i = 600;
        $(".cardMae").append("<style>.cardMae{transform: translateX("+i+"px);}</style>");
    }
    }, 14000);
    setTimeout(() => {
        if(i = 600){ 
            i = 900;
        $(".cardMae").append("<style>.cardMae{transform: translateX("+i+"px);}</style>");
    }
    }, 16000);
    
 }, 18000);
   

    
    




export default function Bloco4(){
return(
	<>
    <div className='cardi'>
    <div className='cardMae'>
    <img src={imag1}></img>
    <img src={imag2}></img>
    <img src={imag3}></img>
    <img src={imag4}></img>
    <img src={imag5}></img>
    <img src={imag6}></img>
    <img src={imag7}></img>
    <img src={imag8}></img>
    <img src={imag9}></img>
    <img src={imag10}></img>
    <img src={imag11}></img>
    <img src={imag12}></img>
    <img src={imag13}></img>

    </div>
    </div>
	</>
)
}