// Functions

// Function Declaration Syntax:

function sum(num1, num2) {
    if (num2 === undefined) {
        return num1 + num1;
    }
    return num1 + num2;
}

console.log(sum(5, 10));
