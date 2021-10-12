const $diagnoseCategory = document.getElementById('diagnose');
const $routesCategory = document.getElementById('routes');
const $placementCategory = document.getElementById('placement');
const $careerCategory = document.getElementById('career');

const $diagnoseContent = document.querySelector('#diagnose .category__content');
const $routesContent = document.querySelector('#routes .category__content');
const $placementContent = document.querySelector('#placement .category__content');
const $careerContent = document.querySelector('#career .category__content');

$diagnoseCategory.addEventListener('click',()=>{
    if($diagnoseContent.classList.contains('closed')){
        $diagnoseContent.style.display="block";
        setTimeout(() => {
            $diagnoseContent.classList.toggle('closed');
        }, 0);
    }
    else{
        $diagnoseContent.classList.toggle('closed');
        setTimeout(() => {
            $diagnoseContent.style.display="none"
        }, 300);
    }
})

$routesCategory.addEventListener('click',()=>{
    if($routesContent.classList.contains('closed')){
        $routesContent.style.display="block";
        setTimeout(()=>{
            $routesContent.classList.toggle('closed');
        },0)
    }
    else{
        $routesContent.classList.toggle('closed');
        setTimeout(()=>{
            $routesContent.style.display="none";
        },300)
    }
})

$placementCategory.addEventListener('click',()=>{
    if($placementContent.classList.contains('closed')){
        $placementContent.style.display="block";
        setTimeout(()=>{
            $placementContent.classList.toggle('closed');
        },0)
    }
    else{
        $placementContent.classList.toggle('closed');
        setTimeout(()=>{
            $placementContent.style.display="none";
        },300)
    }
})

$careerCategory.addEventListener('click',()=>{
    if($careerContent.classList.contains('closed')){
        $careerContent.style.display="block";
        setTimeout(()=>{
            $careerContent.classList.toggle('closed');
        },0)
    }
    else{
        $careerContent.classList.toggle('closed');
        setTimeout(()=>{
            $careerContent.style.display="none";
        },300)
    }
})

