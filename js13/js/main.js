// Functions

// Functions provide reusable code

// Function Declaration Syntax:

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("september"));