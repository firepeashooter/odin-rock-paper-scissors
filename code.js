

function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

function getComputerChoice(){

    randomValue = getRandomInt(3)

    if (randomValue == 0){
        return "rock"
    } else if (randomValue == 1){
        return "paper"
    }else {
        return "scissors"
    }
}


function getHumanChoice(){
    return prompt('Rock, Paper, or Scissors?: ')
}




    
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


    

console.log("This is your final score!: " + humanScore)
console.log("This was the computers final score!: " + computerScore)




