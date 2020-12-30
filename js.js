var startBtn = document.querySelector('.start_btn')
var rulesBox = document.querySelector('.rules_b')
var nextBtn = document.querySelector('.next')
var queBox = document.querySelector('.question_box')
var score = document.querySelector('.score')
var exitBtn = document.querySelector('.quit_game')
var nextQue = document.querySelector('.next_question')

var resultBox = document.querySelector('.result_box')
var localScore = document.querySelector('.local_score')

var queCount = 0;


//start game 
startBtn.addEventListener( "click", function(){
   rulesBox.classList.add("active_rules")  
})
//next button into the quiz
nextBtn.addEventListener( "click", function(){
    queBox.classList.add("active")
    showQuestions(0)//shows the questions function  
    timer(60)
    
 })
//exit the game goes back to start page
 exitBtn.addEventListener( "click", function(){
    rulesBox.classList.remove("active_rules") 
 })


//next question button questions_box must change 5 times 
nextQue.addEventListener( "click", function(){
   if (queCount < questions.length -1) {
   queCount++
   showQuestions(queCount)
   
  
   
}//shows the questions function
   

   else {
      resultBox.classList.add('active_results')
      timeCount = 0
   }
   
}) 

var optionsList = document.querySelector(".options_list")


function showQuestions(index) {
//questions
  var queText = document.getElementById("questions-title");
  
  var queTags = "<span>" + questions[index].count +' . '+ questions[index].question + "</span>";
//options list
//targeting tags in DOM
  var optionTags = '<div class="option">' + questions[index].options[0] + '<span></span></div>' + 
  '<div class="option">' + questions[index].options[1] + '<span></span></div>' + '<div class="option">' + questions[index].options[2] + '<span></span></div>' + '<div class="option">' + questions[index].options[3] + '<span></span></div>'

  optionsList.innerHTML = optionTags 
  queText.innerHTML = queTags 
  
  var options = optionsList.querySelectorAll('.option')
  
  for (var i = 0; i < options.length; i++) {
    options[i].setAttribute('onclick', 'showAnswer(this)')
  }
  
  }
  
//for loop is not working need to figure out 

  var scoreCount = document.getElementById('score_count')
  var score = 0
  var scorePoints = 10

  function showAnswer(answer) {
   var usersChoice = answer.textContent
   var correctAns = questions[queCount].answer
   var allOptions = optionsList.children.length
   

   if (usersChoice === correctAns) {
    
      answer.classList.add('correct')
      score += scorePoints
      scoreCount.innerText = 'Score :' + score 
      localScore.innerText = 'Score : ' + score
      
      } 
   else {
     
      answer.classList.add('incorrect') 
      for (var i = 0; i < allOptions; i++) {
         if (optionsList.children[i].textContent == correctAns)
         optionsList.children[i].setAttribute('class', 'option correct')
      }
      

      } 
    for (var i = 0; i< allOptions; i++ ){
       optionsList.children[i].classList.add('disabled')
    }
   }
//local storage 






var saveScoreBtn = document.getElementById("save-score-btn")
var submit = document.getElementById("submit")
var highScore = document.querySelector(".high_score_box")
var userInput = document.querySelector(".user_input")

 saveScoreBtn.addEventListener("click", function(event){
   event.preventDefault()
   var userName = document.querySelector("#username").value
   var userNameSpan = document.querySelector(".username_span")

   userNameSpan.textContent = "Username : " + userName
   function renderLastRegistered() {
      
      var localCount = localStorage.getItem("score")
      var userName = localStorage.getItem("username".value)

      if (userName === null) {
         return;
      }
      
   }
   
   // localStorage.setItem('score',score)
   
   localStorage.setItem("username", userName)
   
   localStorage.setItem('score', score)

  
  
   userInput.textContent = "Username : " + userName + " " + "Score : " + score

   submit.addEventListener( "click", function(){
      event.preventDefault()
      highScore.classList.add("active_high_score") 
      userInput = localStorage.getItem("username", "score")
     
   })
})


//timer 60 - 0 at zero timer stops 
var count = 60
var timesUp = 0  
var timeCount = document.getElementById('set-timer')

function timer() {

setInterval(function() {
    count--
    timeCount.innerText = 'Time Left : ' + count


    if (timesUp === count 
      ){
         timeCount = 0
         resultBox.classList.add('active_results')
       
   }   
}, 1000)}
  
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

