function getComputerChoice() {
    value = Math.floor(Math.random() * 3);
    if (value == 0) {
        return "rock"
    } if (value == 1) {
        return "paper"
    } if (value == 2) {
        return "scissors"
    }
}

function getHumanChoice() {
    let prompt_choice = prompt("rock, paper, or scissors?");
    let choice = prompt_choice.toLowerCase();
    return choice;
}


function playRound(getComputerChoice,getHumanChoice) {
    if (getComputerChoice == "rock") {
        if (getHumanChoice == "rock") {
            return "tie"
        }
        if (getHumanChoice == "paper") {
            return "you win!!"
        }
        if (getHumanChoice == "scissors") {
            return "you lose!!"
        }
    }
    if (getComputerChoice == "paper") {
        if (getHumanChoice == "paper") {
            return "tie"
        }
        if (getHumanChoice == "scissors") {
            return "you win!!"
        }
        if (getHumanChoice == "rock") {
            return "you lose!!"
        }
    }
    if (getComputerChoice == "scissors") {
        if (getHumanChoice == "scissors") {
            return "tie"
        }
        if (getHumanChoice == "rock") {
            return "you win!!"
        }
        if (getHumanChoice == "paper") {
            return "you lose!!"
        }
    }
}

const btn_rock = document.querySelector('#rock');
const btn_paper = document.querySelector('#paper');
const btn_scissors = document.querySelector('#scissors');


btn_rock.addEventListener('click', () => {
    const comp_choice = getComputerChoice();
    const result = (playRound(comp_choice,'rock'));
    console.log(humanScore, computerScore, result, comp_choice)
    if (result == "you win!!") humanScore ++
    if (result == "you lose!!") computerScore ++
    score_board.textContent = result + ' The score is: Human = ' + humanScore +' and Computer = '+ computerScore;

})

btn_paper.addEventListener('click', () => {
    const comp_choice = getComputerChoice();
    const result = (playRound(comp_choice,'paper'));

    if (result == "you win!!") humanScore ++
    if (result == "you lose!!") computerScore ++
    score_board.textContent = result + ' The score is: Human = ' + humanScore +' and Computer = '+ computerScore;

})

btn_scissors.addEventListener('click', () => {
    const comp_choice = getComputerChoice();
    const result = (playRound(comp_choice,'scissors'));

    if (result == "you win!!") humanScore ++
    if (result == "you lose!!") computerScore ++
    score_board.textContent = result + ' The score is: Human = ' + humanScore +' and Computer = '+ computerScore;

})
let humanScore = 0;
let computerScore = 0;

const score_display = document.querySelector("#score_display");
const score_board = document.createElement("p");
score_board.classList.add("score_board");
score_display.appendChild(score_board);
score_board.style.fontSize = 'x-large';
score_board.textContent = "Click a choice to play!"