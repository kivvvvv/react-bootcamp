import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    const { cards, totalExp, isWinner } = this.props;
    return (
      <section className="Pokedex">
        <h1
          className={`Pokedex-header ${
            isWinner ? "Pokedex-header--winner" : "Pokedex-header--loser"
          }`}
        >
          {isWinner ? "Winning" : "Losing"} Hand
        </h1>
        <p className="Pokedex-total-exp">Total experience: {totalExp}</p>
        <div className="Pokedex-grid">
          {cards.map(card => {
            return (
              <Pokecard
                name={card.name}
                image={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${card.id
                  .toString()
                  .padStart(3, "0")}.png`}
                type={card.type}
                exp={card.base_experience}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default Pokedex;
