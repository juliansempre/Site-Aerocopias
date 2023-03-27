import React from 'react'
import $ from 'jquery'
import imagem1 from './img/paraoslide1.jpg'
import imagem2 from './img/paraoslide2.jpg'
import imagem3 from './img/paraoslide3.jpg'
import imagem4 from './img/paraoslide4.jpg'
import esq from './img/esquerda.png'
import dir from './img/direira.png'

var a = 250;
var ir = function(){
  a = 250;
  setTimeout(() => {
    if(a = 250){
      a = 150
      $(".carrosselSlideMae").append("<style> .carrosselSlideMae img{transform: translateX("+a+"%);}</style>");
    }
  }, 2000);
  setTimeout(() => {
    if(a = 150){
      a = 50;
      $(".carrosselSlideMae").append("<style> .carrosselSlideMae img{transform: translateX("+a+"%);}</style>");
    }
  }, 4000);
  setTimeout(() => {
    if(a = 50){
      a = -50;
      $(".carrosselSlideMae").append("<style> .carrosselSlideMae img{transform: translateX("+a+"%);}</style>");
    }
  }, 6000);
  setTimeout(() => {
    if(a = -50){
      a = -150;
      $(".carrosselSlideMae").append("<style> .carrosselSlideMae img{transform: translateX("+a+"%);}</style>");
    }
    
  }, 8000);
}

window.onload = function(){
  ir();
}

setInterval(() => {
ir();
}, 10000);

var desliga1 =()=>{
  ir = "";
}

var nextSli =()=>{
 
  if(nextSli){
    setInterval(() => {
      desliga1();
    }, 1000);
   
    if(a >= -50 && a <= 150){
      a = a - 100;
      $(".carrosselSlideMae").append("<style> .carrosselSlideMae img{transform: translateX("+a+"%);}</style>");
    }
  }
}
var prevSli =()=>{
if(prevSli){
  setInterval(() => {
    desliga1();
  }, 1000);
  
  if(a >= -150 && a <= 50){
    a = a + 100;
    $(".carrosselSlideMae").append("<style> .carrosselSlideMae img{transform: translateX("+a+"%);}</style>");
  }
}
}

export default function App(){
return(
	<>
	
<div className='carrosselSlideMae'> 

<img src={imagem1}></img>
<img src={imagem2}></img>
<img src={imagem3}></img>
<img src={imagem4}></img>
</div>
<div className='botSli'>
<a  onClick={prevSli} className="carousel-control-prev-icon"> <img src={esq} ></img> </a>
<a  onClick={nextSli} className="carousel-control-next-icon"> <img src={dir}></img> </a> 
</div>
</>
)
}