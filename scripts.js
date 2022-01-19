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
    // this function plays a rounf of rock , paper, scissors
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

function game(){
    // this function plays five rounds of rock, paper, scissors and anounces a winner
    let computerScore = 0;
    let playerScore = 0;
    let ties = 0;
    let promptErrors = 0;

    for(let i = 0; i < 5; i++){
        let playerSelection = window.prompt("Pick your choice ");
        let computerSelection = computerPlay();
        let game = playRound(playerSelection, computerSelection);
        console.log(game);
        if(game == "You are on fire!!! scissors beat paper!!!" || game == "Victory! paper beats rock" 
            || game == "Congrats champ! rock beats scissors" ){
                playerScore++;
        } else if( game == "The computer won, paper beats rock" || game == "The rock crushed your scissors, its a shame" 
            || game == "You lost ;( your paper got destroyed by the scissors"){
                computerScore++;
        } else if(game == "It's a draw mate!" || game == "Seems like a draw. Play with scissors and you will get cut"){
                ties++;
        } else {
                promptErrors++;
        }
    }

    console.log("Your score: " + playerScore +" The computer's score: " + computerScore + " number of ties: " + ties);

    if(playerScore > computerScore){
        console.log("You are a hero and a real human being! You win champ");
    } else if(computerScore > playerScore) {
        console.log("The machines win dude, prepared to get plugged into the Matrix");
    } else if(ties == 5){
        console.log("Whooah! All rounds resulted in a tie, that is some weird luck");
    } else if(promptErrors == 5){
        console.log("You got to pay more attention on what you type. Focus bro!");
    }

}

//const playerSelection = "paper ";
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

game();


