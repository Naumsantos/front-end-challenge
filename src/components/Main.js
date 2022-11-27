import React, { Component } from "react";

class Main extends Component {
  render() {
    return <>
      <main>
        <div className="temperature">
          <p className="degrees">{`${this.props.degrees}°`}</p>
          <img src={this.props.img} alt="Icone Tempo" />
        </div>

        <div className='detail'>
          <p className="">{this.props.condition}</p>
        </div>

        <section className="maxMin">
          <div>
            <span className="material-symbols-sharp"> thermostat </span>
            <p>{`Máxima: ${this.props.max}°`}</p>
          </div>
          <p>{`Minima: ${this.props.min}°`}</p>
        </section>

        <section className="airHumidity">
          <div className="air">
            <span className="material-symbols-sharp">air</span>
            <p>{`Vento: ${this.props.air} Km/h`}</p>
          </div>

          <div className="humidity">
            <span className="material-symbols-sharp">humidity_percentage</span>
            <p>{`Umidade: ${this.props.humidity}%`}</p>
          </div>
        </section>
      </main>
    </>
  }
}

export default Main;