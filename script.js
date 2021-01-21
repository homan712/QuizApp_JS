const quizData = [
    {
        question: 'What is the capital in Japan',
        a: 'Tokyo',
        b: 'New York',
        c: 'England',
        d: 'Denmark',
        correct: 'a'
    
    },{
        question: '1 + 1 = ?',
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        correct: 'b'
    },{
        question: 'how many finger do you have?',
        a: '1',
        b: '2',
        c: '5',
        d: '4',
        correct: 'c'
    },{
        question:'how many days in a week ?',
        a: '1', 
        b: '7',
        c: '5',
        d: '4',
        correct: 'b'
    },{
        question:'how many second in a minute ?',
        a: '1',
        b: '7',
        c: '60',
        d: '4',
        correct: 'c'
    }
];
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    disSelectAnswer();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText= currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d; 
}

function getSelected(){
    
    
    let answer = undefined;
    
    answerEls.forEach(answerEl => { 
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
        return answer;
}

function disSelectAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    //check answer
    const answer = getSelected();

    if (answer){
        if (answer === quizData[currentQuiz].correct){
    
            score++;
        }


    currentQuiz++;
    if (currentQuiz < quizData.length){
        loadQuiz();
    
    }else {
        quiz.innerHTML = `<h2> You answer correctly at ${score}/${quizData.length} question.</h2> 
        <button onclick="location.reload()">Reload</button>`;
        }
    }   
});