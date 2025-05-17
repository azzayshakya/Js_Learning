console.log("lets start");

function abc() {
  console.log("value", abc.xyz);
}

// abc();
abc.xyz = 100;
abc.xyz = 200;
// abc();

// q-2

const arr = [1, 2, 3];
arr[100] = 500;

// console.log(arr)

// q-3

// console.log(typeof typeof 100)

const arr2 = [..."ajay"];
// console.log(arr2);

// Q-4

// console.log(parseInt("123"));
// console.log(parseInt("42px"));
// console.log(parseInt("abc"));
// parseInt("100years");
// parseInt("12.34");
// parseInt("  55 ");
// console.log(parseInt("101", 2));
// console.log(parseInt("1A", 16));

// Q-5

function a() {
  return;
}

// console.log(a());


// console.log(
[1,2].map((num)=>{
    if(num>0){
        return ;
    }
    return num*2;

})
// )

