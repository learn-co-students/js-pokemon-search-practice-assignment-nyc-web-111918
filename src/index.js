document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  //YOUR CODE HERE
  const pokemonContainer = document.querySelector("#pokemon-container");
  const inputForFilteringPokemon = document.querySelector("#pokemon-search-input")


  function renderAllPokemon(pokemonArray) {
    return pokemonArray.map(function(pokemon) {
      let pokemonCard = `<div class="pokemon-container">
      <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${pokemon.name}</h1>
          <div style="width:239px;margin:auto">
            <div style="width:96px;margin:auto">
            <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
          </div>
        </div>
        </div>
      </div>`
      return pokemonCard
    }).join('');
  }

  pokemonContainer.innerHTML = renderAllPokemon(POKEMON);

  inputForFilteringPokemon.addEventListener('input', function(e) {
    const filteredPokemon = POKEMON.filter(function(pokemon) {
      return pokemon.name.includes(e.target.value)
    })
    pokemonContainer.innerHTML = renderAllPokemon(filteredPokemon)
  })

  POKEMON.forEach(function(pokemon) {
    const pokeFront = document.querySelector(`[data-id="${pokemon.id}"]`)
    // console.log(pokeFront);
    pokeFront.addEventListener('click', function(e) {
      e.target.src === pokemon.sprites.front ? e.target.src = pokemon.sprites.back : e.target.src = pokemon.sprites.front
      console.log(e.target);
    })
  })

})
