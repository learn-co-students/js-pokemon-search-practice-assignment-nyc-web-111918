document.addEventListener('DOMContentLoaded', () => {
  // console.log(POKEMON)
  //grab that container
  const pokemonContainer = document.querySelector('#pokemon-container')
  const searchBar = document.querySelector('#pokemon-search-input')

  //fill out list of pokemons cards
  function displayCards(array){
    array.forEach(function(pokemon){
      pokemonContainer.innerHTML += `
        <div class="pokemon-container">
          <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
            <h1 class="center-text">${pokemon.name}</h1>
            <div style="width:239px;margin:auto">
              <div style="width:96px;margin:auto">
                <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src=${pokemon.sprites.front}>
              </div>
            </div>
          </div>
        </div>`
    })
  }
  displayCards(POKEMON)

  //able to filter the pokemon cards from input
  searchBar.addEventListener('input', function(event){
    //rebuild a new pokemon array with filtered pokemon
    const filteredArray = POKEMON.filter(function(pokemon){
      return pokemon.name.includes(event.target.value)
    })
    pokemonContainer.innerHTML = displayCards(filteredArray)
  })
  pokemonContainer.addEventListener('click', function(event){
    const foundPokemon = POKEMON.find(function(pokemon){
      return event.target.dataset.id == pokemon.id
    })
    if (event.target.dataset.action === 'flip'){
      if (event.target.src === foundPokemon.sprites.back){
        //flip!
        event.target.src = foundPokemon.sprites.front
      }
      else if(event.target.src === foundPokemon.sprites.front) {
        event.target.src = foundPokemon.sprites.back
      }
    }
  })
})
