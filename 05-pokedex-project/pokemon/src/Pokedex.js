import React, { Component } from "react";
import Pokecard from "./Pokecard";
import Pokemons from "./Pokemons";
import { randomPokemon } from "./helpers";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    let randomedPokemons = [];
    while (Pokemons.length > 0) {
      const randomedPokemon = randomPokemon(Pokemons);
      randomedPokemons.push(randomedPokemon);
    }

    return (
      <section className="Pokedex">
        <h1 className="Pokedex-header">Pokedex</h1>
        <div className="Pokedex-grid">
          {randomedPokemons.map(pokemon => {
            return (
              <Pokecard
                name={pokemon.name}
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  pokemon.id
                }.png`}
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
