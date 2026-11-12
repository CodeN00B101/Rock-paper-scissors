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
    let rounds = 0;
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice){
        if (humanChoice === computerChoice){
            console.log("Draw!");
        }else if((humanChoice === "rock" && computerChoice === "scissors")
            ||(humanChoice === "paper" && computerChoice === "rock")
            ||(humanChoice === "scissors" && computerChoice === "paper")){
                humanScore++;
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        }else{
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        }
    }

    do{
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice); 
        rounds++;
    }while(rounds < 5);
    
    if (humanScore > computerScore) {
        console.log("You won the game!");
    }else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    }else {
        console.log("The game ended in a tie!");
    }
}

playGame();