// toggle button in small screen 
const btn = document.querySelector('#btnToggle');
const menu = document.querySelector('#menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})