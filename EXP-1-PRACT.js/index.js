console.log("let's get started");

// q-1

// function declaration

// greet();

function greet() {
  console.log("fucntion is hoisted");
}

// greet2();

const greet2 = function () {
  console.log("function is not hosted");
};

// greet3();
const greet3 = function NamedFunction() {
  console.log("function is not hosted");
};

// greet4();
const greet4 = () => {
  console.log("funciton is not hoites");
};

// q-2

// optional chainning

const data = {
  name: "ajju",
  age: 14,
  marks: [12, 13, 43],
  other: {
    name: "boy",
    age: 11,
    ope: false,
  },
};
// console.log(data?.other?.status);

// needed here optional chaining
const data2 = {
  name: "ajju",
};

// console.log(data2.other.status);

// q-3

function add(a, b) {
  return a + b;
}
// console.log(add(2, 4));

function a(a) {
  return function b(b) {
    return function c(c) {
      return a + b + c;
    };
  };
}
// console.log(a(3)(4)(4));

// infinciet curring

function add(a) {
  return function (b) {
    if (b !== undefined) {
      return add(a + b);
    } else {
      return a;
    }
  };
}

// console.log(add(1)(2)(3)(4)());

//q-5

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
function calculator(operation, a, b) {
  return operation(a, b);
}
// console.log(calculator(add, 10, 5));
// console.log(calculator(subtract, 10, 5));
// console.log(calculator(multiply, 10, 5));
// console.log(calculator(divide, 10, 5));

//q-5

let age = 22;
const result = age < 18 ? "under age" : " allowed";
// console.log(result)

// q-6

// map method

const array = [1, 2, 4, 6, 7, 34];

const newarray = array.map((num) => {
  return num * 2;
});
// console.log(newarray)

// forEach

array.forEach((num) => {
  //  console.log(num*2)
});
// console.log(array)

const arr = [10, 20, 30, 40, 50];
const sliced = arr.slice(0, 3);
const splice = arr.splice(0, 3);

// console.log(sliced);
// console.log(arr);

// console.log("splice", splice);
// console.log(arr);


// conver  obj in string
const normalObj= {
  name:"ajay",
  age:12

}

console.log("normal obj",normalObj)
const convertItToString= JSON.stringify(normalObj)
console.log(convertItToString)

// convert string to obj

const str = '{"name":"Ajay","age":25}';
const obj = JSON.parse(str);

console.log(obj)

// if([]){
//     console.log("value si true")
// }else{
//     console.log(" value is false")
// }

// q- event loop
//
// console.log("one")
// setTimeout(()=>{
//     console.log("2")
// },0)
// console.log("3")
// Promise.resolve().then(()=>{
//     console.log("4");
// })
// console.log("5")

// console.log(2+"5")

// q5
// console.log(([]+[]))

// console.log()

// console.log(!"hello");
// console.log(!!0);
// console.log(!![]);
// console.log(!!null);

// // false vs true
// Boolean(undefined)  // false
// Boolean(null)       // false
// Boolean(NaN)        // false
// Boolean(0)          // false
// Boolean('')         // false
// Boolean(false)      // false

// Boolean({})         // true
// Boolean([])         // true
// Boolean(' ')        // true
// Boolean('0')        // true
