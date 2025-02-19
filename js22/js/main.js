// JavaScript Event Listeners//
 
const view= document.querySelector("#view2");
const div = document.querySelector("div");
const h2= document.querySelector("h2");

// syntax: addEveventListener(event, function, useCapture)

const doSomething = () => {
    alert("doing Something");
}

h2.addEventListener("click", doSomething, false);
h2.removeEventListener("click", doSomething, false);

