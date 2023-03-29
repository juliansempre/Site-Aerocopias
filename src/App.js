import React from 'react'
import Corpo from './componentes/corpo.js'
import './componentes/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//route conf
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Grafica from './componentes/paginas/grafica.js';
import Produtos from './componentes/paginas/produtos.js';
import Brindes from './componentes/paginas/brindes.js';

export default function App(){
return(
	<>
  
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Corpo/>} />
      <Route path="/Grafica" element={<Grafica />} />
      <Route path="/Produtos" element={<Produtos />} />
      <Route path="/Brindes" element={<Brindes />} />
  </Routes>
  </BrowserRouter>
	</>
)
}

