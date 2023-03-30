import $ from 'jquery'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



$('.modal').on('.modal-body', function () {
	$('.btn').trigger('focus')
});



// var expmodal =()=>{
//   var modi = document.querySelector('#meumodal');
//   modi.click();
  
// }
// expmodal();


export default function Bloco3(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

return(

	<>
	<p>POLITICA DE QUALIDADE</p>
    <p>Proporcionar o melhor atendimento aos seus clientes, planejando uma melhor relação custo benefício, excedendo suas expectativas no curto, médio e longo prazo, preparando e valorizando seus colaboradores. Nosso objetivo é minimizar o seu trabalho na procura de fornecedores gráficos, interagindo com sua empresa na forma de uma parceria sólida, oferencendo soluções e serviços inteligentes, visando economia com qualidade em seus materiais, mantendo-os sempre atualizados.
Estamos comprometidos em oferecer-lhes produtos e serviços personalizados com atendimento diferenciado por meio de diferentes profissionais que vão analisar como cada impresso utilizado e oferecer sempre alternativas mais efetivas e inteligentes.</p>

<Button variant="primary" onClick={handleShow} id='meumodal'>
        Saiba mais
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Quem Somos</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-justify'>

        <p>A Aero cópias nasceu no de 2010, um jovem com espirito empreendedor que já tinha o conhecimento da área de impressão gráfica, junto com um amigo resolveram abrir sua própria empresa. Com um ano de loja surge a oportunidade de abrir uma segunda loja em um bairro próximo e dessa oportunidade surge a decisão de separação da sociedade dos amigos. A partir dai inicia um novo ciclo, a marca Aero Cópias começa a crescer em passos largos, onde o seu mentor Saulo Carvalho Amado, dedica seu tempo de forma quase integral no crescimento da loja. Com 3 anos e 4 meses da primeira loja, inaugura-se a segunda loja com a gestão do Saulo, no bairro da aroeira e logo após a aquisição de uma marca já existente no mercado a Info Cópya no centro de Macaé. O trabalho de excelência, bom atendimento e qualidade leva o Grupo Aero Cópias a crescer cada dia mais.</p><br></br>

<p className='h5'>VISÃO DE FUTURO</p><br></br>

<p >Ser a líder no seguimento de impressão digital, impressão, encadernação, gráficas rápidas, cópias, plastificação e confecção de letreiros.</p><br></br>

<p className='h5'>POLÍTICA DE QUALIDADE</p><br></br>

<p>Proporcionar o melhor atendimento aos seus clientes, planejando uma melhor relação custo benefício, excedendo suas expectativas no curto, médio e longo prazo, preparando e valorizando seus colaboradores.</p><br></br>

<p className='h5'>VALORES</p><br></br>

<p>Ética, Respeito, Honestidade, Profissionalismo, Excelência no Atendimento, Satisfação do Cliente, Presteza e boa vontade, Zelo pela marca da empresa, Bem estar dos colaboradores, Trabalho em equipe.</p><br></br>
        </Modal.Body>
        <Modal.Footer className='justify-content-center pb-5'>
          <Button variant="secondary" onClick={handleClose}  className="btn btn-danger">
            Sair
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>

	</>
)
}