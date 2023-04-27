const res = await fetch('./aboutme.html');
const body = await res.text();

document.querySelector('#disDiv').innerHTML = body;