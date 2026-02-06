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
        if (getHumanChoice == "scissor") {
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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundCount = 0;
    while (roundCount < 5) {
        x = playRound(getComputerChoice(), getHumanChoice())
        if (x == "you win!!"){
            humanScore += 1
        }
        if (x == "you lose!!"){
            computerScore += 1
        }
        roundCount += 1
        console.log(x)
        console.log(roundCount)
        console.log(humanScore, computerScore)
    }
    if (humanScore > computerScore) {
        return humanScore
    }
    else {
        return computerScore
    }
}
playGame();