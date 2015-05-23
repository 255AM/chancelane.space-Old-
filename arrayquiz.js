 

var questionsList = [
  ['Which state is known as the "Bluegrass State"?', 'Kentucky'],
  ['What is the capital of Kentucky?', 'Frankfort'],
  ['Which is the most populated city in Kentucky?', 'Louisville']
];

 
   
var answer;
var playerAnswer;
var numberOfQuestions;
var questionsCorrect = '<ol>';
var questionsIncorrect = '<ol>'; 
   
function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
} 
   
function askQuestions() {
   for ( var i = 0; i < questionsList.length; i += 1) {
   
   var question = questionsList[i][0];
   playerAnswer = prompt(question);
    if (playerAnswer === questionsList[i][1]){
        questionsCorrect += '<li>' + questionsList[i][0] + '</li>';
    } else questionsIncorrect += '<li>' + questionsList[i][0] + '</li>';
  }
}
    
  askQuestions(questionsList);

  questionsCorrect += '</ol>';
  questionsIncorrect += '</ol>';
  print(' You answered these correctly ' + questionsCorrect + ' You answered these incorrectly ' + questionsIncorrect);
   
   
   
   