let playGame = confirm("Shall we play Rock, Paper, Scissors")
const playerChoice = document.getElementById('player-choice')
const computerChoiceEl = document.getElementById('computer-choice')
const winnerEl = document.getElementById('winner')

if (playGame) {
    let playerchoice = prompt("Please enter rock, paper or scissors: ")
    if (playerchoice) {
        var playerOne = playerchoice.trim().toLowerCase()
        if (playerOne === 'rock' || playerOne === 'paper' || playerOne === 'scissors') {
            let computerChoice = Math.ceil(Math.random() * 3)
            var computer
            if (computerChoice === 1) {
                computer = 'rock'
            } else if (computerChoice === 2) {
                computer = 'paper'
            } else {
                computer = 'scissors'
            }

            playerChoice.innerHTML = `Choice: ${playerOne.toUpperCase()}`
            computerChoiceEl.innerHTML = `Choice: ${computer.toUpperCase()}`
            var winner = getWinner(playerOne, computer)

            winnerEl.innerHTML = `Results Out 😍<br>${winner}`


        } else {
            alert("You need to pick either rock, paper or scissors")
        }
    } else {
        alert("Oops, play again next time then")
    }
} else {
    alert("Okay, see you")
}

function getWinner(player, computer) {

    if (player === computer) {
        return "Tie Game"
    } else if (player === 'rock' && computer === 'paper') {
        return `You: ${playerOne}<br>Computer: ${computer}<br>Computer wins`
    } else if (player === 'paper' && computer === 'scissors') {
        return `You: ${playerOne}<br>Computer: ${computer}\nComputer wins`
    } else if (player === 'scissors' && computer === 'rock') {
        return `You: ${playerOne}<br>Computer: ${computer}<br>Computer wins`
    } else {
        return `You: ${playerOne}<br>Computer: ${computer}<br>You win`

    }
}