//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var result1Score = 0;

var twilightScore = 0;
var divergentScore = 0;
var hungergamesScore = 0;
var harrypotterScore = 0;

var result = document.getElementById("result");

var restart = document.getElementById("restart");


//VARIABLES - answer choices

//question 1 answer choices
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

//vquestion 2 answer choices
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

//question 3 answer choices
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

//question 4 answer choices
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

//question 5 answer choices
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");


//EVENT LISTENERS

//question 1
q1a1.addEventListener("click", twilight);
q1a2.addEventListener("click", divergent);
q1a3.addEventListener("click", hungergames);
q1a4.addEventListener("click", harrypotter);

  //Q1 disabler
q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);
q1a4.addEventListener("click", disableQ1);

//question 2
q2a1.addEventListener("click", twilight);
q2a2.addEventListener("click", divergent);
q2a3.addEventListener("click", hungergames);
q2a4.addEventListener("click", harrypotter);

  //2 disabler
q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);
q2a4.addEventListener("click", disableQ2);

//question 3
q3a1.addEventListener("click", twilight);
q3a2.addEventListener("click", divergent);
q3a3.addEventListener("click", hungergames);
q3a4.addEventListener("click", harrypotter);

  //Q3 disabler
q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", disableQ3);
q3a4.addEventListener("click", disableQ3);

//question 4
q4a1.addEventListener("click", twilight);
q4a2.addEventListener("click", divergent);
q4a3.addEventListener("click", hungergames);
q4a4.addEventListener("click", harrypotter);

  //Q4 disabler
q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", disableQ4);
q4a3.addEventListener("click", disableQ4);
q4a4.addEventListener("click", disableQ4);

//question 5
q5a1.addEventListener("click", twilight);
q5a2.addEventListener("click", divergent);
q5a3.addEventListener("click", hungergames);
q5a4.addEventListener("click", harrypotter);

  //Q5 disabler
q5a1.addEventListener("click", disableQ5);
q5a2.addEventListener("click", disableQ5);
q5a3.addEventListener("click", disableQ5);
q5a4.addEventListener("click", disableQ5);



//restart button
restart.addEventListener("click", startover);


//FUNCTIONS

function twilight(){
  twilightScore+=1;
  questionCount+=1;
  //alert("One Point for Twilight!");
  if(questionCount >= 5){
   updateResult(); 
  }
}

function divergent(){
  divergentScore+=1;
  questionCount+=1;
  //alert("One Point for Divergent!");
  if(questionCount >= 5){
   updateResult(); 
  }
}

function hungergames(){
  hungergamesScore+=1;
  questionCount+=1;
  //alert("One Point for The Hunger Games!");
  if(questionCount >= 5){
   updateResult(); 
  }
}

function harrypotter(){
  harrypotterScore+=1;
  questionCount+=1;
  //alert("One Point for Harry Potter!");
  if(questionCount >= 5){
   updateResult(); 
  }
}

function updateResult(){
  if (twilightScore >= 2){
    result.innerHTML = "Twilight!";
  }
  else if (divergentScore >= 3){
    result.innerHTML = "Divergent!";
  }
  else if (hungergamesScore >= 3){
    result.innerHTML = "The Hunger Games!";
  }
  else if (harrypotterScore >= 3){
    result.innerHTML = "Harry Potter!";
  }
  else{
    result.innerHTML = "Uh oh, it's a tie! Try again!!";
  }
}

function startover(){
  result.innerHTML = "You belong in...";
  twilightScore = 0;
  divergentScore = 0;
  hungergamesScore = 0;
  harrypotterScore = 0;
  questionCount = 0;
  
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q1a3").disabled = false;
  document.getElementById("q1a4").disabled = false;
  
  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q2a3").disabled = false;
  document.getElementById("q2a4").disabled = false;
  
  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
  document.getElementById("q3a3").disabled = false;
  document.getElementById("q3a4").disabled = false;
  
  document.getElementById("q4a1").disabled = false;
  document.getElementById("q4a2").disabled = false;
  document.getElementById("q4a3").disabled = false;
  document.getElementById("q4a4").disabled = false;
  
  document.getElementById("q5a1").disabled = false;
  document.getElementById("q5a2").disabled = false;
  document.getElementById("q5a3").disabled = false;
  document.getElementById("q5a4").disabled = false;
}

function disableQ1(){
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
  document.getElementById("q1a3").disabled = true;
  document.getElementById("q1a4").disabled = true;
}

function disableQ2(){
  document.getElementById("q2a1").disabled = true;
  document.getElementById("q2a2").disabled = true;
  document.getElementById("q2a3").disabled = true;
  document.getElementById("q2a4").disabled = true;
}

function disableQ3(){
  document.getElementById("q3a1").disabled = true;
  document.getElementById("q3a2").disabled = true;
  document.getElementById("q3a3").disabled = true;
  document.getElementById("q3a4").disabled = true;
}

function disableQ4(){
  document.getElementById("q4a1").disabled = true;
  document.getElementById("q4a2").disabled = true;
  document.getElementById("q4a3").disabled = true;
  document.getElementById("q4a4").disabled = true;
}

function disableQ5(){
  document.getElementById("q5a1").disabled = true;
  document.getElementById("q5a2").disabled = true;
  document.getElementById("q5a3").disabled = true;
  document.getElementById("q5a4").disabled = true;
}