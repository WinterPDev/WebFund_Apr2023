const home = `<h1>Home Page</h1>`;
const about = `<h1>About Page</h1>`;
const contact = `<h1>Contact Page</h1>`;

const routes = {
    '/': home,
    '/about': about,
    '/contact': contact
}

const displayDiv = document.querySelector('#display');
displayDiv.innerHTML = routes[window.location.pathname]

const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname)
    displayDiv.innerHTML = routes[pathname];
}

window.onpopstate = () => {
    displayDiv.innerHTML = routes[window.location.pathname]
}
