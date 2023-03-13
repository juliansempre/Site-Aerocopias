import React from 'react'
import imagem1 from './img/paraoslide1.jpg'
import imagem2 from './img/paraoslide2.jpg'
import imagem3 from './img/paraoslide3.jpg'
import imagem4 from './img/paraoslide4.jpg'

const imo = [imagem1, imagem2, imagem3, imagem4 ]

export default function App(){
return(
	<>
	<div id="demo" className="carousel slide" data-bs-ride="carousel">


<div className="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
</div>

<div className="carousel-inner">
  <div className="carousel-item active">
    <img src={imo[0]} alt="Los Angeles" className="d-block" ></img>
  </div>
  <div className="carousel-item">
    <img src={imo[1]} alt="Chicago" className="d-block"></img>
  </div>
  <div className="carousel-item">
    <img src={imo[2]} alt="New York" className="d-block"></img>
  </div>
  <div className="carousel-item">
    <img src={imo[3]} alt="New York" className="d-block"></img>
  </div>
</div>

<button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span className="carousel-control-next-icon"></span>
</button>
</div>
	</>
)
}