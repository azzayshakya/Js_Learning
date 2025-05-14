// let a =12;
// // console.log(a)

//  a=32;
// console.log(a)

// console.log(Math.PI)
// console.log(2+343*3)
// const date = new Date;
// console.log(date.getFullYear())
// const a = "ajay";
// const b = "shakya";
// const c = `${a} ${b}`
// console.log(c)
// var newVar = 12;
// console.log(newVar)

// 1 : loop
function printNum(a) {
  for (i = 1; i <= a; i++) {
    console.log(i);
  }
}

// printNum(50);
let i = 1;
let newNum = 0;

while (i <= 10) {
  newNum = i + newNum;

  i++;
}

// console.log(newNum);

//   3 : loop;
let str = "ajayIsHere";
for (let eachChar of str) {
  // console.log(eachChar)
}

//  4: loop

for (i = 0; i <= 20; i++) {
  if (i % 2 !== 0) {
    // console.log(i);
  }
}

// 5
let a = 5;

do {
  //   console.log(a);
  a--;
} while (a >= 1);

// 6.
let fact = 1;
for (i = 5; i > 0; i--) {
  fact = fact * i;
}
// console.log(fact)

// 7. loop

let arr = [1, 2, 3, 4, 5];
let newArr = [];
let index = 0;
for (i = arr.length - 1; i >= 0; i--) {
  console.log(i);
  newArr.push(arr[i]);
  //   arr[index] = arr[i];
  //   index++;
}
console.log(newArr);
