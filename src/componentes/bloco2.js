import React from 'react'
import $ from 'jquery'
import Celular from './img/zapmao.png'
import Celular2 from './img/instamao.png'

export default function App(){


	
const zapApa =()=> {
	$(".marktext1").append("<style>.marktext1::after{ content: 'Atendemos também pelo Whatsapp';}</style>");
	$(".marktext2").append("<style>.marktext2::after{ content: 'Faça o seu orçamento, envie sua impressão ou tire suas dúvidas pelo nosso whatsapp.';}</style>");
	$(".markB").append("<style>.markB img:nth-child(2){display: none;} .markB img:nth-child(1){display: inline;}</style>");
	$(".markA").append("<style>.zzapbt{display:inline;} .instabt{display:none;} </style>");
	
}

const insApa =()=> {
	$(".marktext1").append("<style>.marktext1::after{ content: 'Siga-nos também no Instagram';}</style>");
	$(".marktext2").append("<style>.marktext2::after{ content: 'Fique atualizado diariamente com o nosso conteúdo!';}</style>");
	$(".markB").append("<style>.markB img:nth-child(1){display: none;} .markB img:nth-child(2){display: inline;}</style>");
	$(".markA").append("<style>.zzapbt{display:none;} .instabt{display:inline;} </style>");
	
}

function animazap(){
	setTimeout(() => {
		zapApa();
	}, 8000);
	setTimeout(() => {
		insApa();
	}, 16000);
}
animazap();
setInterval(() => {
animazap();
}, 16001);

let zapbtn2=()=>{
	window.open("https://wa.me/message/GMZWBWNO434JN1");
}
let instbtn1=()=>{
	window.open("https://www.instagram.com/aero.copias/");
}

return(
	<>

<div className='mark'>
<div className='markA'>
<p className="marktext1"></p>
<p className="marktext2"></p>
<button className='zzapbt' onClick={zapbtn2}> Whatsapp </button>
<button className='instabt' onClick={instbtn1}> Instagram</button>
</div>
<div className='markB'>
<img src={Celular}></img>
<img src={Celular2}></img>
</div>
</div>
	</>
)
}