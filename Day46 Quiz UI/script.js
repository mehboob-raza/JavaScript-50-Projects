const quizData = [
    {
        question: 'Which language run in a browser',
        a: 'Java',
        b: 'Python',
        c: 'C',
        d: 'JavaScript',
        correct : 'd',
    },

    {
        question: 'What does CSS stands for',
        a: 'Centeral Styles Sheet',
        b: 'Casecading smple Sheets',
        c: 'Cascading Style Sheets',
        d: 'Cars SUVs Sailbots',
        correct : 'c',
    },

    {
        question: 'What does HTML stand for',
        a: 'Hypertext Markup Language',
        b: 'Hypertext Markdoen Language',
        c: 'Hypertext Machine Language',
        d: 'Helicopters Terminals  motorboats Lamborginies',
        correct : 'a',
    },

    {
        question: 'What year was JavaScript launched',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'None of these',
        correct : 'c',
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0
let score = 0

loadQuiz()
function loadQuiz(){
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

    deselectAnswers()
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

submitBtn.addEventListener("click", () => {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
            // console.log(answer, 'getselected')
        }
    })

    console.log('clicked', answer);
    if (answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML = `<h2>You answered the ${score} / ${quizData.length} questions correctly </h2>`
        }
    }
})

// function getSelected(){
//     let answer
//     answerEls.forEach(answerEl => {
//         if(answerEl.checked){
//             answer = answerEl.id
//             console.log(answer, 'getselected')
//         }
//         return answer
//     })
// }


