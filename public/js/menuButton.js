const $topLine = document.getElementById('menu-line-top');
const $middleLine = document.getElementById('menu-line-middle');
const $bottomLine = document.getElementById('menu-line-bottom');
const $menuButton = document.querySelector('#navigation-bar .menu-button');


$menuButton.addEventListener('click',()=>{
    $menuButton.classList.toggle('active')
})