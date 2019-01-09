document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  const pokemonContainer=document.getElementById("pokemon-container").getElementsByTagName('center')[0];
  const pokemonSearchInput=document.getElementById("pokemon-search-input");

  pokemonContainer.innerHTML=renderPokemonList(POKEMON);

  pokemonSearchInput.addEventListener('input', function(event){
    const searchString = event.target.value
    const filteredPokemon = POKEMON.filter(function(pokemon){
      return pokemon.name.includes(searchString)
    })
    pokemonContainer.innerHTML=renderPokemonList(filteredPokemon);
  });

  pokemonContainer.addEventListener('click', function(event){
    if (event.target.dataset.action === 'flip'){
      if (event.target.src.includes('/back/')) {
        event.target.src = findPokemonByID(+event.target.dataset.id).sprites.front
      } else {
        event.target.src = findPokemonByID(+event.target.dataset.id).sprites.back
      }
    }

    if (event.target.dataset.action==='stats'){
      const statsDiv = document.getElementById(`pokemon-${+event.target.dataset.id}-stats`)
      if (statsDiv.style.display === 'block'){
        statsDiv.style.display = 'none'
      } else {
        statsDiv.style.display = 'block'
      }
    }
  });
})


function renderPokemonList(pokemonList){
  let returnString="";
  pokemonList.forEach(function(pokemon){
    returnString+=cardHTML(pokemon);
  })
  return returnString;
}

function cardHTML(pokemon){
  return `<div class="pokemon-container">
    <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div style="width:239px;margin:auto">
        <div style="width:96px;margin:auto">
          <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
        </div>
      </div>
      <button type="button" data-action="stats" data-id="${pokemon.id}">Stats</button>
      <div id="pokemon-${pokemon.id}-stats" style="display:none">
        <p>Speed: ${pokemon.stats[0].value}</p>
        <p>Special attack: ${pokemon.stats[1].value}</p>
        <p>Special defense: ${pokemon.stats[2].value}</p>
        <p>Attack: ${pokemon.stats[3].value}</p>
        <p>Defense: ${pokemon.stats[4].value}</p>
        <p>HP: ${pokemon.stats[5].value}</p>
      </div>
    </div>
  </div>`
}

function findPokemonByID(id){
  return POKEMON.find(function(pokemon){
    return pokemon.id === id
  })
}
