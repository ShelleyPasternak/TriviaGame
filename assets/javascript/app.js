$(document).ready(function(){

//time limit for answering questions
var number = 120;
var timer = [];
var intervalId;

//click button to start quiz and timer
$("#startGame").on("click", run);

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  //  The decrement function.
  function decrement() {
    //  Decrease number by one.
    number--;
    //  Show the time remaining in the #timeRemaining tag.
    $("#timerRemaining").html("<h2>" + number + "</h2>");

    //  Once number hits zero...
    if (number === 0) {
        //  ...run the stop function.
        stop();
        //  Alert the user that time is up.
        console.log("Time Up!");
      }
    }
    //  The stop function
    function stop() {
      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }
    //  Execute the run function.
    run();


})

//create questions array and for loop

//store answers to questions
var triviaGame

var correctAnswers = 0;
var wrongAnswers = 0; 

var question1 = {
    question: "What kind of a dog is Doug from the movie Up?",
    choices: ["A. Rottweiler", "B. Poodle", "C. Goldfish", "D. Golden Retriever"],
    answer: "D. Golden Retriever"
};

var question2 = {
    question: "Who made polydactyl cats popular in the United States?",
    choices: ["A. Albert Einstein", "B. Ernest Hemingway", "C. Napoleon", "D. Jennifer Lopez"],
    answer: "B. Ernest Hemingway"
};

var question3 = {
    question: "How many compartments make up the stomach of a cow?",
    choices: ["A. 6", "B. 1", "C. 4", "D. 10"],
    answer: "C. 4. They are the rumen, reticulum, omasum, and abomasum"
};


var question4 = {
    question: "Which animal is not a marsupial?",
    choices: ["A. Panda", "B. Koala", "C. Kangaroo", "D. Oppossum"],
    answer: "A. Panda"
};

//create question array and buttons
var questionArray = [question1, question2, question3, question4];

for (var i = 0; i < questionArray.length; i++){

$("question").html("<h2>" + questionArray+ "<h2>");
$("#buttonA").text(questionArray.choices).show();
$("#buttonB").text(questionArray.choices).show();
$("#buttonC").text(questionArray.choices).show();
$("#buttonD").text(questionArray.choices).show();

}

//limit the answers to the questions to only one answer
    //I'm stuck here

//note correct answers, incorrect answers, and unanswered questions


//click a second button to stop quiz and timer

//at the end of the time, do not allow player to change answers

//show correct and incorrect answers

//display score

//reset timer
