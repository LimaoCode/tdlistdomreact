import { Component } from "react";
import "./style.css";

class Entrada extends Component {
  render() {
    return (
      <section className="entrada-container">
        <div className="entrada-wrap">
          <h1 className="entrada-titulo">To Do List</h1>
          <div>
            <input
              className="entrada-input"
              type="text"
              value={this.props.texto}
              onChange={this.props.HandleChange}
            />
            <button
              className="entrada-adiciona"
              type="button"
              onClick={this.props.HandleSubmit}
            >
              Adicionar
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Entrada;
