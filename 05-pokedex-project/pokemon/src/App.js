import React, { Component } from "react";
import Pokecard from "./Pokecard";

class App extends Component {
  render() {
    return (
      <Pokecard
        name="Charmander"
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        type="fire"
        exp="62"
      />
    );
  }
}

export default App;
