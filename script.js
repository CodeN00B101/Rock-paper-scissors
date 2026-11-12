function getComputerChoice(){
    const computerChoice = Math.floor(Math.random()*3);
    if (computerChoice === 0){
        return "rock";
    }else if (computerChoice === 1){
        return "paper";
    }else{
        return 'scissors';
    }
}

function getHumanChoice(){
    const humanChoice = prompt("Eneter your choice");
    return humanChoice.toLowerCase();
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let gameOver = false;
    const choice = document.querySelector(".choices");
    const results = document.createElement("div");
    const roundResult = document.createElement("p");
    const score = document.createElement("p");
    const winner = document.createElement("P")
    results.appendChild(roundResult);
    results.appendChild(score);
    results.appendChild(winner);
    choice.after(results);
    function playRound(humanChoice, computerChoice){
        if (humanChoice === computerChoice){
            roundResult.textContent = "Draw";
        }else if((humanChoice === "rock" && computerChoice === "scissors")
            ||(humanChoice === "paper" && computerChoice === "rock")
            ||(humanChoice === "scissors" && computerChoice === "paper")){
                humanScore++;
                roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
                
        }else{
            computerScore++;
            roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        }
        score.textContent = `Your score ${humanScore} | Computer score: ${computerScore}`
    }
    choice.addEventListener("click", (event)=>{
        if (gameOver){
            return;
        }
        const humanChoice = event.target.id;
        if (["rock","paper","scissors"].includes(humanChoice)){
            playRound(humanChoice, getComputerChoice());
        if (humanScore === 5) {
            winner.textContent = "You won the game!";
            gameOver = true;
        } else if (computerScore === 5) {
            winner.textContent = "Computer won the game!";
            gameOver = true;
        }
        } 
    })
}

playGame();