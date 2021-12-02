import React, { Component } from "react";
import "./style.css";

class Saida extends Component {
  render() {
    return (
      <section className="saida-container">
        <div className="saida-wrap">
          <ul className="saida-lista">
            {this.props.lista.map((item, index) => (
              <li className="saida-item" key={index}>
                <div>
                  <input
                    className="saida-checkbox"
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => this.props.HandleChecked(index)}
                  />
                  <span className={`saida-texto ${item.checked ? "saida-hidden" : ""}`}>{item.texto}</span>
                </div>
                <div>
                  <button
                    className="saida-deletar"
                    type="button"
                    onClick={() => this.props.HandleDelete(index)}
                  >
                    deletar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default Saida;
