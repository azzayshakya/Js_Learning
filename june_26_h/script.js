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
