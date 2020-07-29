// Assignment Code

const questions = [
    {
        question: 'Which country has won the most World Cups?',
        answers: [
            {text: 'Brazil', correct: true},
            {text: 'Germany', correct: false},
            {text: 'United States', correct: false},
            {text: 'Argentina', correct: false},
            {text: 'France', correct: false},
        ]
    }

]




const startBtn = document.querySelector("#start");
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('section.container')
const questionElement = document.getElementById('myQuestions')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex


startBtn.addEventListener('click', startTheQuiz());
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
})

// Write password to the #password input
function startTheQuiz() {
    
    startBtn.classList.add('hide')
    shuffledQuestions= questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question){
    questionElement.innerText = questions.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }

}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

// Add event listener to start button
startBtn.addEventListener("click", startTheQuiz);








// document.querySelector("#start").addEventListener("click", startTheQuiz);

// let myNewButton = document.getElementById("jimButton");
    // let jb = document.createElement('button');
    // jb.setAttribute('class', 'btn');
    // jb.innerHTML = "Jim Brown";
    // myNewButton.appendChild(jb);

    // let myNewQuestion = document.getElementById("myQuestion");
    // let quest1 = document.createElement('h3');
    // quest1.setAttribute('class', '');
    // quest1.innerHTML = "Which of the following was a Cleveland Browns running back?";
    // myNewQuestion.appendChild(quest1);

    // let myNewChoice = document.getElementById("myChoices");
    // let choice1 = document.createElement('button');
    // choice1.setAttribute('class', 'btn');
    // choice1.innerHTML = "a. Jim Brown";
    // myNewChoice.appendChild(choice1);

    // let myNewChoice2 = document.getElementById("myChoices");
    // let choice2 = document.createElement('button');
    // choice2.setAttribute('class', 'btn');
    // choice2.innerHTML = "b. Barney Rubble";
    // myNewChoice.appendChild(choice2);