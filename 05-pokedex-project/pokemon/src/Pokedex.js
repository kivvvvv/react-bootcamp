import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    return (
      <section className="Pokedex">
        <h1 className="Pokedex-header">Pokedex</h1>
        <div className="Pokedex-grid">
          <Pokecard
            name="Charmander"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
            type="fire"
            exp="62"
          />
          <Pokecard
            name="Charmander"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
            type="fire"
            exp="62"
          />
          <Pokecard
            name="Charmander"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
            type="fire"
            exp="62"
          />
          <Pokecard
            name="Charmander"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
            type="fire"
            exp="62"
          />
          <Pokecard
            name="Charmander"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
            type="fire"
            exp="62"
          />
          <Pokecard
            name="Charmander"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
            type="fire"
            exp="62"
          />
          <Pokecard
            name="Charmander"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
            type="fire"
            exp="62"
          />
          <Pokecard
            name="Charmander"
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
            type="fire"
            exp="62"
          />
        </div>
      </section>
    );
  }
}

export default Pokedex;
