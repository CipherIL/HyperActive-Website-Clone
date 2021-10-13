//Navigation button
const $topLine = document.getElementById('menu-line-top');
const $middleLine = document.getElementById('menu-line-middle');
const $bottomLine = document.getElementById('menu-line-bottom');
const $menuButton = document.querySelector('#navigation-bar .menu-button');

const $linksContainer = document.querySelector('#navigation-bar .links-container');
const $links = [...document.querySelectorAll('#navigation-bar .links-container .nav-link')];

const $careersButton = document.getElementById('careers-button');
const $careersContainer = document.getElementById('careers');


$links.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        closeMobileMenu();
        const el = document.getElementById(link.href.split('#')[1]);
        el.scrollIntoView(true);
    })
})

$menuButton.addEventListener('click',()=>{
    $menuButton.classList.toggle('active')
    $linksContainer.classList.toggle('show');
})

const closeMobileMenu = ()=>{
    $menuButton.classList.remove('active')
    $linksContainer.classList.remove('show');
}

$careersButton.addEventListener('click',()=>{
    $careersContainer.classList.toggle('show');
})