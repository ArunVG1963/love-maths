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
            alert(`You clicked ${gameType.toUpperCase()}`);
         }
        })
    }
})
/** The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame() {
let num1=Math.floor(Math.random()*25)+1;
let num2=Math.floor(Math.random()*25)+1;

}

function checkAnswer(){

}
function calculateCorrectAnswer(){

}
function incrementScore(){

}
function incrementWrongAnswer(){

}
function displayAddtionQuestion() {

}
function displaySubtractQuestion() {

}
function displayMultiplyQuestion() {

}
function displayDivisionQuestion() {

}