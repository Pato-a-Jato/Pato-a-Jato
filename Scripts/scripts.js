const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');
let state = false;

btnMenu.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    state ? btnMenu.style.position = 'absolute' : btnMenu.style.position = 'fixed';
    state = !state;
})

