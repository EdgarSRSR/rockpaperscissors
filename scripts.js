
const buttons = document.querySelectorAll('button');
const resultMessage = document.querySelector('.resultMessage');
const scorePlayer = document.querySelector('.scorePlayer');
const scoreComputer = document.querySelector('.scoreComputer');
const scoreTies = document.querySelector('.ties');
const divPlayerSelection = document.querySelector('#playerSelection');
const divComputerSelection = document.querySelector('#computerSelection');

let computerScore = 0;
let playerScore = 0;
let ties = 0;

// start game when user clicks button
buttons.forEach((button)=>
    button.addEventListener('click', ()=>{
        if(playerScore >= 5 || computerScore >= 5 || ties >= 5){
            return;
        }
        game(button.value);
    })
);


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
    let log = ''
    if(playerSelection == "rock"){
        if(computerSelection == "rock"){
            log = "It's a draw mate!";
        } else if (computerSelection == "paper"){
            log =  "The computer won, paper beats rock";
        } else if (computerSelection == "scissors"){
            log =  "Congrats champ! rock beats scissors";
        } 
        } else if(playerSelection == "paper"){
            if(computerSelection == "rock"){
                log =  "Victory! paper beats rock";
            } else if (computerSelection == "paper"){
                log =  "It's a draw mate!";
            } else if (computerSelection == "scissors"){
                log =  "You lost :( your paper got destroyed by the scissors";
            }
        } else if(playerSelection == "scissors"){
            if(computerSelection == "rock"){
                log =  "The rock crushed your scissors, its a shame";
            } else if (computerSelection == "paper"){
                log =  "You are on fire!!! scissors beat paper!!!";
            } else if (computerSelection == "scissors"){
                log =  "Seems like a draw. Play with scissors and you will get cut";
            }
        }
        return log;

}

function createText(text){
    // Create the text for the messages in the DOM
    const p = document.createElement('p');
    p.classList.add('p');
    p.textContent = text;
    return p;
}

function game(selection){
     // this function plays five rounds of rock, paper, scissors and anounces a winner

    let computerSelection = computerPlay();
    let playerSelection = selection;
    
    let round = playRound(playerSelection, computerSelection);
        
    if(round == "Congrats champ! rock beats scissors" || round == "Victory! paper beats rock" || round == "You are on fire!!! scissors beat paper!!!"){
        playerScore++;
    } else if( round == "The computer won, paper beats rock" || round == "You lost :( your paper got destroyed by the scissors" || round == "The rock crushed your scissors, its a shame" ){
        computerScore++;
    } else if(round == "It's a draw mate!" || round == "Seems like a draw. Play with scissors and you will get cut" ){
        ties++;
    } 
    
    scorePlayer.textContent = playerScore;
    scoreComputer.textContent = computerScore;
    scoreTies.textContent = ties;
    resultMessage.textContent = round;
    divPlayerSelection.appendChild(createText(playerSelection));
    divComputerSelection.appendChild(createText(computerSelection));

    if(playerScore == 5){
        resultMessage.textContent = "You are a hero and a real human being! You win champ";
    } else if(computerScore == 5) {
        resultMessage.textContent ="The machines win dude, prepared to get plugged into the Matrix";
    } else if(ties == 5){
        resultMessage.textContent = "Its a tie!! Everyone gets a participation trophy!!!";
    } 
}