console.log('JS Script connected!');


// Global variables for our HTML elements:

// let poke0img = document.querySelector('#poke0Image');
// let poke1img = document.querySelector('#poke1Image');
// let poke2img = document.querySelector('#poke2Image');
// let poke3img = document.querySelector('#poke3Image');
// let poke0name = document.querySelector('#poke0Name');
// let poke1name = document.querySelector('#poke1Name');
// let poke2name = document.querySelector('#poke2Name');
// let poke3name = document.querySelector('#poke3Name');


// ==============================================================
// Fetch Pokemon API Data to populate our HTML elements:
// Asynchronous JavaScript And XML (AJAX)
// Application Programming Interface (API)



async function getPokeData() {
    let pokeList = ['marill', 'zorua', 'bulbasaur', 'haunter'];

    for (let i = 0; i < pokeList.length; i++) {
        let res = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokeList[i]);
        let pokeData = await res.json();
        console.log(pokeData.sprites);

        document.querySelector('#poke' + i + 'Name').innerText = pokeData.name;
        document.querySelector('#poke' + i + 'Image').src = pokeData.sprites.front_default;
        document.querySelector('#poke' + i + 'Image').alt = pokeData.name;
    }
}
