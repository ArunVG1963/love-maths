console.log("connected!")
// Wait for the DOM to finish loading before the game
// Get the buttone elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
 let buttons  = document.getElementsByTagName("button") ; 
 console.log(buttons);
    for (let button of buttons){
        button.addEventListener("click",function(){
         if(this.getAttribute("data-type") === "submit") {
            checkAnswer();
         }  
         else
         {
            let gameType=this.getAttribute("data-type");
            runGame(gameType);
         }
        })
    }
      runGame("addition");

})
/** The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame(gameType) {

let num1=Math.floor(Math.random()*25)+1;
let num2=Math.floor(Math.random()*25)+1;

if (gameType === "addition") {
   displayAddtionQuestion(num1,num2);

}
 else {
   alert(`Unknown game type: ${gameType}`);
   throw `Unknown game type: ${gameType}. Aborting!`;
    }   
  
if (gameType === "subtract") {
   displaySubtractQuestion(num1,num2);
}
if (gameType === "multiply") {
   displayMultiplyQuestion(num1,num2);
}
if (gameType === "division") {
   displayDivisionQuestion(num1,num2);
}

}
/**
 * Checks tht answere against the first elmenent in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer(){
   let userAnswer = parseInt(document.getElementById("answer-box").value);
   let calculatedAnswer=calculateCorrectAnswer();
   let isCorrect = userAnswer  === calculatedAnswer[0];
   if (isCorrect){
       alert("Hey! You got it right!");
      incrementScore();
   }else {
       alert(`Awww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer}`);
       incrementWrongAnswer();
   }
   runGame(calculatedAnswer[1]);
}
/**
 * Get the operands (the numbers) and the operator (plus, mint etc)
 * directly from the dom, and returns the correct answer.
 */

function calculateCorrectAnswer(){
    let operand1=parseInt(document.getElementById("operand1").innerText);
    let operand2=parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;
    if (operator === "+"){
       return [operand1 + operand2, "addition"]
    } else {
         alert(`unimplemented operator ${operator}`);
         throw `unimplemented operator ${operator}`;
    }
    if (operator === "-"){
      return [operand1 - operand2, "subtract"]
   } else {
        alert(`unimplemented operator ${operator}`);
        throw `unimplemented operator ${operator}`;
   }
   if (operator === "+"){
      return [operand1 * operand2, "multiply"]
   } else {
        alert(`unimplemented operator ${operator}`);
        throw `unimplemented operator ${operator}`;
   }
   if (operator === "/"){
      return [operand1 / operand2, "addition"]
   } else {
        alert(`unimplemented operator ${operator}`);
        throw `unimplemented operator ${operator}`;
   }
}
/**
 * Get the current score from the DOM and increments it by 1
 */
function incrementScore(){
  let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").textContent=++oldScore;

}
/**
 * Get the current tally of inccorect score from the DOM and increments it by 1
 */
function incrementWrongAnswer(){
let oldIncorrect = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText=++oldIncorrect;
}
function displayAddtionQuestion(operand1, operand2) {
   document.getElementById("operand1").textContent=operand1;
   document.getElementById("operand2").textContent=operand2;
   document.getElementById("operator").textContent="+";
   
}
function displaySubtractQuestion(operand1, operand2) {
   document.getElementById("operand1").textContent=operand1;
   document.getElementById("operand2").textContent=operand2;
   document.getElementById("operator").textContent="-";
   
}
function displayMultiplyQuestion(operand1, operand2) {
   document.getElementById("operand1").textContent=operand1;
   document.getElementById("operand2").textContent=operand2;
   document.getElementById("operator").textContent="X";
   
}
function displayDivisionQuestion(operand1, operand2) {
   document.getElementById("operand1").textContent=operand1;
   document.getElementById("operand2").textContent=operand2;
   document.getElementById("operator").textContent="/";
   
}