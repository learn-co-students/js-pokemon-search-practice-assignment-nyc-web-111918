document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  const pokemonContainer = document.querySelector('#pokemon-container')
  const inputPokemonFilter = document.querySelector('#pokemon-search-input')
  pokemonContainer.innerHTML = pokemonHelperList(POKEMON)
  const pokemonFlip = document.querySelectorAll('.pokemon-frame')

  inputPokemonFilter.addEventListener('input', function(e) {
    const filteredPokemon = POKEMON.filter(function(pokemon) {
      return pokemon.name.includes(event.target.value)
    })
    pokemonContainer.innerHTML = pokemonHelperList(filteredPokemon)
  })

  pokemonContainer.addEventListener('click', function(event) {
    if (event.target.tagName === "IMG") {
      const clickedPokemon = POKEMON.filter(function(pokemon) {
        return pokemon.id === parseInt(event.target.dataset.id)
      })
      const pokemonFrontImage = clickedPokemon[0].sprites.front
      const pokemonBackImage = clickedPokemon[0].sprites.back
      if (event.target.src === pokemonFrontImage) {
        event.target.src = pokemonBackImage
      }
      else if (event.target.src === pokemonBackImage) {
        event.target.src = pokemonFrontImage
      }
    }
  })

}) // end of DOM loader

  //THIS WILL MAKE AN EVENT LISTENER FOR EACH ITEM CLICKED..... THATS BAD

  // POKEMON.forEach(function(pokemon) {
  //   select the pokemon's img tag
  //   const pokemonImageTag = document.querySelector(`[data-id="${pokemon.id}"]`)
  //   pokemonImageTag.addEventListener('click', function(event){
  //   if(pokemonImageTag.src === pokemon.sprites.front ) {
  //     //change it to pokemon back
  //     pokemonImageTag.src = pokemon.sprites.back
  //   } else {
  //     pokemonImageTag.src = pokemon.sprites.front
  //   }
  // })
