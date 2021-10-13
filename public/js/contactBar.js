const $info = document.querySelector('#contact-bar__mobile .contact-bar-mobile-button');
const $signUpForm = document.getElementById('contact-form');


$info.addEventListener('click',(e)=>{
    e.preventDefault();
    $signUpForm.scrollIntoView(true);
})