const questions = [
    {
        question: "Se Maria estuda, então ela passa no exame. Qual é a proposição inversa?",
        answers: [
            {id: 1, text: "Se Maria não passa no exame, então ela não estuda.", correct:true},
            {id: 2, text: "Se Maria estuda, então ela passa no exame.", correct:false},
            {id: 3, text: "Se Maria não estuda, então ela passa no exame.", correct:false},
            {id: 4, text: "Maria estuda e passa no exame.", correct:false}
        ]
    },
    {
        question: "Se João vai ao cinema, então ele compra pipoca. Qual é a proposição contrária?",
        answers: [
            {id: 1, text: "Se João vai ao cinema, então ele não compra pipoca.", correct:false},
            {id: 2, text: "Se João não vai ao cinema, então ele não compra pipoca.", correct:true},
            {id: 3, text: "Se João vai ao cinema, então ele compra pipoca.", correct:false},
            {id: 4, text: "Se João não vai ao cinema, então ele compra pipoca.", correct:false}
        ]
    },
    {
        question: "Se chover amanhã, então eu não vou ao parque. Qual é a proposição contrarreflexiva?",
        answers: [
            {id: 1, text: "Se eu for ao parque, então não choveu amanhã.", correct:true},
            {id: 2, text: "Se eu não for ao parque, então não choveu amanhã.", correct:false},
            {id: 3, text: "Se eu não for ao parque, então choveu amanhã.", correct:false},
            {id: 4, text: "Se chover amanhã, então eu vou ao parque.", correct:false}
        ]
    },
    {
        question: "Se o aluno estuda e entrega os trabalhos, então ele recebe nota alta. Qual é a proposição negativa?",
        answers: [
            {id: 1, text: "Se o aluno não estuda ou não entrega os trabalhos, então ele não recebe nota alta.", correct:true},
            {id: 2, text: "Se o aluno estuda e entrega os trabalhos, então ele não recebe nota alta.", correct:false},
            {id: 3, text: "Se o aluno estuda e entrega os trabalhos, então ele recebe nota alta.", correct:false},
            {id: 4, text: "Se o aluno não estuda, então ele não entrega os trabalhos.", correct:false}
        ]
    },
    {
        question: "Se ele estudar, então passará no concurso. Qual é a proposição contrária?",
        answers: [
            {id: 1, text: "Se ele não estudar, então ele não passará no concurso.", correct:true},
            {id: 2, text: "Se ele não passar no concurso, então ele não estudou.", correct:true},
            {id: 3, text: "Se ele passar no concurso, então ele estudou.", correct:false},
            {id: 4, text: "Se ele não passar no concurso, então ele estudou.", correct:false}
        ]
    },
    {
        question: "Ou João vai ao trabalho, ou ele vai ao shopping. Qual é a proposição contrarreflexiva?",
        answers: [
            {id: 1, text: "Se João não vai ao trabalho e não vai ao shopping, então ele faz outra coisa.", correct:true},
            {id: 2, text: "Se João vai ao trabalho, então ele não vai ao shopping.", correct:false},
            {id: 3, text: "João vai ao trabalho e ao shopping.", correct:false},
            {id: 4, text: "Se João não vai ao trabalho, então ele vai ao shopping.", correct:false}
        ]
    },
    {
        question: "Se o sol brilhar, então iremos à praia ou ao parque. Qual é a proposição inversa?",
        answers: [
            {id: 1, text: "Se não iremos à praia nem ao parque, então o sol não brilhou.", correct:true},
            {id: 2, text: "Se o sol brilhar, então não iremos à praia nem ao parque.", correct:false},
            {id: 3, text: "Se o sol não brilhar, então não iremos à praia nem ao parque.", correct:false},
            {id: 4, text: "Se o sol não brilhar, então não iremos à praia ou ao parque.", correct:false}
        ]
    },
    {
        question: "Se o aluno estuda e entrega os trabalhos, então ele recebe nota alta. Qual é a proposição contrária?",
        answers: [
            {id: 1, text: "Se o aluno não estuda ou não entrega os trabalhos, então ele não recebe nota alta.", correct:true},
            {id: 2, text: "Se o aluno não estuda, então ele não entrega os trabalhos.", correct:false},
            {id: 3, text: "Se o aluno estuda ou entrega os trabalhos, então ele recebe nota alta.", correct:false},
            {id: 4, text: "Se o aluno estuda, então ele recebe nota alta.", correct:false}
        ]
    },
    {
        question: "Se ele estudar, então passará no concurso. Qual é a proposição negada?",
        answers: [
            {id: 1, text: "Se ele não estudar, então ele não passará no concurso.", correct:false},
            {id: 2, text: "Se ele estudar, então ele não passará no concurso.", correct:false},
            {id: 3, text: "Se ele não estudar, então ele passará no concurso.", correct:false},
            {id: 4, text: "Ele estudando ou não, ele não passará no concurso.", correct:true}
        ]
    },
    {
        question: "Se Maria não vai ao cinema, então ela vai ao shopping. Qual é a proposição equivalente?",
        answers: [
            {id: 1, text: "Se Maria vai ao shopping, então ela não vai ao cinema.", correct:true},
            {id: 2, text: "Se Maria vai ao cinema, então ela não vai ao shopping.", correct:false},
            {id: 3, text: "Se Maria não vai ao shopping, então ela não vai ao cinema.", correct:false},
            {id: 4, text: "Se Maria vai ao shopping, então ela vai ao cinema.", correct:false}
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() 
{
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function resetState()
{
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function showQuestion()
{
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    const shuffledAnswers = shuffleArray(currentQuestion.answers);

    shuffledAnswers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.id = answer.id;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    })
}

function selectAnswer(event)
{
    answers = questions[currentQuestionIndex].answers;
    const correctAnswer = answers.filter((answer) => {
        return answer.correct == true;
    })[0];

    const selectBtn = event.target;
    const isCorrect = selectBtn.dataset.id == correctAnswer.id;
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore()
{
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}`;
    nextButton.innerHTML = "Jogar novamente";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz()