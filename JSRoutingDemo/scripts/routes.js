window.onload = () => {
    console.log('DOM Loaded!');
}

class pageRoute {
    constructor(name, routes) {
        this.name = name,
            this.routes = routes
    }

}

const routeMap = new pageRoute('Home', [
    {
        path: '/',
        name: 'Home'
    },
    {
        path: '/aboutme',
        name: 'AboutMe'
    }
]);


const displayDiv = document.querySelector('#MainDisplay');

let activeUrl = window.location.pathname;
if (activeUrl === '/') {
    displayDiv.innerHTML = 'Home Page';
}