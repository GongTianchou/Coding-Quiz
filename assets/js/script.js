var question = ["1.what does HTML stands for?",
"2.Which of the following characters indicate closing of a tag?",
"3.How many attributes are there in HTML5?",
"4.Which of the following attributes is used to open an hyperlink in new tab?"]
var answerA =["Hypertext Machine language",".","2","tab"]
var answerB =["Hypertext and links markup language","/","4","href"]
var answerC =["Hypertext Markup Language","//","1","target"]
var answerD =["Hightext machine language","!","5","ref"]
var correctAnswer = ["C","B","A","C"]

var timeEL = document.getElementById('timeleft');
var startEl = document.getElementById('start');
var answerEl = document.getElementsByClassName('answers')
var backEl = document.getElementById('back');
var clearEL = document.getElementById('clear');
var HighscoreEL = document.getElementById('highscore');
var historyEl = document.getElementById("history");
var submitButtonEl = document.getElementById("submit");
var timeLeft;
var quizindex;
var timeInterval;
var timeLeft = 77;
var quizindex = 0;


function initializedQuestion(index){
    if (index >= question.length){
        hideAllPages();
        initializedcompletepage();
    } else {
        var currentquestion = question[index];
        var currentAnswerA = answerA[index];
        var currentAnswerB = answerB[index];
        var currentAnswerC = answerC[index];
        var currentAnswerD = answerD[index];
        document.getElementById("quiz").innerHTML = currentquestion;
        document.getElementById("A").textContent = "A" + currentAnswerA;
        document.getElementById("B").textContent = "B" + currentAnswerB;
        document.getElementById("C").textContent = "C" + currentAnswerC;
        document.getElementById("D").textContent = "D" + currentAnswerD;
    }   
}

startEl.addEventListener("click",function(){
    hideAllPages();
    document.getElementById("question").style.display="block";
    document.getElementById("quizpage").style.display = "block";
    timeInterval= setInterval(function(){
        if(timeLeft >=0){
            timeLeft--;
            timeEL.textContent = 'Time Left:' + timeLeft;
            
        } else {
            hideAllPages();
            initializedcompletepage();
        }
    },
    1000);
    initializedQuestion(quizindex);
})

for(var i = 0; i<answerEl.length; i++) {
    answerEl[i].addEventListener("click",function(event){
        event.preventDefault();
        var selection = event.target.value;
        var result ="";
        if(selection === correctAnswer[quizindex]){
            result ="Correct";
        } else{
            result = "Wrong";
            timeLeft = timeLeft - 7;
        }
        quizindex ++;
        initializedQuestion(quizindex);
        var resultEl;
        if(quizindex<question.length){
            resultEl = document.getElementById("score");

        } else {
            quizindex = 0;
            resultEl = document.getElementById("currentscore");
        }
        resultEl.textContent = result;
        resultEl.style.display = "block";
        setTimeout(()=>{
            resultEl.style.display="none";
        },100)
    });
}

function initializedcompletepage(){
    setTimeout(()=>{
        clearInterval(timeInterval);

    },1000)
    document.getElementById("quizpage").style.display = "none"; 
    document.getElementById("initials").value="";
    document.getElementById("completepage").style.display="block";
    document.getElementById("finalscore").textContent= "Final Score is " + timeLeft;   
}

function hideAllPages(){
    
    // if(clearInterval()){
    // document.getElementById("quizpage").style.display = "none"; 
    // }  else {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("completepage").style.display = "none";
    document.getElementById("highscorepage").style.display = "none";
    // } 
}






submitButtonEl.addEventListener("click",function(){
    var username = document.getElementById("initials").value;
    if (username === ""){
        alert("please enter your initials");
    } else {
        initializedhighscorepage(username);
    }
})
function initializedhighscorepage(username){
    hideAllPages();
    document.getElementById("timeleft").style.display ="none";
    document.getElementById("highscore").style.display = "none";

    if(username){
        var newScore = document.createElement("li");
        newScore.textContent = username + ":" + timeLeft;
        document.getElementById("history").appendChild(newScore);
        document.getElementById("highscorepage").style.display="block";
    }
}

backEl.addEventListener("click",function(){
    hideAllPages();
    document.getElementById("homepage").style.display = "block";
    document.getElementById("timeleft").textContent = "Time Left : 0";
    // document.getElementById("quizpage").style.display = "block"; 
    document.getElementById("timeleft").style.display= "block";
    document.getElementById("highscore").style.display = "block";
});

clearEL.addEventListener("click",function() {
    document.getElementById("history").innerHTML="";
});

historyEl.addEventListener("click",function(){
    initializedhighscorepage();
})