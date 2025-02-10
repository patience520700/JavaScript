// JSON: JavaScript Object Notation
/* 
JSON is used to send and receive data.
JSON is a text format that is completely language independent.
:JSON is used to send and receieve data in many language ...not just in JavaScript.
 */

const myObj = {
    name: "Vero",
    hobbies: ["eat", "sleep", "code"],
    hello: function () {
        console.log("Hello");
    }
};
console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);
console.log(sendJSON.name);

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);
