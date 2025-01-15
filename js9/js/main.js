// Conditionals: Ternary Operator

//syntax
//condition ? ifTrue : ifFalse;

let testScore = 99;
let myGrade =
   testScore > 89
      ? "A"
      : testScore > 79
      ? "B"
      : testScore > 69
      ? "C"
      : testScore > 59
      ? "D"
      : "F";
console.log(`My test grade is a ${myGrade}.`);
