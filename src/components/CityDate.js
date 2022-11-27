import React, { Component } from "react";

class CityDate extends Component {
  render() {
    return <>
      <section className="cityDate">
        <section className="city">
          <span className="material-symbols-rounded">pin_drop</span>
          <p>{this.props.name} - {this.props.region}</p>
        </section>
        <span className="date">{`Hoje, ${this.props.date} às ${this.props.time}`}</span>
      </section>
    </>
  }
}

export default CityDate;