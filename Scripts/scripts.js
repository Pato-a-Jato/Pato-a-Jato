const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

btnMenu.addEventListener('click', (e) => {
    menu.classList.toggle('active');
})

