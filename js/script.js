
const navToggle =() => {
    button.classList.toggle('open') 
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')

}
const menu = document.querySelector('#menu');
const button = document.querySelector('#menu-btn')
button.addEventListener('click', navToggle)


