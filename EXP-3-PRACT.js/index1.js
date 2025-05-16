const Link = "https://www.youtube.com/watch?v=B_Iup877bYg";

console.log("let's start");

// 3 rounds
// therical , output based , develope or debug

// introduction

// round : 1

// console.log(b)
// console.log(a)
var b = (a = 5);

let c = 5;
console.log(c++);
console.log(c);

// Type coercion
// this keyword

const foo = () => {
  console.log(this.name);
};
foo.call({ name: "john" });

const login = document.getElementById("login");
const closeButton = document.getElementById("close");
const loginContainer = document.querySelector(".login-container");

login.addEventListener("click", () => {
  loginContainer.style.display = "block";
});

closeButton.addEventListener("click", () => {
  loginContainer.style.display = "none";
});

console.log("nww");
console.log("1");

setTimeout(() => {
  console.log("2");
});

["c", "d"].forEach((Ele) => console.log(Ele));

console.log("3");
