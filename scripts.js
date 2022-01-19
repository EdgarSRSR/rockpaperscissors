function computerPlay(){
    // The computer randomly chooses between rock, paper, scissors
    randomDecision = Math.floor(Math.random() * 3);
     if(randomDecision == 0){
         return "rock";
     } else if (randomDecision == 1){
         return "paper";
     } else if (randomDecision == 2){
         return "scissors";
     }

}

function playRound(playerSelection, computerSelection){
    
    playerSelection = playerSelection.toLowerCase().trim();
    
    console.log("The player chose: " + playerSelection + " the computer chose: " + computerSelection);
    if(playerSelection == "rock"){
        if(computerSelection == "rock"){
            return "It's a draw mate!";
        } else if (computerSelection == "paper"){
            return "The computer won, paper beats rock";
        } else if (computerSelection == "scissors"){
            return "Congrats champ! rock beats scissors";
        } else {
            return "Some funky business is going on, try again";
        }   
    } else if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            return "Victory! paper beats rock";
        } else if (computerSelection == "paper"){
            return "It's a draw mate!";
        } else if (computerSelection == "scissors"){
            return "You lost ;( your paper got destroyed by the scissors";
        } else {
            return "Some funky business is going on, try again";
        } 
    } else if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            return "The rock crushed your scissors, its a shame";
        } else if (computerSelection == "paper"){
            return "You are on fire!!! scissors beat paper!!!";
        } else if (computerSelection == "scissors"){
            return "Seems like a draw. Play with scissors and you will get cut";
        } else {
            return "Some funky business is going on, try again";
        } 
    } else {
        return "Sorry, did not understand! choose between 'rock', 'paper' or 'scissors' ";
    }
}

const playerSelection = "paper ";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

