import React from 'react';

const char = (props) => {
  const estilo = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    border: '1px solid black',
    textAlign: 'center'
  }

  return (
    <div style={estilo} onClick={props.clicked}>
      {props.character}
    </div>
  );

  
};

export default char;


