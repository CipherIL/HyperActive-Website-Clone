const $questions = [...document.querySelectorAll('#faq .aq-segments-container .aq-segment .aq .question')];
const $answers = [...document.querySelectorAll('#faq .aq-segments-container .aq-segment .aq .answer')];
const $arrows = [...document.querySelectorAll('#faq .aq-segments-container .aq-segment .aq .question .question-arrow')]

$questions.forEach((question,i)=>{
    question.addEventListener('click',()=>{
        $arrows[i].classList.toggle('flipped');
        $answers[i].classList.toggle('show');
    })
})