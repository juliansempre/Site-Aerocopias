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


export default function Produtos(){
	
return(
	<>
	<p>PRODUTOS</p>
<div className='graficacabecalho'>

</div>

<MenuMobile />
<Menu />

	<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://blog.graficamarreco.com/wp-content/uploads/2018/12/capa-1000x576.jpg" 
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Artes Gráficas
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Pedir pelo Whatsapp
        </Button>
      </CardActions>
    </Card>
	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.410180972254!2d-41.75838458561788!3d-22.33813582344126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96301320a4e123%3A0x39ccc0e62b9a23a3!2sAero%20C%C3%B3pias%20Maca%C3%A9%20aeroporto!5e0!3m2!1spt-BR!2sbr!4v1678466724749!5m2!1spt-BR!2sbr" width="600" height="450" className="mapa1" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>	
<Rodape/>
	</>
)
}