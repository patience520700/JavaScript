// Conditionals: Ternary Operator

//syntax
//condition ? ifTrue : ifFalse;

let playerOne = "rock";
let computer = "scissors";
let result = 
    playerOne === computer
        ? "Tie game!"
        : playerOne === "rock" && computer === 'paper'
        ? "computer wins!"
        : playerOne === "paper" && computer === "scissors"
        ? "computer wins!"
        : playerOne === "scissors" && computer === "rock"
        ? "computer wins!"
        : "playerOne wins!";
console.log(result);
