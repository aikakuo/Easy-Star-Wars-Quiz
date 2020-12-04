var startBtn = document.querySelector('.start_btn')
var rulesBox = document.querySelector('.rules_b')
var nextBtn = document.querySelectorAll('.buttons .next')
var queBox = document.querySelector('.question_box')
var exitBtn = document.querySelector('.buttons .quit_game')

startBtn.addEventListener( "click", function(){
   rulesBox.classList.add("active_rules")
   quizBox.classList.add("active_rules")
})

nextBtn.addEventListener( "click", function(){
       queBox.classList.add("active")
    //    quizBox.classList.add("active_rules")
    })


// // // time to count down

// var div = document.getElementById('set-timer')
// var count = 60

// setInterval(function() {
//     count--
//     div.innerText = count + ' seconds have passed'
//     var timesup = 0
//     if(count==timesup){
//         return count;
// //     }
// }, 1000) 




//when start button pressed onclick function turns page to rules 
//set up timer that counts down from 60 sec
// set up score function
// set up quiz box with questions 
//once player choses answer set up on click function
//if answer correct add to score 
// if answer incorrect show the correct answer 
//if time is up game stops and user can save the game
//check the score