const toggleMenu = document.getElementById('toggle');
const button = document.getElementById('hamburger-menu');
let state = false;

function handleButton(e) {
    state = !state;

    if (state === true) {
        toggleMenu.classList = 'active'
        button.innerHTML = '<img src="./images/icon-close.svg" alt="close" />'

    }
    else {
        toggleMenu.classList = 'toggle'
        button.innerHTML = '<img src="./images/icon-hamburger.svg" alt="menu" />'

    }
    e.preventDefault();
}


button.addEventListener('click', handleButton);
