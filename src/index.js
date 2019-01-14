document.addEventListener('DOMContentLoaded', () => {
  // console.log(POKEMON)
  const pokemonSearchBar = document.querySelector('#pokemon-search-input')
  const pokemonContainer = document.querySelector('#pokemon-container')

  function renderPokemon(pokemonArray) {
    return pokemonArray.map(function(poke) {
      return `
      <div class="pokemon-container" >
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
          <h1 class="center-text">${poke.name}</h1>
          <div>
            <div style="width:239px;margin:auto">
              <div style="width:96px;margin:auto">
                <img data-id=${poke.id} src="${poke.sprites.front}" alt="">
                </div>
            </div>
          </div>
        </div>
      </div>`
    }).join('')
  }
  //defalut setting of all.
  pokemonContainer.innerHTML = renderPokemon(POKEMON)

  //custom setting based on search bar
  pokemonSearchBar.addEventListener('input', function(event) {

      const filterInput = POKEMON.filter(function(poke) {
        //set the filterInput to the search bar
        return poke.name.includes(event.target.value)
      })
    if (filterInput.length > 1){
      pokemonContainer.innerHTML = renderPokemon(filterInput)
    } else if (filterInput.length === 1) {
      pokemonContainer.innerHTML = renderPokemon(filterInput)
      const pkmnData = document.createElement("div")
      pkmnData.innerText = `\n
        Pokemon Id: ${filterInput[0].id}
        Height: ${filterInput[0].height}
        Weight: ${filterInput[0].weight}
        Moves: ${filterInput[0].moves.map(a => " " + a )}
        Ability: ${filterInput[0].abilities.map(a => " " + a )}
        `
      pokemonContainer.appendChild(pkmnData)
    } else {
      pokemonContainer.innerHTML = `<h1 align="center">No searches found</h1>`
    }
  })

  pokemonContainer.addEventListener('click',function(event){
    // set the search bar to the pokemon name, but the bar does not trigger the input event.
    // if (event.target.textContent){
    //   pokemonSearchBar.value = event.target.textContent
    // }
    const clickFlip = function(){
      const newURL = POKEMON.find(function(obj){
        return obj.id === parseInt(event.target.dataset.id)
      })

      if (event.target.src.includes("back")){
        event.target.src = newURL.sprites.front
      } else {
        event.target.src = newURL.sprites.back
      }
    }()



  })

})
