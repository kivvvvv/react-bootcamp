import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    const { name, image, type, exp } = this.props;
    return (
      <figure className="Pokecard">
        <header className="Pokecard-header">{name}</header>
        <img
          className="Pokecard-image"
          src={image}
          alt={`a pokemon name ${name}`}
        />
        <figcaption className="Pokecard-type">Type: {type}</figcaption>
        <figcaption className="Pokecard-exp">EXP: {exp}</figcaption>
      </figure>
    );
  }
}

export default Pokecard;
