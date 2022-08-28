const playerChoiceEl = document.getElementById('player-choice')
const rockChoice = document.getElementById('rock')
const computerChoiceEl = document.getElementById('computer-choice')
const winnerEl = document.getElementById('winner')
const choices = document.querySelectorAll('span')
const gamePlay = document.querySelector('.game-play')
const results = document.querySelector('.results')
const playAgainBtn = document.querySelector('.btn')


choices.forEach((choice) => choice.addEventListener("click", () => {

        gamePlay.classList.add("is-hidden")
        results.classList.remove("is-hidden")
        setUserChoice(choice.id)

    }

));

playAgainBtn.addEventListener("click", () => {
    gamePlay.classList.remove("is-hidden")
    results.classList.add("is-hidden")
})

function setUserChoice(playerChoice) {

    // var playerchoice = prompt("Please enter rock, paper or scissors: ")



    let computerChoice = Math.ceil(Math.random() * 3)
    var computer
    if (computerChoice === 1) {
        computer = 'rock'
    } else if (computerChoice === 2) {
        computer = 'paper'
    } else {
        computer = 'scissors'
    }

    playerChoiceEl.innerHTML = `Choice: ${playerChoice.toUpperCase()}`
    computerChoiceEl.innerHTML = `Choice: ${computer.toUpperCase()}`
    var winner = getWinner(playerChoice, computer)

    winnerEl.innerHTML = `Results Out 😍<br><br><br>${winner}`
    console.log(winner);




}


function getWinner(player, computer) {

    if (player === computer) {
        return "Tie Game"
    } else if (player === 'rock' && computer === 'paper') {
        return `Computer wins`
    } else if (player === 'paper' && computer === 'scissors') {
        return `Computer wins`
    } else if (player === 'scissors' && computer === 'rock') {
        return `Computer wins`
    } else {
        return `You win`

    }
}