const poke_container = document.getElementById('poke-container');

const pokemon_count = 150;
const colors ={
    grass: 'green',
    electric: '#fcf7de',
    water: '#def3fd',
    fire: '#fddfdf',
    water: '#def3fd',
    fairy: '#fceaff',
    bug:    '#f8d5a3',
    dragon: '#97b3e6',
    flying: '#f5f5f5',
    normal: '#f5f5f5',
    psychic: '#eaada1',
    poison: '#98d7a5'
}
const main_types = Object.keys(colors)
const fetchPokemons = async () =>{
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) =>{
    const url = ` https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data);
    createPokemonCard(data);
}

const createPokemonCard = (pokemon) =>{
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')

    const poke_type = pokemon.types.map(type => type.type.name)
    const type = main_types.find(type => poke_type.indexOf(type) > -1)
    const color = colors[type]
    pokemonEl.style.backgroundColor = color

    const name= pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id = pokemon.id.toString().padStart(3, '0')
    pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://cdn.cnn.com/cnnnext/dam/assets/210226041421-02-pokemon-anniversary-design-full-169.jpg" alt=''/>
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span> </small>
    </div>
        `
        pokemonEl.innerHTML = pokemonInnerHTML
        poke_container.appendChild(pokemonEl)
        
    }
fetchPokemons()
