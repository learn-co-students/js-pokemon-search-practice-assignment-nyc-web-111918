document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  const pokemonContainer = document.querySelector("#pokemon-container");
  const inputFilterPokemon = document.getElementById("pokemon-search-input");

  let formattedPokemons = POKEMON.map(pokemon => (
  `<div class="pokemon-container">
      <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${pokemon.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img data-id=${pokemon.id} data-action="flip" class="toggle-sprite" src=${pokemon.sprites.front}>
          </div>
        </div>
      </div>
    </div>`
  )).join("");

  pokemonContainer.innerHTML = formattedPokemons;

  pokemonContainer.addEventListener('click', event => {
    if (event.target.dataset.action === 'flip') {
      const targetPoke = POKEMON.find(pokeObj => pokeObj.id == event.target.dataset.id)
      if (event.target.src === targetPoke.sprites.front) {
        event.target.src = targetPoke.sprites.back
      } else {
        event.target.src = targetPoke.sprites.front
      }
    }
  })

  inputFilterPokemon.addEventListener('input', event => {
    const filteredPokemon = POKEMON.filter(pokemon => pokemon.name.includes(event.target.value.toLowerCase()))
    const filteredPokeHTML = filteredPokemon.map(pokeObj => (
      `<div class="pokemon-container">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
          <h1 class="center-text">${pokeObj.name}</h1>
          <div style="width:239px;margin:auto">
            <div style="width:96px;margin:auto">
              <img data-id="${pokeObj.id}" data-action="flip" class="toggle-sprite" src="${pokeObj.sprites.front}">
            </div>
          </div>
        </div>
      </div>`
      )).join('')

      pokemonContainer.innerHTML = filteredPokeHTML.length ? filteredPokeHTML : `<p><center>There are no Pokémon here</center></p>`
  });
});
