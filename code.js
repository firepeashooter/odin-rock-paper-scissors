

function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

function getComputerChoice(){
    let choice = ""

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


console.log(getHumanChoice())

