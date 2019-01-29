// helper method to iterate through POKEMON array
function renderAllPokemon(pokemonArray){
  // creates a new array with the results of a function on every element, with the same size of array.
 return pokemonArray.map(function(pokemon) {
   return `<div class="pokemon-container"><div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame"><h1 class=center-text>${pokemon.name}</h1><div style="width:239px;margin:auto"><div style="width:96px;margin:auto"><img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}"></div></div></div></div>`
 }).join('');
};

// DOM content load event listener
document.addEventListener('DOMContentLoaded', () => {
 // console.log(POKEMON)

 // select element by id
 const pokemonContainer = document.querySelector('#pokemon-container');
 const pokemonInput = document.querySelector('#pokemon-search-input');
 const pokemonForm = document.querySelector('#pokemon-search-form');

 // forEach() executes a callback function once for each element in array
 // for each pokemon element in POKEMON array, we're replacing pokemonContainer with the HTML entity/raw text. The value of innerHTML is changed to this new string, hence replacing the document contents with a display of the page's entire source code.
 POKEMON.forEach(function(pokemon){
   // console.log(pokemon.name)
   pokemonContainer.innerHTML += `<div class="pokemon-container"><div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame"><h1 class=center-text>${pokemon.name}</h1><div style="width:239px;margin:auto"><div style="width:96px;margin:auto"><img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}"></div></div></div></div>`
 });

 pokemonForm.addEventListener("input", (e) => {
   e.preventDefault();
   const filteredPokemon = POKEMON.filter( (pokemon) => {
     return pokemon.name.includes(e.target.value);
   });
   pokemonContainer.innerHTML = renderAllPokemon(filteredPokemon);
   // console.log(e.target.value);
 });

 pokemonContainer.addEventListener("click", (e) => {
   if (e.target.dataset.action === "flip") {
     let pokedPoke = POKEMON.find(pokemon => pokemon.id == e.target.dataset.id)
     if (e.target.src === pokedPoke.sprites.front) {
       e.target.src = pokedPoke.sprites.back;
     } else {
     e.target.src = pokedPoke.sprites.front;
   };
  };
  console.log(e.target.dataset.id);
 });

});
