class myClass {}
console.log(typeof myClass);
const handleOrder = new Promise((resolve, reject) => {
  var order = null;

  setTimeout(() => {
    order = "sucess";
    if (order == "sucess") {
      resolve("yehhh ordered");
    } else {
      reject("can not order shittt");
    }
  }, 2000);
});
handleOrder.then((m) => console.log(m)).catch((e) => console.log(e));
console.log(handleOrder);
4;
const button = document.getElementById("hitmebutton");
console.log(button);
button.addEventListener("click", () => console.log("azzz"));
