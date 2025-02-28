// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables, Async/Await

//Promises

// 3 steps: Pending, Fulfilled, Rejected

const users = fetch("https://jsonplaceholder.typicode.com/users");

// pending
console.log(users);

fetch("https://jsonplaceholder.typicode.com/users")
   .then(response => {
    return response.json();
   })
   .then(data => {
    data.forEach(user => {
        console.log(user);
    })
   });


/* const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
        resolve("Yes! resolved the promise!");
    } else {
        reject("No! rejected the promise!");
    }
});
 */
/* console.log(myPromise);

myPromise
.then(value => {
    return value + 1;
})
.then(newValue => {
    console.log(newValue);
})
.catch(err => {
    console.error(err);
})
 */

/* const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("myNewPromise resolved!");
    }, 3000);
});

myNextPromise.then(value => {
    console.log(value);
});

myPromise.then(value => {
    console.log(value);
});
 */