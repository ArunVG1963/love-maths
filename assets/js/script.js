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
function runGame() {

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