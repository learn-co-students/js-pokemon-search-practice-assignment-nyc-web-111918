
function pokemonHelperList(pokemonList) {
  return pokemonList.map(function(pokemon) {
    return `<div class="pokemon-container">
      <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${pokemon.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img src="${pokemon.sprites.front}" class="toggle-sprite" data-action="flip" data-id="${pokemon.id}">
          </div>
        </div>
      </div>
    </div>`
  }).join('')
}
