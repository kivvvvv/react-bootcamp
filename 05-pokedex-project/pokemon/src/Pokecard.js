import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    const { name, image, type, exp } = this.props;
    return (
      <figure>
        <header>{name}</header>
        <img scr={image} alt={`a pokemon name ${name}`} />
        <figcaption>Type: {type}</figcaption>
        <figcaption>EXP: {exp}</figcaption>
      </figure>
    );
  }
}

export default Pokecard;
