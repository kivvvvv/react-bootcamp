import React, { Component } from "react";
import { Pokecard } from "./Pokecard";

class Pokedex extends Component {
  render() {
    return (
      <section className="Pokedex">
        <Pokecard />
        <Pokecard />
        <Pokecard />
        <Pokecard />
        <Pokecard />
        <Pokecard />
        <Pokecard />
        <Pokecard />
      </section>
    );
  }
}

export default Pokedex;
