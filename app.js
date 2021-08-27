const answerKey = ['A', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');


form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((ans, index) => {
        if(ans ===  answerKey[index]){
            score += 25;
        }
    });
    
    scrollTo(0,0);
    // result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    let ansOutput = 0
    const animTimer = setInterval(() => {
        result.querySelector('span').textContent = `${ansOutput}%`;
        if(ansOutput === score){
            clearInterval(animTimer);
        }
        else{
            ansOutput++;
        }   
    },10);
});