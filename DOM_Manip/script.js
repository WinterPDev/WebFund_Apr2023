console.log('JS Script Linked Successfully!')

// element = img element with the torchic!
function evolve(element) {

    console.log(element.src)
    element.src = 'https://archives.bulbagarden.net/media/upload/8/85/0257Blaziken-Mega.png';
    element.alt = 'Mega Blaziken'
}

function changeText(element) {
    console.log(element.innerText)
    element.innerText = 'Text Changed!';
}

function removeClick(element) {

    element.remove();
}