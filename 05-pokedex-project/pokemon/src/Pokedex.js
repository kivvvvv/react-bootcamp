import React, { Component } from "react";
import Pokecard from "./Pokecard";
import Pokemons from "./Pokemons";
import { shuffleArray } from "./helpers";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    return (
      <section className="Pokedex">
        <h1 className="Pokedex-header">Pokedex</h1>
        <div className="Pokedex-grid">
          {shuffleArray(Pokemons).map(pokemon => {
            return (
              <Pokecard
                name={pokemon.name}
                image={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id
                  .toString()
                  .padStart(3, "0")}.png`}
                type={pokemon.type}
                exp={pokemon.base_experience}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default Pokedex;
