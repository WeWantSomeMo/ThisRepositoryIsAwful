var StartContainer = document.getElementById ("Start-Journey")
var startbtn = document.getElementById ("startbtn")
var QuestionContainer = document.getElementById ("Questions")
var QuestionEl = document.getElementById ("Question")
var AnswersEl = document.getElementById ("Answers")
var userAnswer = '';
var numCorrect = 0;
var output = [];
var answers;
var endContainer = document.getElementById ("end")
var TimeEl = document.getElementById ("timer")
var CurentQuestionIndex = 0
var Time = 300
var TimerId 
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
        title:
          "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
      },
      {
        title:
          "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
      }
    ];

function StartQuiz() {
    StartContainer.setAttribute("class","hide")
    TimerId= setInterval (countdown, 1000)
    TimeEl.textContent = "Time: "+Time 
    getQuestion (questions)
}
function countdown() {
    Time--
    TimeEl.textContent = "Time: "+Time

    if (Time<= 0) {
        endquiz()
    }
}
function getQuestion() {
    var CurentQuestion = questions [CurentQuestionIndex];
    QuestionEl.textContent= CurentQuestion.title
    AnswersEl.innerHTML= ""
    CurentQuestion.choices.forEach(function (choice){
        var Choicebtn= document.createElement("button")
        Choicebtn.textContent=choice
        Choicebtn.setAttribute("value",choice)
        Choicebtn.onclick= checkanswer
    AnswersEl.appendChild(Choicebtn)
    for(var i=0; i<questions.length; i++){
        answers = [];
        answers.push(
            '<label>'
            + '<input type="radio" name="question'+i+'" value"'+choice+'">'
            + choice +':'
            +questions[i].questions[choice]
            + '</label>'
        )
    output.push(
        '<div class="qustion">' +questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
    )
    QuestionContainer.innerHTML = output.join('');
    }
    })

    
}
function checkanswer() {
    if(userAnswer ===questions[AnswersEl].correctAnswer){
        numCorrect++;

    }
showQuestions(questions, QuestionContainer);


}
function endquiz() {
    clearInterval (TimerId)

}

startbtn.onclick = StartQuiz
// halo