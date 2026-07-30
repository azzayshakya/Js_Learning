import { variable } from "./script2";
console.log("babes", variable);
const promo = new Promise((resolve, reject) => {
  var sucess = false;
  setTimeout(() => {
    sucess = true;
    if (sucess == true) {
      resolve("got sucesss");
    } else {
      reject("got rejected");
    }
  }, 2000);
});
console.log(typeof promo, promo);
const func = () => console.log("azx");
const szx = "ajju";
promo.then(func);
func();

// console.log("ajju", typeof promo);
// const addbutton = document
//   .getElementById("newBtn")
//   .addEventListener("click", () => promo);
// console.log(addbutton);
// addbutton.then(()=
// >{}).catch(()=>{})

document.getElementById("newBtn").addEventListener("click", () =>
  buttonPromise.then((e) => {
    console.log(e);
  }),
);

const buttonPromise = new Promise((res, rej) => {
  // res("got resoolved on click");
  rej("got rejected on click");
});

console.log("statitng the questions ");
// q1
const newpromo = new Promise((res, rej) => {
  setTimeout(() => {
    res("kgot resolved brother");
  }, 200);
});

newpromo.then((e) => console.log(e));

//q2

const handleLogin = (id, password) => {
  // if (!value) return;
  // console.log("value", value);
  return new Promise((res, rej) => {
    if (id == "admin" && password == "admin") {
      res("u r logged in");
    } else {
      rej("wrong id or p ");
    }
  });
};
handleLogin("admin", "admin")
  .then((e) => {
    console.log(e);
  })
  .catch((e) => console.log(e));

// q 4
const fetchData = async (url) => {
  try {
    if (url === "/users") {
      return { id: "1", password: "azzxx" };
    } else {
      return { error: "404 not found" };
    }
  } catch (error) {}
};

const result = fetchData("/users");
console.log("azxx", result);
