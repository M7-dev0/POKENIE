const listaPokemons = [
    { id: 25, name: "pikachu", imagem: "25" },
    { id: 6, name: "charizard", imagem: "6" },
    { id: 150, name: "mewtwo", imagem: "150" },
    { id: 1, name: "bulbasaur", imagem: "1" },
    { id: 4, name: "charmander", imagem: "4" },
    { id: 7, name: "squirtle", imagem: "7" },
    { id: 133, name: "eevee", imagem: "133" },
    { id: 448, name: "lucario", imagem: "448" },
    { id: 143, name: "snorlax", imagem: "143" },
    { id: 151, name: "mew", imagem: "151" }
];

// Recupera os IDs dos favoritos salvos no navegador
const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

const container = document.getElementById("listaDePokemons");
const mensagemVazia = document.getElementById("mensagemVazia");

// Separa somente os Pokémon favoritados
const pokemonsFavoritos = listaPokemons.filter(function(pokemon) {
    return favoritos.includes(pokemon.id);
});

// Mostra os favoritos na página
pokemonsFavoritos.forEach(function(pokemon) {
    const cardHTML = `
        <div class="card">
            <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.imagem}.png"
                alt="${pokemon.name}"
            >
            <h3>Id: ${pokemon.id}</h3>
            <h2>${pokemon.name}</h2>

            <button class="botao-remover" data-id="${pokemon.id}">
                💔 Remover dos favoritos
            </button>
        </div>
    `;

    container.innerHTML += cardHTML;
});

// Mostra uma mensagem se não houver favoritos
if (pokemonsFavoritos.length === 0) {
    mensagemVazia.hidden = false;
}

// Permite remover um Pokémon dos favoritos
container.addEventListener("click", function(event) {
    const botao = event.target.closest(".botao-remover");

    if (!botao) return;

    const id = Number(botao.dataset.id);

    const novosFavoritos = favoritos.filter(function(idFavorito) {
        return idFavorito !== id;
    });

    localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));

    // Atualiza a página após remover
    location.reload();
});