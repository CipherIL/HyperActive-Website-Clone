const $psQuestions = [...document.querySelectorAll('#public-service .ps-questions-container .qa-container .question')];
const $psAnswers = [...document.querySelectorAll('#public-service .ps-questions-container .qa-container .answer')];
const $psArrows = [...document.querySelectorAll('#public-service .ps-questions-container .qa-container .question .question-arrow')]

$psQuestions.forEach((question,i)=>{
    question.addEventListener('click',()=>{
        $psArrows[i].classList.toggle('flipped');
        $psAnswers[i].classList.toggle('show');
    })
})