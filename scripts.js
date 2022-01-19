function computerPlay(){

    randomDecision = Math.floor(Math.random() * 3);
     if(randomDecision == 0){
         return "Rock";
     } else if (randomDecision == 1){
         return "Paper";
     } else if (randomDecision == 2){
         return "Scissors";
     }

}

function playRound(playerSelection, computerSelection){

}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

