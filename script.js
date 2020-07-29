// Assignment Code

 

let quizHeading = document.querySelector("#topStuff");

let myNewQuestion = document.querySelector("#myQuestion");

let myTimer = document.querySelector("#myTimer");

let choices = document.querySelector("#choices");

let result = document.querySelector("#result");

let myTextArea = document.querySelector("#myTextArea");

let myInitials = document.querySelector("#myInitials");

let myStartAgain = document.querySelector("#myStartAgain");

 

//let myNewQuestion = document.getElementById("myQuestion");

//let myTimer = document.getElementById("myTimer");

//let choices = document.getElementById("choices");

 

let seconds = 180;

let intervalId = null;

 

let choice1;

let choice2;

let choice3;

let choice4;

let choice5;

 

let correctAnswers = ["a","b","c","d","e","a","b","c","d","e"];

 

let question2Choices = ["a. Germany", "b. Brazil", "c. Argentina", "d. France", "e. United States"];

let question3Choices = ["a. Ronald Reagan", "b. Theodore Roosevelt", "c. Franklin Roosevelt", "d. Thomas Jefferson", "e. Calvin Coolidge"];

let question4Choices = ["a. Hydrogen", "b. Sulfur", "c. Sodium", "d. Carbon", "e. Nitrogen"];

let question5Choices = ["a. Protein", "b. Carbohydrate", "c. Purine", "d. Guanine", "e. Glutamine"];

let question6Choices = ["a. Kilauea", "b. Mount Vesuvius", "c. Yellowstone", "d. Mount Pelee", "e. Krakatau"];

let question7Choices = ["a. Michigan", "b. Superior", "c. Caspian Sea", "d. Baikal", "e. Tanganyika"];

let question8Choices = ["a. Harvard", "b. UCLA", "c. Stanford", "d. Yale", "e. Cambridge"];

let question9Choices = ["a. Euchre", "b. Backgammon", "c. Chess", "d. Blackjack", "e. Sudoku"];

let question10Choices = ["a. American Airlines", "b. Amazon", "c. Facebook", "d. Netflix", "e. Apple"];

 

let count = 0;

let correct = 0;

let wrong = 0;

 

let letsStart = function() {

 

    seconds--;

 

    myTimer.textContent = 'Seconds left: ' + seconds;

 

    if (seconds <= 0) {

 

        clearInterval(intervalId);

        myTimer.textContent = 'Sorry. Time\'s up!';

        allDone();

 

    }

}

 

function showResults() {

 

    localStorage.setItem(myTextArea.value, seconds);

    myInitials.disabled = true;

 

    for (let i=0; i < localStorage.length; i++) {

 

        let key = localStorage.key(i);

        let value = localStorage.getItem(key);

        myTimer.innerText += `${key} ${value}\n`;

 

    }

   

}

 

function allDone() {

 

    clearInterval(intervalId);

 

    choice1.remove();

    choice2.remove();

    choice3.remove();

    choice4.remove();

    choice5.remove();

 

    result.textContent = '';

    myTimer.textContent = '';

 

    question.innerText = 'Good job.\nYou got ' +

        correct + ' correct and ' +

        wrong + ' wrong.\nYour final score is ' +

        seconds + ' points.\nEnter your initials and Submit.\n';

 

    myTextArea.style.display = "block";

    myInitials.style.display = "block";

    myInitials.style.backgroundColor = "dodgerblue";

 

    myInitials.addEventListener('click', showResults);

 

}

 

function nextQuestion(myQuestion, choicesArray) {

    question.innerHTML = myQuestion;

    choice1.innerHTML = choicesArray[0];

    choice2.innerHTML = choicesArray[1];

    choice3.innerHTML = choicesArray[2];

    choice4.innerHTML = choicesArray[3];

    choice5.innerHTML = choicesArray[4];

}

 

function gotAnswer(event) {

 

    //alert(event.currentTarget.innerHTML);

 

    if (event.currentTarget.innerHTML.charAt(0) === correctAnswers[count].charAt(0)) {

        result.textContent = "Correct";

        result.style.textAlign = "center";

        result.style.color = "green";

        correct++;

    }

    else {

        result.textContent = "Wrong";

        result.style.textAlign = "center";

        result.style.color = "red";

        seconds -= 10;

        wrong++;

    }

 

    count++;

 

    switch(count) {

 

        case 1:

            nextQuestion("Who has won the most World Cups?", question2Choices);

            break;

        case 2:

            nextQuestion("Who was the 32nd president of the United States?", question3Choices);

            break;

        case 3:

            nextQuestion("What is the sixth element of the periodic table?", question4Choices);

            break;

        case 4:

            nextQuestion("Which of the following is an amino acid?", question5Choices);

            break;

        case 5:

            nextQuestion("Which is the volcanoe that produces lava in Hawaii Volcanoes National Park?", question6Choices);

            break;

        case 6:

            nextQuestion("What is the largest lake in the world?", question7Choices);

            break;

        case 7:

            nextQuestion("What is the hardest college to get into in the United States by acceptance rate?", question8Choices);

            break;

        case 8:

            nextQuestion("Which of the following is a common game found at a casino?", question9Choices);

            break;

        case 9:

            nextQuestion("Which of the following is a current company list on the Dow Jones Industrial Average?", question10Choices);

            break;

        default:

            allDone();

            break;

    }

}

 

function startTheQuiz() {

 

    quizHeading.remove();

 

    // question 1

 

    question = document.createElement('h3');

    question.setAttribute('class', '');

    question.innerHTML = "Which of the following was a Cleveland Browns running back?";

    question.style.textAlign = "center";

    question.style.fontStyle = "italic";

    myNewQuestion.appendChild(question);

 

    choice1 = document.createElement('button');

    choice1.setAttribute('class', 'btn');

    choice1.innerHTML = "a. Jim Brown";

    choice1.style.display = "block";

    choice1.style.backgroundColor = "green";

    choice1.style.color = "white";

    choice1.addEventListener("click", gotAnswer, false);

    choices.appendChild(choice1);

 

    choice2 = document.createElement('button');

    choice2.setAttribute('class', 'btn');

    choice2.innerHTML = "b. Barney Rubble";

    choice2.style.display = "block";

    choice2.style.backgroundColor = "green";

    choice2.style.color = "white";

    choice2.addEventListener("click", gotAnswer, false);

    choices.appendChild(choice2);

 

    choice3 = document.createElement('button');

    choice3.setAttribute('class', 'btn');

    choice3.innerHTML = "c. Tom Jones";

    choice3.style.display = "block";

    choice3.style.backgroundColor = "green";

    choice3.style.color = "white";

    choice3.addEventListener("click", gotAnswer, false);

    choices.appendChild(choice3);

 

    choice4 = document.createElement('button');

    choice4.setAttribute('class', 'btn');

    choice4.innerHTML = "d. Frank Wright";

    choice4.style.display = "block";

    choice4.style.backgroundColor = "green";

    choice4.style.color = "white";

    choice4.addEventListener("click", gotAnswer, false);

    choices.appendChild(choice4);

 

    choice5 = document.createElement('button');

    choice5.setAttribute('class', 'btn');

    choice5.innerHTML = "e. Bill Thomas Jim Jon Jeff";

    choice5.style.display = "block";

    choice5.style.backgroundColor = "green";

    choice5.style.color = "white";

    choice5.addEventListener("click", gotAnswer, false);

    choices.appendChild(choice5);

 

    // start the timer

 

    myTimer.textContent = "Seconds left: " + seconds;

    intervalId = setInterval(letsStart, 1000);

 

}

 

// Add an event listener to the start button

 

document.querySelector("#start").addEventListener("click", startTheQuiz);

 