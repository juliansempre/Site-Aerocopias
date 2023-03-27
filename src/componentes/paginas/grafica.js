import React from 'react';
import Menu from './componentesPaginas/menu.js'
import MenuMobile from '../menumobile.js'
import Rodape from '../footer.js'

const Grafica = () => (
 
    <div className="title">

<MenuMobile />
<Menu />
        <h4>Grafica</h4>
       
        <p>Aqui estão as informações a meu respeito</p>


<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.410180972254!2d-41.75838458561788!3d-22.33813582344126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96301320a4e123%3A0x39ccc0e62b9a23a3!2sAero%20C%C3%B3pias%20Maca%C3%A9%20aeroporto!5e0!3m2!1spt-BR!2sbr!4v1678466724749!5m2!1spt-BR!2sbr" width="600" height="450" className="mapa1" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>	
<Rodape/>
    </div>
    
);

export default Grafica;