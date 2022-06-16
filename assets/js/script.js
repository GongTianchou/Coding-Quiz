var question = ["1.what does HTML stands for?",
"2.Which of the following characters indicate closing of a tag?",
"3.How many attributes are there in HTML5?",
"4.Which of the following attributes is used to open an hyperlink in new tab?"]
var answerA =["Hypertext Machine language",".","2","tab"]
var answerB =["Hypertext and links markup language","/","4","href"]
var answerC =["Hypertext Markup Language","//","1","target"]
var answerD =["Hightext machine language","!","5","ref"]
var correctAnswer = ["C","B","A","C"]

var timeEL = document.getElementById('Timeleft');
var startEl = document.getElementById('start');
var answerEl = document.getElementsByClassName('answers')
var backEl = document.getElementById('back');
var clearEL = document.getElementById('clear');
var HighscoreEL = document.getElementById('Highscore');


startEl.addEventListener("click",function(){
    var timeLeft = 77;
    var quizScore = 0;
    var timeInterval;
    hideAllPages();
    document.getElementById("question").style.display="block";
    timeInterval= setInterval(function(){
        if(timeLeft >1){
            timeEL.textContent = "Time Left" + timeLeft;
            timeLeft --;
        } else {
            hideAllPages();
            initializedcompletepage();
        }
    },
    1000);
    initializedQuestion(quizScore);
})

for(var i = 0; i<answerEl.length; i++) {
    answerEl[i].addEventListener("click",function(){
        var selection = target.value;
        var result ="";
        if(selection === correctAnswer[quizScore]){
            result ="Correct";
        } else{
            result = "Wrong";
            timeLeft = timeLeft - 7;
        }
        quizScore ++;
        initializedQuestion(quizScore);
        var resultEl;
        if(quizScore<questions.length){
            resultEl = document.getElementById("score");

        } else {
            quizScore = 0;
            resultEl = document.getElementById("currentscore");
        }
        resultEl.textContent = result;
        resultEl.style.display = "block";
        setTimeout(()=>{
            resultEl.style.display="none";
        },1000)
    });
}

function hideAllPages(){
    document.getElementById("homepage").style.display = "none";
    document.getElementById("quizpage").style.display = "none";
    document.getElementById("completepage").style.display = "none";
    document.getElementById("highscorepage").style.display = "none";
}


function initializedQuestion(index){
    if (index >= questions.length){
        hideAllPages();
        initializedcompletepage();
    } else {
        var currentquestion = question[index];
        var currentAnswerA = answerA[index];
        var currentAnswerB = answerB[index];
        var currentAnswerC = answerC[index];
        var currentAnswerD = answerD[index];
        document.getElementById("quiz").textContent = currentquestion;
        document.getElementById("A").textContent = "A" + currentAnswerA;
        document.getElementById("B").textContent = "B" + currentAnswerB;
        document.getElementById("C").textContent = "C" + currentAnswerC;
        document.getElementById("D").textContent = "D" + currentAnswerD;
    }   
}

function initializedcompletepage(){
    setTimeout(()=>{
        clearInterval(timeInterval);

    },1000)
    document.getElementById("initials").value="";
    document.getElementById("completepage").style.display="block";
    document.getElementById("finalscore").textContent= "Final Score is" + timeLeft;   
}

submitButton.addEventListener("click",function(){
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
    document.getElementById("timeleft").style.display= "block";
    document.getElementById("highscore").style.display = "block";
});

clearEL.addEventListener("click",funtion(){
    document.getElementById("history").innerHTML="";

});

historyEl.addEventListener("click",function(){
    initializedhighscorepage();
})