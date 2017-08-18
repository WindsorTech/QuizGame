$(document).ready(function () {

// Game Variables

// Array of objects with questions data
var questions = [{
    question: "1. What is the largest country in the world?",
    choices: ["China", "Russia", "United States", "Canada"],
    giphy: "<img src='https://media.giphy.com/media/yqj1Nq2LDeWPu/giphy.gif' width=290 height=200>",
    text: "Russia is the world's largest country, with a total area of 17.1 million square kilometers",
    correctAnswer: 1
}, {
    question: "2. What is the approximate population of India?",
    choices: ["750 million", "900 million", "1 billion", "1.2 billion"],
    giphy: "<img src='https://media.giphy.com/media/qj9LH3O2Td1Kg/giphy.gif' width=290 height=200>",
    text: "India's current population is approximately 1.2 billion people",
    correctAnswer: 3
}, {
    question: "3. What is the capital city of Australia?",
    choices: ["Melbourne", "Sydney", "Canberra", "Adelaide"],
    giphy: "<img src='https://media.giphy.com/media/luFnd5dLvB4pW/giphy.gif' width=290 height=200>",
    text: "Canberra is the capital of Australia",
    correctAnswer: 2
}, {
    question: "4. In what continent is Chile located?",
    choices: ["Central America", "Asia", "South America", "Europe"],
    giphy: "<img src='https://media.giphy.com/media/VHuvKNvDvIszC/giphy.gif' width=290 height=200>",
    text: "Chile is located on the western coast of South America",
    correctAnswer: 2
}, {
    question: "5. What is the currency of Brazil?",
    choices: ["Brazilian Real", "Brazilian Peso", "Brazilian Dollar", "Brazilian Florin"],
    giphy: "<img src='https://media.giphy.com/media/GR7S6M8eUQwKY/giphy.gif' width=290 height=200>",
    text: "Brazil's official currency is called Real",
    correctAnswer: 0
}, {
    question: "6. Between what years did World War I take place?",
    choices: ["1904 - 1908", "1914 - 1918", "1929-1935", "1939-1945"],
    giphy: "<img src='https://media.giphy.com/media/B5wsiHIFt2QkU/giphy.gif' width=290 height=200>",
    text: "World War I happened from 1914 to 1918",
    correctAnswer: 1
}, {
    question: "7. What is the world's most popular sport?",
    choices: ["Basketball", "Football", "Baseball", "Soccer"],
    giphy: "<img src='https://media.giphy.com/media/l2JhGDtOnOyeqDM4w/giphy.gif' width=290 height=200>",
    text: "Soccer is the most popular sport in the world",
    correctAnswer: 3
}, {
    question: "8. What is Earth's approximate age?",
    choices: ["2.3 billion years", "3.6 billion years", "4.5 billion years", "5.2 billion years"],
    giphy: "<img src='https://media.giphy.com/media/rVz1J8spLtUtO/giphy.gif' width=290 height=200>",
    text: "Our planet Earth is approximately 4.5 billion years old",
    correctAnswer: 2
}];

var currentQuestion = 0;
var correctAnswers = 0;
var wrongAnswers = 0;
var quizOver = false;
var secs = 10;

    // Hide the Check and Next buttons
    $(".checkButton").hide();
    $(".nextButton").hide();
    $(".resultButton").hide();
    $(".playAgainButton").hide();

    // On the click of the Start Button - start the game
    $(".start-button").click(function(){

        // Set up game environment
        $(".start-button").hide();
        $(".quizMessage").hide();
        $(".checkButton").show();
        $(".answer-container").hide();

        // Start the 15s timer
        timer();

        // Call the function to display first question
        displayCurrentQuestion();
    });

    // On the click of the Check button
    $(".checkButton").click(function(){

        // Get input answer from user
        value = $("input[type='radio']:checked").val();

            // if the user did not select any options, tell him to do so
           if (value == undefined) {

                $(".quizMessage").html("<font color='#2f6ce0'>Please select an answer above</font>");
                $(".quizMessage").show();

            } else { //If an answer was selected, call the function to check the answer

                checkAnswer();
            }
    });

//====================== Game Functions ================//  

    // Timer Function
    function timer() {

         setInterval(function() {

            // Countdown seconds
            secs--;

            // Display timer on screen
            $('.timer-zone').text("Time Remaining: " +secs+" seconds");

            // If the seconds reach zero, check the answer
            if (secs == 0) {

            checkAnswer();
                
            } 
        }, 1000);

    }


//========================================================//

// Function to display current question and choices
function displayCurrentQuestion() {

    $('.timer-zone').text("Time Remaining: 10 seconds");

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

        secs = 0;
                
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

                currentQuestion++;  

                  if (currentQuestion == 8) {
                        $(".nextButton").hide();
                        $(".resultButton").show();
                    }

                $(".nextButton").click(function(){
                    nextQuestion();                                     
                });

                $(".resultButton").click(function(){
                    finalResult();                                     
                });   

    }

    //==================================================//

    function nextQuestion() {

            $('.timer-zone').text("Time Remaining: 10 seconds");
            secs = 11;

            // Set up game environment
            $(".timer-zone").show();
            $(".start-button").hide();
            $(".quizMessage").hide();
            $(".question").show();
            $(".choiceList").show();
            $(".checkButton").show();
            $(".answer-container").hide();
            $(".nextButton").hide();

            // Call the function to display first question
            displayCurrentQuestion();

    }

//======================================================//

function finalResult() {

        $(".timer-zone").hide();
        $(".start-button").hide();
        $(".quizMessage").hide();
        $(".question").hide();
        $(".choiceList").hide();
        $(".checkButton").hide();
        $(".nextButton").hide();
        $(".resultButton").hide();
        $(".playAgainButton").show();
        $(".answer-container").show();

        $(".answer-msg").text("RESULTS");
        $(".answer-msg2").html("<p>Correct Answers: " + correctAnswers + "</p><p>Wrong Answers: " + wrongAnswers + "</p>");

        if (correctAnswers <= 3 ) {

            $(".answer-gif").text("You need to improve your world knowledge, think outside the box!");

        } else if (correctAnswers > 3 && correctAnswers <= 6) {

            $(".answer-gif").text("You did a good job, but keep being curious and you will get far!");

        } else if (correctAnswers > 6) {

            $(".answer-gif").text("You are a world master! Have you thought about running for president?!");
            
        }

}


//================================================//

function restartGame() {


}


});

