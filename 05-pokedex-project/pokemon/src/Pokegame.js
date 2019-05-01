import React, { Component } from "react";
import Pokemons from "./Pokemons";
import Pokedex from "./Pokedex";
import { shuffleArray } from "./helpers";
import "./Pokegame.css";

class Pokegame extends Component {
  render() {
    const shuffledPokemons = shuffleArray(Pokemons);

    return (
      <div className="Pokegame">
        <Pokedex cards={shuffledPokemons.slice(0, 4)} />
        <Pokedex cards={shuffledPokemons.slice(4)} />
      </div>
    );
  }
}

export default Pokegame;
