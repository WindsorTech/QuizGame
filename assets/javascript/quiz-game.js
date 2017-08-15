$(document).ready(function () {

var questions = [{
    question: "1. What is the largest country in the world?",
    choices: ["China", "Russia", "United States", "Canada"],
    giphy: "<img src='https://media.giphy.com/media/vE4LYvPFy7tLy/giphy.gif' width=290 height=200>",
    text: "Russia is the world's largest country, with a total area of 17.1 million square kilometers.",
    correctAnswer: 1
}, {
    question: "2. What is the approximate population of India?",
    choices: ["750 million", "900 million", "1 billion", "1.2 billion"],
    correctAnswer: 3
}, {
    question: "3. Who is the current president of the United States?",
    choices: ["Hillary Clinton", "Donald Trump", "Barack Obama", "George W Bush"],
    correctAnswer: 2
}, {
    question: "4. In what continent is Chile located?",
    choices: ["Central America", "Asia", "South America", "Europe"],
    correctAnswer: 2
}, {
    question: "5. What is the currency of Brazil?",
    choices: ["Brazilian Real", "Brazilian Peso", "Brazilian Dollar", "Brazilian Florin"],
    correctAnswer: 0
}, {
    question: "6. Between what years did World War I take place?",
    choices: ["1904 - 1908", "1914 - 1918", "1929-1935", "1939-1945"],
    correctAnswer: 1
}, {
    question: "7. What is the world's most popular sport?",
    choices: ["Basketball", "Football", "Baseball", "Soccer"],
    correctAnswer: 3
}, {
    question: "8. What is Earth's approximate age?",
    choices: ["2.3 billion years", "3.6 billion years", "4.5 billion years", "5.2 billion years"],
    correctAnswer: 2
}];

var currentQuestion = 0;
var correctAnswers = 0;
var wrongAnswers = 0;
var quizOver = false;
var secs = 15;


    $(".checkButton").hide();
    $(".nextButton").hide();

    $(".start-button").click(function(){

        timer();

        $(".quizMessage").hide();
        $(".start-button").hide();
        $(".checkButton").show();
        $(".answer-container").hide();

        displayCurrentQuestion();

    });

    $(".checkButton").click(function(){

        checkAnswer();

    });

//====================== FUNCTIONS ================//    

    function timer() {

        setInterval(function() {
            secs--;

            $('.timer-zone').text("Time Remaining: " +secs+" seconds");

            if (secs == -1) {
                
                checkAnswer();
                
            }
        }, 1000);

    }

//========================================================//

// This displays the current question AND the choices
function displayCurrentQuestion() {

    $('.timer-zone').text("Time Remaining: 15 seconds");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("ul").remove();

    var choice;

    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<ul><input type="radio" value=' + i + ' name="dynradio" /> ' + choice + '</ul>').appendTo(choiceList);
    }
}


//========================================================//

    function checkAnswer() {

        // Get input choice from user
        value = $("input[type='radio']:checked").val();

        $(".answer-container").show();

            // If the user has not chosen any options, tell him to do so
            if (value == undefined) {

                $(".quizMessage").text("Please select an answer above");
                $(".quizMessage").show();

            } else {
                
                // if the user answer is correct     
                if (value == questions[currentQuestion].correctAnswer) {

                    correctAnswers++;

                    $(".timer-zone").hide();
                    $(".question").hide();
                    $(".choiceList").hide();
                    $(".quizMessage").hide();

                    $(".answer-msg").html("<font color='#00b300'>CORRECT ANSWER!</font>");
                    $(".answer-msg2").html(questions[currentQuestion].text);
                    $(".answer-gif").html(questions[currentQuestion].giphy);

                    $(".checkButton").hide();
                    $(".nextButton").show();

                } else { // if the user answer is wrong

                    wrongAnswers++;

                    $(".timer-zone").hide();
                    $(".question").hide();
                    $(".choiceList").hide();
                    $(".quizMessage").hide();

                    $(".answer-msg").html("<font color='#ff0000'>WRONG ANSWER!</font>");
                    $(".answer-msg2").html(questions[currentQuestion].text);
                    $(".answer-gif").html(questions[currentQuestion].giphy);

                    $(".checkButton").hide();
                    $(".nextButton").show();
                }

                //currentQuestion++; // Since we have already displayed the first question on DOM ready

                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    //                    $(document).find(".nextButton").toggle();
                    //                    $(document).find(".playAgainButton").toggle();
                    // Change the text in the next button to ask if user wants to play again
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        

    }

//================================================//

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("Correct Answers: " + correctAnswers);
    $(document).find(".quizContainer > .result").show();
    $(document).find(".quizContainer > .result-two").text("Wrong Answers: " + wrongAnswers);
    $(document).find(".quizContainer > .result-two").show();
    $(document).find(".question").hide();
    $(document).find(".choiceList").hide();

}

function hideScore() {
    $(document).find(".result").hide();
    $(document).find(".result-two").hide();
    $(document).find(".question").show();
    $(document).find(".choiceList").show();

}


});

