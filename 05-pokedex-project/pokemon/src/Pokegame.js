import React, { Component } from "react";
import Pokemons from "./Pokemons";
import Pokedex from "./Pokedex";
import { shuffleArray } from "./helpers";
import "./Pokegame.css";

class Pokegame extends Component {
  render() {
    const shuffledPokemons = shuffleArray(Pokemons);
    const hand1 = shuffledPokemons.slice(0, 4);
    const hand2 = shuffledPokemons.slice(4);
    const totalExp1 = hand1.reduce((exp, card) => {
      return (exp += card.base_experience);
    }, 0);
    const totalExp2 = hand2.reduce((exp, card) => {
      return (exp += card.base_experience);
    }, 0);

    const isHand1Win = totalExp1 > totalExp2;
    const isHand2Win = totalExp2 > totalExp1;

    return (
      <div className="Pokegame">
        <Pokedex cards={hand1} totalExp={totalExp1} isWinner={isHand1Win} />
        <Pokedex cards={hand2} totalExp={totalExp2} isWinner={isHand2Win} />
      </div>
    );
  }
}

export default Pokegame;
