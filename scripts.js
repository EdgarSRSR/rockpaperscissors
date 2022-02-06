// show the results of the game 
const container = document.querySelector('#container');
const content = document.createElement('h1');
content.classList.add('content');


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
    // this function plays a round of rock , paper, scissors


    playerSelection = playerSelection.toLowerCase().trim();

    const selection = document.createElement('h3');
    selection.classList.add('selection');
    selection.textContent = "The player chose: " + playerSelection + ", the computer chose: " + computerSelection;
    container.appendChild(selection);
    
    if(playerSelection == "rock"){
        if(computerSelection == "rock"){
            content.textContent = "It's a draw mate!";
            return "draw";
        } else if (computerSelection == "paper"){
            content.textContent =  "The computer won, paper beats rock";
            return "win";
        } else if (computerSelection == "scissors"){
            content.textContent =  "Congrats champ! rock beats scissors";
            return "loose";
        } else {
            content.textContent =  "Some funky business is going on, try again";
            return "error";
        }   
    } else if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            content.textContent =  "Victory! paper beats rock";
            return "win";
        } else if (computerSelection == "paper"){
            content.textContent =  "It's a draw mate!";
            return "draw"
        } else if (computerSelection == "scissors"){
            content.textContent =  "You lost :( your paper got destroyed by the scissors";
            return "loose";
        } else {
            content.textContent =  "Some funky business is going on, try again";
            return "error";
        } 
    } else if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            content.textContent =  "The rock crushed your scissors, its a shame";
            return "loose";
        } else if (computerSelection == "paper"){
            content.textContent =  "You are on fire!!! scissors beat paper!!!";
            return "win";
        } else if (computerSelection == "scissors"){
            content.textContent =  "Seems like a draw. Play with scissors and you will get cut";
            return "draw";
        } else {
            content.textContent =  "Some funky business is going on, try again";
            return "error";
        } 
    } else {
        content.textContent =  "Sorry, did not understand! choose between 'rock', 'paper' or 'scissors' ";
        return "error";
    }
    container.appendChild(content);
}

function game(){
     // this function plays five rounds of rock, paper, scissors and anounces a winner
     let computerScore = 0;
     let playerScore = 0;
     let ties = 0;
     let promptErrors = 0;

    
     const btnRock = document.querySelector('#btn-rock');
     const btnPaper = document.querySelector('#btn-paper');
     const btnScissors = document.querySelector('#btn-scissors');
    for(let i = 0; i < 5; i++){


        
        let computerSelection = computerPlay();
        

        // Select a button and play
        btnRock.addEventListener('click', function(){
            let playerSelection = "rock";
            let game = playRound(playerSelection, computerSelection);
            
        });

        
        btnPaper.addEventListener('click', function(){

            let playerSelection = "paper";
            let game = playRound(playerSelection, computerSelection);
        });

        
        btnScissors.addEventListener('click', function(){
            let playerSelection ="scissors"
            let game = playRound(playerSelection, computerSelection);
        });
        
        console.log(game);
        if(game == "win"){
                playerScore++;
        } else if( game == "loose" ){
                computerScore++;
        } else if(game == "draw"){
                ties++;
        } else {
                promptErrors++;
        }
    }

    const finalScore = document.createElement('h2');
    finalScore.classList.add('finalScore');
    finalScore.textContent = "Your score: " + playerScore +" The computer's score: " + computerScore + " number of ties: " + ties
    container.appendChild(finalScore);

    const result = document.createElement('h1');
    result.classList.add('result');
    container.appendChild(result);

    if(playerScore > computerScore){
        finalScore = "You are a hero and a real human being! You win champ";
    } else if(computerScore > playerScore) {
        finalScore = "The machines win dude, prepared to get plugged into the Matrix";
    } else if(ties == 5){
        finalScore = "Whooah! All rounds resulted in a tie, that is some weird luck";
    } else if(promptErrors == 5){
        finalScore = "You got to pay more attention on what you type. Focus bro!";
    } else if( computerScore == playerScore){
        finalScore = "Its a tie!! Everyone gets a participation trophy!!!";
    }

}





//const playerSelection = "paper ";
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

game();


