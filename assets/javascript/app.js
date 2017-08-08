var correctAnswers = 0;
var notAnswered = 0;

//var tempo = setTimeout(CheckScore, 1000 * 120)


$(document).ready(function () {

	var tempo = setTimeout(10000000);

	$(this).find("#questions").hide();
	$(this).find("#done-button").hide();

		$(this).find("#start-button").on("click", function () {
		    // Display the questions - hide Start Button
		    $(document).find("#questions").show();
		    $(document).find("#start-button").hide();
		    $(document).find("#done-button").show();
		    countDown(120,"timer-zone");

		});


});

// Function for the 120 seconds Timeout
function countDown (secs,elem) {
		    	var element = document.getElementById(elem);
		    	element.innerHTML = "Time Remaining: " +secs+" seconds";
		    	if (secs < 1) {
		    		clearTimeOut(timer);
		    		element.innerHTML = '<h2>Countdown Complete!</h2>';
		    		element.innerHTML += '<a href="#">Click here</a>';
		    	}
		    	secs--;
		    	var timer = setTimeout('countDown('+secs+',"'+elem+'")',1000);
		    }

function returnResult()
  {         
var amountCorrect = 0;  
var wrongAnswers = 0;        
for(var i = 1; i <= 45; i++) {
  var radios = document.getElementsByName('optradio'+i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value == "correct" && radio.checked) {
      amountCorrect++;
    } if else (radio.value == "wrong" && radio.checked) {
    	wrongAnswers++;

    }
  }
 }                   
    alert("Correct Responses: " + amountCorrect);
    alert("Wrong Responses: " + wrongAnswers);
  }



function checkScore() {
	if($("#q1b:checked").length){
		console.log("I got it!");
	}


}




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

function displayTime() {
	var tempo = setTimeout(10000000);
	$(document).find("#timer").text("Time Remaining: " + tempo);

}


function hideScore() {
    $(document).find(".result").hide();
    $(document).find(".result-two").hide();
    $(document).find(".question").show();
    $(document).find(".choiceList").show();

}