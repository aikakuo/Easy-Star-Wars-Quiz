//when start button pressed onclick function turns page to rules 
//set up timer that counts down from 60 sec
// set up score function
// set up quiz box with questions 
//once player choses answer set up on click function
//if answer correct add to score 
// if answer incorrect show the correct answer 
//if time is up game stops and user can save the game
//check the score

var startBtn = document.querySelector('.start_btn')
var rulesBox = document.querySelector('.rules_b')
var nextBtn = document.querySelector('.next')
var queBox = document.querySelector('.question_box')
var exitBtn = document.querySelector('.quit_game')
var nextQue = document.querySelector('.next_question')
var queCount = 0;
var score = 0

//start game 
startBtn.addEventListener( "click", function(){
   rulesBox.classList.add("active_rules")  
})
//next button into the quiz
nextBtn.addEventListener( "click", function(){
    queBox.classList.add("active")
    showQuestions(0)//shows the questions function  
 })
//exit the game goes back to start page
 exitBtn.addEventListener( "click", function(){
    rulesBox.classList.remove("active_rules")  
 })
//next question button questions_box must change 5 times 
nextQue.addEventListener( "click", function(){
   queCount++
   showQuestions(queCount)//shows the questions function

}) 
 




function showQuestions(index) {
//questions
  var queText = document.getElementById("questions-title");
  var optionsList = document.querySelector(".options_list")
  var queTags = "<span>" + questions[index].question + "</span>";
//options list
//targeting tags in DOM
  var optionTags = '<div class="option">' + questions[index].options[0] + '<span></span></div>' + 
  '<div class="option">' + questions[index].options[1] + '<span></span></div>' + '<div class="option">' + questions[index].options[2] + '<span></span></div>' + '<div class="option">' + questions[index].options[3] + '<span></span></div>'

  optionsList.innerHTML = optionTags 
  queText.innerHTML = queTags
  
}
//questions array with options and answers
var questions = [{
   count: 1,
   question: "According to Master Yoda, how many Sith are always out there?",
   options: [
        '1', '2', '3', '4'],
   answer: '2'
},
{  
   count: 2,
   question: "Whose lightsaber did Luke Skywalker receive from Obi-Wan?",
   options: [
       'Anakin Skywalker', 'Yoda', 'Obi-Wan Kenobi', 'Obi-Wan had extra'],
   answer: 'Anakin Skywalker'
},
{  count: 3,
   question: "Who played Princess Leia?",
   options: [
        'Gillian Anderson',
        'Sigourney Weaver',
        'Linda Hamilton',
        'Carrie Fisher'],
   answer: 'Carrie Fisher'
},
{   count: 4,
   question: "Which of these movies is the one where Luke finds out Vader is his father?",
   options: [ 'Return of the Jedi',
       'The Empire Strikes Back',
      ' The Force Awakens',
       'Attack of the Clones'],
       answer:'The Empire Strikes Back'
},
{
   count: 5,
   question: "Who is the only non Jedi in the original Star Wars trilogy to use a lightsaber?",
   options: [ 'Han Solo',
       'Chewbaca',
      ' R2-D2',
       'C-3PO'],
       answer:'Han Solo'
}]
// function selectAnswer {

// }






// // // timer function

// var div = document.getElementById('set-timer')
// var count = 60

// setInterval(function() {
//     count--
//     div.innerText = count + ' seconds have passed'
//     var timesup = 0
//     if(count==timesup){
//         return count;
//      }
// }, 1000) 




