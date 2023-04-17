console.log('Script file linked!');

// Establish variables for major elements you may want to change.
// These can be placed either globally or within a function.

let pokeImg = document.querySelector('#pokeImg')
let pokeName = document.querySelector('#pokeName');


function evolvePokemon(id) {
    let counter = document.querySelector(id);
    pokeImg.src = 'https://archives.bulbagarden.net/media/upload/0/0f/0404Luxio.png';

    pokeName.innerText = 'Luxio';

    counter.innerText++

}