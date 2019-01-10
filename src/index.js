document.addEventListener('DOMContentLoaded', () => {
  
  //RENDER POKEMON - get all the pokemon on the page
  //query the container where we'll put the pokemon and assign it to a variable 
  //iterate through all pokemon and create an element for each one 
  //set the innerHTML of the container to equal the function that creates an element for each pokemon 

  //FLIP
  //add an event listener to the pokemon container
  //the target of the event (the image) will give us back the id of the pokemon
  //based on the id of the clicked pokemon, find the object
  //take the pokemon object's sprite url and replace the src url for that pokemon

  //SEARCH 
  //query select search bar div and save it to a variable
  //add event listener to search input that captures the input value 
  //with that input value, we're going to filter the pokemon by names
  
  const pokemonContainer = document.querySelector("#pokemon-container")

  function formatPokemon(pokemonArray){
    return pokemonArray.map(function(pokemon){
      return `
      <div class="pokemon-container">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
          <h1 class="center-text">${pokemon.name}</h1>
          <div style="width:239px;margin:auto">
            <div style="width:96px;margin:auto">
              <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
            </div>
          </div>
        </div>
      </div>`
    }).join("")
  }

  pokemonContainer.innerHTML = formatPokemon(POKEMON)

  pokemonContainer.addEventListener("click", function(e){
    if (e.target.dataset.action === "flip"){
      let pokedPoke = POKEMON.find(pokemon => pokemon.id == e.target.dataset.id)
      if (e.target.src === pokedPoke.sprites.front){
        e.target.src = pokedPoke.sprites.back
      } else {
        e.target.src = pokedPoke.sprites.front
      }
    }
  })

  const searchInput = document.getElementById("pokemon-search-input")

  searchInput.addEventListener("input", function(e){
    let filteredPokemon = POKEMON.filter(pokemon => pokemon.name.includes(e.target.value))
    pokemonContainer.innerHTML = formatPokemon(filteredPokemon)
  })
  
})
