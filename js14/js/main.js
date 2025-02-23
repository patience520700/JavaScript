// var, let, and const

// global scope (is a variable to all)
var x = 1; // function scoped
let y = 2; // block scoped
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc() {
    var x = 10;
    const z = 5;
    // console.log(`function: ${x}`);
    // console.log(`function: ${y}`);
    // console.log(`function: ${z}`);
    {
        var x = 11; // function scoped
        const z = 6; // block scoped
       console.log(`block: ${x}`);
       console.log(`block: ${y}`);
       console.log(`block: ${z}`);
    }
    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);
}

myFunc();

// Global = Not in a function or block.Not desirable.
// Local = In a function or block.Not global.
// Var = insantiates function() scoped variables.
// let and const instantiate {block} scoped variables.z