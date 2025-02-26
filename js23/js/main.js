// Web Storage API

//Not part of the DOM - refers to the window API
// Available to JS via the global variable : Window

//we do not have to type window. It is implied:

const myArray = ["eat", "sleep", "code"];
const myObject = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    logName: function() {
        console.log(this.name);
    }
};

localStorage.setItem("myLocalStore", JSON.stringify(myArray));
const storeLength = localStorage.length;
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(storeLength);