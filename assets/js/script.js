console.log("connected!")
// Wait for the DOM to finish loading before the game
// Get the buttone elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
 let buttons  = document.getElementsByTagName("button") ; 
 console.log(buttons);
    for (let button of buttons){
        button.addEventListener("click",function(){
         if(this.getAttribute("data-type") === "submit") {
            alert(`You clicked ${this.getAttribute("data-type").toUpperCase()}!`)
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

function checkAnswer(){

}
function calculateCorrectAnswer(){

}
function incrementScore(){

}
function incrementWrongAnswer(){

}
function displayAddtionQuestion(operand1, operand2) {
   document.getElementById("operand1").textContent=operand1;
   document.getElementById("operand2").textContent=operand2;
   document.getElementById("operator").textContent="+";
   
}
function displaySubtractQuestion() {

}
function displayMultiplyQuestion() {

}
function displayDivisionQuestion() {

}