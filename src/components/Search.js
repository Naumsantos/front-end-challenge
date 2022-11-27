import React, { Component } from "react";
import { procuraCidade } from '../utils/consumoClimaTempo';


class Search extends Component {
  constructor(props) {
    super(props);
    this.city = props.cidade;
    this.setCity = props.setCidade;
    this.setMensageiro = props.setMensagem;
    this.setWeatherForecast = props.setClimaPrincipal;
  }

  // recebe o valor do input
  handleChange = (event) => {
    this.setCity(event.target.value);
    this.city = event.target.value;
  };

  // carrega a página de acordo com a cidade pesquisada
  handleSearch = () => {
    this.setMensageiro("Carregando ...");
    procuraCidade(this.city).then((response) => {
      this.setMensageiro("");
      if (!response) {
        this.setMensageiro("Por favor, tente novamente com uma cidade válida");
      }
      this.setWeatherForecast(response);
    });
  };

  render() {

    return <nav>
      <div>
        <h1>Clima</h1>
        <small>Veja como está o clima em sua cidade.</small>
        <div className="search">
          <input required onChange={this.handleChange} type="text" placeholder="busque uma cidade" value={this.props.cidade} />

          <button id="btn" onClick={this.handleSearch}><span className="material-symbols-rounded"> search </span></button>
        </div>
      </div>
    </nav>
  }
}


export default Search;