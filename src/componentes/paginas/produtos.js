import React from 'react'
import Menu from './componentesPaginas/menu.js'
import MenuMobile from '../menumobile.js'
import Rodape from '../footer.js'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import $ from 'jquery'

// Grid layout
// <Row><Col>1 of 1</Col><Col>1 of 1</Col><Col>1 of 1</Col><Col>1 of 1</Col></Row>

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Card1, Card2, Card3, Card4, Card5, Card6, 
  Card7, Card8, Card9, Card10, Card11, Card12, 
  Card13, Card14, Card15, Card16} from './componentesPaginas/cards.js'

var catalogoVer =()=>{
  window.open("https://wa.me/c/5522997161628");
}

export default function Produtos(){
	
return(
	<>

<MenuMobile />

<p className='textoProdutos text-center'>PRODUTOS<br></br>EM DESTAQUE</p>

<div className='graficacabecalho'>

</div>

  <Menu />
 


    <div className='produtosCard'>
    <Container>
      <Row>
        <Col><Card1 /> </Col><Col><Card2 /></Col><Col><Card3 /></Col><Col><Card4 /></Col>
      </Row>
      <Row>
      <Col><Card5 /> </Col><Col><Card6 /></Col><Col><Card7 /></Col><Col><Card8 /></Col>
      </Row>
      <Row>
      <Col><Card9 /> </Col><Col><Card10 /></Col><Col><Card11 /></Col><Col><Card12 /></Col>
      </Row>
      <Row>
      <Col><Card13 /> </Col><Col><Card14 /></Col><Col><Card15 /></Col><Col><Card16 /></Col>
      </Row>
    </Container>
    </div>
    <button type="button" onClick={catalogoVer} class="btn btn-primary vermaisprodutos">Ver mais</button>
	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.410180972254!2d-41.75838458561788!3d-22.33813582344126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96301320a4e123%3A0x39ccc0e62b9a23a3!2sAero%20C%C3%B3pias%20Maca%C3%A9%20aeroporto!5e0!3m2!1spt-BR!2sbr!4v1678466724749!5m2!1spt-BR!2sbr" width="600" height="450" className="mapa1" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>	
<Rodape/>

	</>
)
}