import React from 'react'
import Topo from './header.js'
import Slide from './slide.js'
import Footer1 from './footer.js'
import Bloco3 from './bloco3.js'
import Bloco6 from './bloco6.js'
import Bloco5 from './bloco5.js'
import Bloco4 from './bloco4.js'
import Bloco2 from './bloco2.js'
import MenuMobile from './menumobile'
import $ from 'jquery'

export default function  Corpo(){
return(
	<>
  
        <header>
        <MenuMobile />
       
        
        {
        // Corpo da pagina aqui
        }
        <div className='mae'>
        <div>{
            //1
            }
            <div className='slide1'><Slide/></div>
        </div>
        <div>
              {
            //2
            }
            <Bloco2/>
        </div>
        <div>
        {
            //3
            }
            <Bloco3/>
        </div>
        <div>
            {
            //4
            }
            <Bloco4/>
        </div>
        <div>
            {
            //5
            }
            <Bloco5/></div>
        </div>
        <div>
            {
            //6
            }
            <Bloco6/></div>
        <div>
            {
            //7
            }
            <Footer1/>
        </div>
        {
        // fim div mae
        }
        
    </header>

	</>
)
}