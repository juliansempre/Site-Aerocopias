import React from 'react'
import Menu from './paginas/componentesPaginas/menu.js'

export default function App(){
    var data = new Date();
    var hora    = data.getHours();  

    if(hora >= 6 && hora <= 11 ) {
        document.title =' Bom dia';
    }
    else if(hora >= 12 && hora <= 17 ) {
        document.title =' Boa tarde';
    }
    else if(hora >= 18 && hora <= 23) {
        document.title =' Boa noite';
    }else if(hora >= 0 && hora <= 5 ) {
        document.title =' Boa madrugada';
    }

  
return(
	<>
    <Menu/>
    <div className='prbloco1'>
    <div className='esquerdabloco1'>

        <div className='chamada1' id="subir">
        <div >
        <p>Sua Gráfica Rápida 
        
        em Macaé</p>
        <p> Siga nossas redes sociais e fique por dentro 
        de nossas novidades e promoções</p>
        </div>
        <div></div></div>

    </div>
    <div className='direitabloco1'></div>
    <div></div>
    </div>
	
	</>
)
}