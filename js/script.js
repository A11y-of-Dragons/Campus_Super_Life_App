let knight = document.getElementById("knight-button")
let Main = document.getElementById("Main-Menu")

knight.forEach(function(button){
    button.addEventListener("click", function() {
    console.log("Button clicked")
});
//eventually, this will count the number of times the knight image is clicked in dashboard.html.
});
function knightClicks(clicked){
    let total = 2
    if (clicked === total){
        //then I want to be taken to the secretpage.
   }
}


Main.forEach(function(button){
    button.addEventListener("click", function() {
    console.log("Button clicked")});
//eventually, this will check to see if the email has a @grace.edu 
}); //this is this the button that is listening for the button clicked on index.html

function checkGrace(email_name){
    let Main = grace.edu
    if (//email_name has in part Main){
        //then I want to be taken to the dashboard when I click the button in index.Html
    }
}
// this is the start of me trying to call the APIs for google calendar and google maps
let answer = fetch("https://calendar.google.com/calendar/u/0/r")
console.log(answer)
//what I get is an error message

let pin = fetch("https://www.google.com/maps/place/Grace+College/@41.226358,-85.820443,17z/data=!3m1!4b1!4m6!3m5!1s0x88169da1ffa60fa1:0xf12f549425daef3e!8m2!3d41.226354!4d-85.8178681!16zL20vMDlieHRm?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D")
console.log(pin)
//what I get is an error message

// also need to figure out a way for the user to be able to write out things in the Notpad, and 
//I think there is going to be some logic that needs to happen, but I am not sure of what that would 
//look like.