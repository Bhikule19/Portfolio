let menuBar = document.getElementById('menu');
let header = document.querySelector('.header')

window.onscroll = () => {
    menuBar.classList.remove('fa-times');
    header.classList.remove('toggle')
}

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('fa-times');
    header.classList.toggle('toggle')
    // navBar.classList.toggle('active');
})

