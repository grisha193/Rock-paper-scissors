const choices = ['камень', 'ножницы', 'бумага'];
const resultDisplay = document.getElementById('result');

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    let result;

    if (playerChoice === computerChoice) {
        result = `Ничья! Вы оба выбрали ${playerChoice}.`;
    } else if (
        (playerChoice === 'камень' && computerChoice === 'ножницы') ||
        (playerChoice === 'ножницы' && computerChoice === 'бумага') ||
        (playerChoice === 'бумага' && computerChoice === 'камень')
    ) {
        result = `Вы выиграли! ${playerChoice} побеждает ${computerChoice}.`;
    } else {
        result = `Вы проиграли! ${computerChoice} побеждает ${playerChoice}.`;
    }

    resultDisplay.textContent = result;
}

document.getElementById('rock').addEventListener('click', () => playGame('камень'));
document.getElementById('scissors').addEventListener('click', () => playGame('ножницы'));
document.getElementById('paper').addEventListener('click', () => playGame('бумага'));


const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'В этой игре есть три элемента: камень, ножницы, бумага. Камень бьёт Ножницы; Ножницы бьёт Бумага; Бумага бьёт Камень.'


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