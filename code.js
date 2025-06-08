
/* 

Function that generates the computer choice for rock paper scissors

*/
function getComputerChoice(){

    function getRandomInt(max){
        return Math.floor(Math.random() * max)
    }

    randomValue = getRandomInt(3)

    if (randomValue == 0){
        return "rock"
    } else if (randomValue == 1){
        return "paper"
    }else {
        return "scissors"
    }
}


/*

Function to play one round of rock paper scissors given the human choice and the computer choice

*/

function playRound(humanChoice, computerChoice){

    humanChoice = humanChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()

    console.log(humanChoice)
    console.log(computerChoice)

    if (humanChoice == computerChoice){
        console.log("Draw! You both picked" + humanChoice)
    }else if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats Scissors")
        humanScore += 1        
    }else if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats Rock!")
        computerScore += 1
    }else if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win! Paper beats Rock!")
        humanScore += 1
    }else if (humanChoice == "paper" && computerChoice == 'scissors'){
        console.log("You lose! Scissors beats Paper!")
        computerScore += 1
    }else if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! Rock beats Scissors!")
        computerScore += 1
    }else if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You won! Scissors beats Paper!")
        humanScore += 1
    }
}



//Code that returns the value of any button pressed by the human using Event Delegation!


let buttons = document.querySelector(".button--container");


buttons.addEventListener("click", (e) => {
    let target = e.target;

    switch(target.id){

        case 'rock': 
            console.log("Human Selected Rock");
            document.getElementById('human').textContent = 'Rock';
            break;
        case 'paper':
            console.log("Human Selected Paper");
            document.getElementById('human').textContent = 'Paper';
            break;
        case 'scissors':
            console.log("Human Selected Scissors");
            document.getElementById('human').textContent = 'Scissors';

        
    }





})




