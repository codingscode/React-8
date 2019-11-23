import React, { Component } from 'react';
import './App.css';
import Validacao from './Validacao/Validacao';
import Char from './Char/Char';

class App extends Component {
 
  state = {
    usuarioEntrada: ''
  }
  
  entradaManipulador = (evento) => {
    this.setState({usuarioEntrada: evento.target.value});
  }

  apagarManipuladorChar = (index) => {
    const texto = this.state.usuarioEntrada.split('');
    texto.splice(index, 1);
    const textoAtualizado = texto.join('');
    this.setState({usuarioEntrada: textoAtualizado});
  }

  render () {
    const charLista = this.state.usuarioEntrada.split('').map((ch, index) => {
      return <Char 
      character={ch} 
      key={index} 
      clicked={() => this.apagarManipuladorChar(index)}/>;
    })

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr />
        <input 
        type="text" 
        onChange={this.entradaManipulador} 
        value={this.state.usuarioEntrada}/>  
        <p>{this.state.usuarioEntrada}</p>
        <Validacao entradaComprimento={this.state.usuarioEntrada.length}/>
        {charLista}
      </div>
    );
  }
}

export default App;
