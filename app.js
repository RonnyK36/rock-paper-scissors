let playGame = confirm("Shall we play Rock, Paper, Scissors")

if (playGame) {
    let playerchoice = prompt("Please enter rock, paper or scissors: ")
    if (playerchoice) {
        var playerOne = playerchoice.trim().toLowerCase()
        if (playerOne === 'rock' || playerOne === 'paper' || playerOne === 'scissors') {
            let computerChoice = Math.ceil(Math.random() * 3)
            let computer = computerChoice === 1 ? 'rock' :
                computerChoice === 2 ? 'paper' :
                'scissors'
            let winner = getWinner(playerOne, computer)
            console.log(winner);


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
        return `You: ${playerOne}\nComputer: ${computer}\nComputer wins`
    } else if (player === 'paper' && computer === 'scissors') {
        return `You: ${playerOne}\nComputer: ${computer}\nComputer wins`
    } else if (player === 'scissors' && computer === 'rock') {
        return `You: ${playerOne}\nComputer: ${computer}\nComputer wins`
    } else {
        return `You: ${playerOne}\nComputer: ${computer}\nYou win`

    }
}