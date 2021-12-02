import React, { Component } from "react";
import "./assets/App.css";
import "./assets/index.css";
import Entrada from "./components/entrada";
import Saida from "./components/saida";

class App extends Component {
  //criar o objeto
  constructor(props) {
    super(props);
    this.state = {
      texto: "",
      lista: [],
    };

    this.HandleChange = this.HandleChange.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
    this.HandleChecked = this.HandleChecked.bind(this);
    this.HandleDelete = this.HandleDelete.bind(this);
  }

  //Funções Entrada
  HandleChange(evento) {
    this.setState({
      texto: evento.target.value,
    });
  }

  HandleSubmit() {
    const novoItem = {
      texto: this.state.texto,
      checked: false
    }
    this.setState(prevState => ({
      lista: prevState.lista.concat([novoItem]),
    }));
  }

  //Funções Saida
  HandleChecked(index) {
    let oldList = this.state.lista;
    
    const newList = oldList;

    oldList[index] = {
      ...oldList[index],
      checked: !oldList[index].checked
    };

    this.setState(prevState => ({
      ...prevState,
      lista: newList
    }))
  }

  // Como caralhos eu faço o vinculo desse index com a buceta dessa App.js
  HandleDelete(index) {
    const lista = this.state.lista;
    lista.splice(index, 1);
    this.setState({ lista })
  }

  // Conteudo renderizado na Index.JS 
  render() {
    return (
      <main>
        <Entrada texto={this.state.texto} HandleChange={this.HandleChange} HandleSubmit={this.HandleSubmit} />
        <Saida lista={this.state.lista} HandleChecked={this.HandleChecked} checked={this.state.checked} HandleDelete={this.HandleDelete} />
      </main>
    );
  }
}

export default App;
