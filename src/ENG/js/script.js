const choices = ['rock', 'scissors', 'paper'];
const resultDisplay = document.getElementById('result');

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    let result;

    if (playerChoice === computerChoice) 

    {
        result = `It's a draw! You both chose ${playerChoice}.`;
    } 

    else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) 
    {
        result =`You've won! ${playerChoice} wins ${computerChoice}.`;
    } 
    else {
        result = `You've lost! ${computerChoice} wins ${playerChoice}.`;
    }

    resultDisplay.textContent = result;
}

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));





const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'There are three elements in this game: rock, scissors, paper. Stone beats Scissors; Scissors beats Paper; Paper beats Stone.'


let idx = 1
let speed = 300/ speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
        
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)