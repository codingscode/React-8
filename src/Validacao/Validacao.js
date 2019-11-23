import React from 'react';

const validacao = (props) => {
  let menssagemValidacao = 'Texto grande o suficiente';

  if (props.entradaComprimento <= 5) {
    menssagemValidacao = 'Texto bem curto';
  }
  
  return (
    <div>
     <p>{menssagemValidacao}</p>
    </div>
  );
};

export default validacao;


