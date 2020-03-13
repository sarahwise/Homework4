//When Timer starts I am presented with a question
//WHEN I answer a question THEN I am presented with another question
//variables for score,timer, and enter name
var score =0;
var isWaiting = false;
var isRunning = false;
var seconds = 10;
var countdownTimer;
var finalCountdown = false;
var person = prompt("Please enter your name");

//Timer
function GameTimer() {
    var minutes = Math.round((seconds - 30) / 60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
    document.getElementById('waiting_time').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        isRunning = true;
        seconds += 2;

        if (finalCountdown) {
            clearInterval(countdownTimer);
        } else {
            finalCountdown = true; 
        }

    } else {
        isWaiting = true;
        seconds--;
    }
}
countdownTimer = setInterval(GameTimer, 1000); 

//Questions Array
var questions =   [
    {
      question: "Inside which HTML element do we put the JavaScript?",
      choices: [<script>,<scripting>,<js>"],
      answer: 1
    },
    
    {
      question: "Who invented Java Script?",
      choices: [James Gosling, Mark Zuckerburg,Brendan Eich"],
      answer: 3
    }

    {
        question: "Where is the correct place to insert a JavaScript?",
        choices: ["<head>,<body>,Both A and B:"],
        answer: 3
      }

      {
        question: "How do you create a function in JavaScript?",
        choices: ["function:myFunction(),function myFunction(),function=myFunction"],
        answer: 2
      }
      
      {
        question: "How does a for loop start?",
        choices: ["for(i=0; i <=5; i++),for (i <=5:' i++,for (i=0;<=5)"],
        answer: 1
      }
    ];


//Loop to take you through questions

for ( var i = 0; i < questions.length; i++ ) {
    var question = questions[i].question;
    document.write ( question );
    var options = questions[i].choices;
    for ( var opt in options ) {
       for ( var radios in userChoices ) {
         userChoices[radios].value = options[opt];
         
       }
    }
    
  } 


//WHEN I answer a question incorrectly THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0


//Score Alert
alert("you got" + score + "/" + questions.lenght);


//WHEN the game is over THEN I can save my initials and score
//Enter High Score
if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! What was your score?";
  }

  if (score != null) {
    document.getElementById("demo").innerHTML =
    "Wow " + person + "! Great Job!";
  }















