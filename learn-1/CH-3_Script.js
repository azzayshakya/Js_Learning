console.log(" Start the CH-3_Script : 'Asynchronous Programming' ");

// 1. synchronous programming

// console.log("start");

// function add(a, b) {
//   return a + b;
// }
// console.log(add(4, 5));

// console.log("end");

// 2. asynchronous programming

// console.log("start");

// setTimeout(() => {
//   console.log("hyy bboii");
// }, 5000);

// console.log("end");

// 3. callback

// function sub(a, b) {
//   return a - b;
// }

// function calc(a, b, func) {
//   return func(a, b);
// }
// console.log(calc(5, 2, sub));

//  4. callback hell

// Step functions that simulate async work
// function step1(callback) {
//   setTimeout(() => {
//     callback();
//   }, 1000);
// }

// function step2(callback) {
//   setTimeout(() => {
//     callback();
//   }, 1000);
// }

// function step3(callback) {
//   setTimeout(() => {
//     callback();
//   }, 1000);
// }

// function step4(callback) {
//   setTimeout(() => {
//     console.log("step 4");
//     callback && callback();
//   }, 1000);
// }

// // Callback hell structure
// step1(() => {
//   console.log("step 1");
//   step2(() => {
//     console.log("step 2");
//     step3(() => {
//       console.log("step 3");
//       step4(() => {
//         console.log("All steps done!");
//       });
//     });
//   });
// });

// 5. Promises

// function newProm(){
//     return new Promise((resolve,reject)=>{
//         resolve("resolved")
//     })
// }
// newProm().then((data)=>{console.log(data)}).catch((error)=>{console.log(error)})

// 6. async / await

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("User data"), 1000);
  });
}

async function displayUser() {
  try {
    console.log("Fetching...");
    const data = fetchUser();
    console.log(data);
  } catch (err) {
    console.log("Error:", err);
  } finally {
    console.log("Finished");
  }
}

displayUser();

/*
I want to gain a deep and practical understanding of asynchronous programming in JavaScript. Please explain this topic to me in a step-by-step manner, covering the evolution of handling asynchronous operations in JavaScript from the beginning. Here's what I need:

Start by explaining the difference between synchronous and asynchronous programming, with simple examples. Also explain the limitations of synchronous code in real-world apps (like blocking UI).

Introduce callbacks — what they are, how they solve the problem of async execution, and what issues they introduce (like callback hell).

Explain callback hell — what it is, how it affects code readability and maintainability. Give an example of deeply nested callbacks.

Show how Promises solve the callback hell problem. Explain how Promises work, with .then(), .catch(), and .finally(). Use real examples (like fetching user data).

Cover Promise chaining — how we can handle multiple async steps in sequence.

Then, explain the relation between all of these:

Synchronous code

Callbacks

Callback hell

Promises

Promise chaining

How each one solves the shortcomings of the previous one

Briefly introduce async/await as a cleaner way to write promise-based code, showing how it's just syntactic sugar over Promises.

At every step, include small JavaScript code examples to help me understand clearly.

Ultimately, I want to understand how JavaScript evolved in handling async tasks and how all these concepts are connected like a chain of solutions. Treat this like a mini course or a guided tutorial.


*/
