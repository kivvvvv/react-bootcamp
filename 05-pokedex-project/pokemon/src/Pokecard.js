import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    const { name, image, type, exp } = this.props;
    return (
      <figure className="Pokecard">
        <div className="Pokecard-image-container">
          <img
            className="Pokecard-image"
            src={image}
            alt={`a pokemon name ${name}`}
          />
        </div>
        <header className="Pokecard-header">{name}</header>
        <figcaption className="Pokecard-type">Type: {type}</figcaption>
        <figcaption className="Pokecard-exp">EXP: {exp}</figcaption>
      </figure>
    );
  }
}

export default Pokecard;
