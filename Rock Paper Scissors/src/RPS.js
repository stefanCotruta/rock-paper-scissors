let userSelection = ""
let computerSelection = ""

let options = ["Rock", "Paper", "Scissors"]

let result = "";

let playerCounter = 0;
let computerCounter = 0;
let gamesPlayed = 0;

function countGames(){
    gamesPlayed++;
    document.getElementById("games-counter").innerHTML = gamesPlayed;
}
function changeComputerSelection(){
    const rndInt = Math.floor(Math.random() * 3) + 0
     computerSelection = options[rndInt];
    let image = document.getElementById("image-box").src=`../Icons/${computerSelection}.png`;
}

function rockSelection(){
    document.getElementById("start-message").innerHTML = ""
    userSelection = "Rock";
    changeComputerSelection();
    checkResult();
}

function paperSelection(){
    document.getElementById("start-message").innerHTML = ""
    userSelection = "Paper";
    changeComputerSelection();
    checkResult();
}

function scissorsSelection(){
    document.getElementById("start-message").innerHTML = ""
    userSelection = "Scissors";
    changeComputerSelection();
    checkResult();
}

function checkResult(){
    countGames()
   switch(true){
    case (userSelection === computerSelection) :
        result = "DRAW";
        document.getElementById("result-box").style.color="black";
        document.getElementById('result-box').innerHTML = result;
        break;

    case(userSelection === "Rock" && computerSelection === "Paper"):
        result = "YOU LOSE!!!"
        computerCounter++;
        document.getElementById("result-box").style.color="red";
        document.getElementById('result-box').innerHTML = result;
        document.getElementById("computer-counter").innerHTML = computerCounter;
        break;
    case(userSelection === "Rock" && computerSelection === "Scissors"):
        result = "YOU WIN!!!"
        playerCounter++;
        document.getElementById("result-box").style.color="rgb(10, 216, 10)";
        document.getElementById('result-box').innerHTML = result;
        document.getElementById("player-counter").innerHTML = playerCounter;
        break;
         
    case(userSelection === "Paper" && computerSelection === "Rock"):
        result = "YOU WIN!!!"
        playerCounter++;
        document.getElementById("result-box").style.color="rgb(10, 216, 10)";
        document.getElementById('result-box').innerHTML = result;
        document.getElementById("player-counter").innerHTML = playerCounter;
        break;
    case(userSelection === "Paper" && computerSelection === "Scissors"):
        result = "YOU LOSE!!!"
        computerCounter++;
        document.getElementById("result-box").style.color="red";
        document.getElementById('result-box').innerHTML = result;
        document.getElementById("computer-counter").innerHTML = computerCounter;
        break;

    case(userSelection === "Scissors" && computerSelection === "Rock"):
        result = "YOU LOSE!!!"
        computerCounter++;
        document.getElementById("result-box").style.color="red";
        document.getElementById('result-box').innerHTML = result;
        document.getElementById("computer-counter").innerHTML = computerCounter;
        break;
    case(userSelection === "Scissors" && computerSelection === "Paper"):
        result = "YOU WIN!!!"
        playerCounter++;
        document.getElementById("result-box").style.color="rgb(10, 216, 10)";
        document.getElementById('result-box').innerHTML = result;
        document.getElementById("player-counter").innerHTML = playerCounter;
        break;
   }    
}


