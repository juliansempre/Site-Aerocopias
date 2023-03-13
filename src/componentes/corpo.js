import React from 'react'
import Slide from './slide.js'
import Footer1 from './footer.js'
import Bloco3 from './bloco3.js'
import Bloco6 from './bloco6.js'
import Bloco5 from './bloco5.js'
import Bloco4 from './bloco4.js'

export default function  Corpo(){
return(
	<>
    <header>
        {
        // Corpo da pagina aqui
        }
        <div className='mae'>
        <div>{
            //1
            }
            <div className='slide1'><Slide/></div>
        </div>
        <div>2</div>
        <div>
        {
            //7
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