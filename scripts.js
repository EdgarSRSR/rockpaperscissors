
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
            content.textContent = "It's a draw mate!";
            log = "draw";
        } else if (computerSelection == "paper"){
            content.textContent =  "The computer won, paper beats rock";
            log =  "loose";
        } else if (computerSelection == "scissors"){
            content.textContent =  "Congrats champ! rock beats scissors";
            log =  "win";
        } 
        } else if(playerSelection == "paper"){
            if(computerSelection == "rock"){
                content.textContent =  "Victory! paper beats rock";
                log =  "win";
            } else if (computerSelection == "paper"){
                content.textContent =  "It's a draw mate!";
                log =  "draw"
            } else if (computerSelection == "scissors"){
                content.textContent =  "You lost :( your paper got destroyed by the scissors";
                log =  "loose";
            }
        } else if(playerSelection == "scissors"){
            if(computerSelection == "rock"){
                content.textContent =  "The rock crushed your scissors, its a shame";
                log =  "loose";
            } else if (computerSelection == "paper"){
                content.textContent =  "You are on fire!!! scissors beat paper!!!";
                log =  "win";
            } else if (computerSelection == "scissors"){
                content.textContent =  "Seems like a draw. Play with scissors and you will get cut";
                log =  "draw";
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
        
    if(round == "win" || round == "win" || round == "win"){
        playerScore++;
    } else if( round == "loose" ){
        computerScore++;
    } else if(round == "draw"){
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





//const playerSelection = "paper ";
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

//game();


