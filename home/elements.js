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

// Recupera os favoritos salvos no navegador
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

// Exibe os Pokémon na tela
function mostrarPokemons() {
    container.innerHTML = "";

    listaPokemons.forEach(function(pokemon) {
        const estaFavoritado = favoritos.includes(pokemon.id);

        const cardHTML = `
            <div class="card">
                <img
                    src="${pokemon.sprites.front_default}"
                    alt="${pokemon.name}"
                >
                <h3>Id: ${pokemon.id}</h3>
                <h2>${pokemon.name}</h2>

                <button
                    class="botao-favorito"
                    data-id="${pokemon.id}"
                    aria-pressed="${estaFavoritado}"
                >
                    ${estaFavoritado ? "❤️ Favoritado" : "🤍 Favoritar"}
                </button>
            </div>
        `;

        container.innerHTML += cardHTML;
    });
}

// Adiciona ou remove um Pokémon dos favoritos
container.addEventListener("click", function(event) {
    const botao = event.target.closest(".botao-favorito");

    if (!botao) return;

    const id = Number(botao.dataset.id);

    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(function(idFavorito) {
            return idFavorito !== id;
        });
    } else {
        favoritos.push(id);
    }

    // Salva a lista no navegador
    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    // Atualiza os botões na tela
    mostrarPokemons();
});

mostrarPokemons();