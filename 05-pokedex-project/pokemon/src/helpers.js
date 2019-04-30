const randomPokemon = pokemons => {
  let randomedIndex = Math.floor(Math.random() * pokemons.length);
  return pokemons.splice(randomedIndex, 1)[0];
};

export { randomPokemon };
