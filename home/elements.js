const listaPokemons = [
  {
    "id":25,
    "name":"pikachu",
    "sprites": {
      "front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
    }
  },

  {
    "id":6,
    "name":"charizard",
    "sprites": {
      "front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
    }
  },

  {
    "id":150,
    "name":"mewtwo",
    "sprites": {
      "front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
    }
  },

  {
    "id": 1,
    "name": "bulbasaur",
    "sprites": {
      "front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    }
  },

  {
    "id": 4,
    "name": "charmander",
    "sprites": {
      "front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
    }
  },

  {
    "id": 7,
    "name": "squirtle",
    "sprites": {
      "front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
    }
  },

  {
    "id":133,
    "name":"eevee",
    "sprites": {
      "front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png"
    }
  },

  {
    "id":448,
    "name":"lucario",
    "sprites": {
      "front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png"
    }
  },

  {
    "id":143,
    "name":"snorlax",
    "sprites": {
      "front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png"
    }
  },

  {
    "id":151,
    "name":"mew",
    "sprites": {
      "front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png"
    }
  }

]

const container = document.getElementById("listaDePokemons");

listaPokemons.forEach(function(pokemon){
  console.log(pokemon)

  const cardHTML = `
    <div class="card">
      <img src="${pokemon.sprites.front_default}">
      <h3>Id: ${pokemon.id}</h3>
      <h2>${pokemon.name}</h2>
    </div> 
  `;

  container.innerHTML += cardHTML

})