const menu = document.querySelector('.menu')
const linhasMenu = document.querySelector('.menu .linha')
const menuBar = document.querySelector('.menu-bar')

menu.addEventListener('click', () => {
    linhasMenu.classList.toggle('active')
    menuBar.classList.toggle('open')
})