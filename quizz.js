const correctAnswers = ['A', 'B', 'C', 'D'];

const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const scoreCount = result.querySelector('.score-count');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  
  scrollTo(0, 0);
   
  result.classList.remove('d-none');
  
  let output = 0;
  const timer = setInterval(() => {
    scoreCount.textContent = `${output}%`; 
    if (output === score) {
      clearInterval(timer)
    } else {
      output++
    }
  }, 10);
  
});
