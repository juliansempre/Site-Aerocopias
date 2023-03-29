import React from 'react'
import $ from 'jquery'

$('.modal').on('.modal-body', function () {
	$('.btn').trigger('focus')
});

var oiea =()=>{
	alert();
}

// var expmodal =()=>{
//   var modi = document.querySelector('#meumodal');
//   modi.click();
  
// }
// expmodal();


export default function bloco3(){

return(
	<>
	<p>POLITICA DE QUALIDADE</p>
    <p>Proporcionar o melhor atendimento aos seus clientes, planejando uma melhor relação custo benefício, excedendo suas expectativas no curto, médio e longo prazo, preparando e valorizando seus colaboradores. Nosso objetivo é minimizar o seu trabalho na procura de fornecedores gráficos, interagindo com sua empresa na forma de uma parceria sólida, oferencendo soluções e serviços inteligentes, visando economia com qualidade em seus materiais, mantendo-os sempre atualizados.
Estamos comprometidos em oferecer-lhes produtos e serviços personalizados com atendimento diferenciado por meio de diferentes profissionais que vão analisar como cada impresso utilizado e oferecer sempre alternativas mais efetivas e inteligentes.</p>


<div className="container mt-3">
  
  <button type="button" id='meumodal' className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
	Saiba mais
  </button>
</div>

<div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">


      <div className="modal-header">
        <h4 className="modal-title">Quem somos</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>

    
      <div className="modal-body">
<p> </p>
<p>A Aero cópias nasceu no de 2010, um jovem com espirito empreendedor que já tinha o conhecimento da área de impressão gráfica, junto com um amigo resolveram abrir sua própria empresa. Com um ano de loja surge a oportunidade de abrir uma segunda loja em um bairro próximo e dessa oportunidade surge a decisão de separação da sociedade dos amigos. A partir dai inicia um novo ciclo, a marca Aero Cópias começa a crescer em passos largos, onde o seu mentor Saulo Carvalho Amado, dedica seu tempo de forma quase integral no crescimento da loja. Com 3 anos e 4 meses da primeira loja, inaugura-se a segunda loja com a gestão do Saulo, no bairro da aroeira e logo após a aquisição de uma marca já existente no mercado a Info Cópya no centro de Macaé. O trabalho de excelência, bom atendimento e qualidade leva o Grupo Aero Cópias a crescer cada dia mais.</p>

<p className='titulomodal1'>VISÃO DE FUTURO</p>

<p>Ser a líder no seguimento de impressão digital, impressão, encadernação, gráficas rápidas, cópias, plastificação e confecção de letreiros.</p>

<p className='titulomodal1'>POLÍTICA DE QUALIDADE</p>

<p>Proporcionar o melhor atendimento aos seus clientes, planejando uma melhor relação custo benefício, excedendo suas expectativas no curto, médio e longo prazo, preparando e valorizando seus colaboradores.</p>

<p className='titulomodal1'>VALORES</p>

<p>Ética, Respeito, Honestidade, Profissionalismo, Excelência no Atendimento, Satisfação do Cliente, Presteza e boa vontade, Zelo pela marca da empresa, Bem estar dos colaboradores, Trabalho em equipe.</p>


      </div>

   
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Sair</button>
      </div>

    </div>
  </div>
</div>


	</>
)
}