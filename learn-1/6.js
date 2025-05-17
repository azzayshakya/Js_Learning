// 🔍 JAVASCRIPT ARRAYS: COMPREHENSIVE GUIDE

// --------------------------------------------------------
// 1. ARRAY BASICS: THEORY AND CREATION
// --------------------------------------------------------
/*
THEORY:
- Arrays are ordered collections of values
- Can store multiple data types
- Zero-indexed (first element is at index 0)
- Dynamically sized (can grow or shrink)
- Reference type (stored by reference, not by value)

ARRAY CREATION METHODS:
1. Literal Notation (Recommended)
2. Array Constructor
3. Array.from() method
*/

// Array Creation Examples
// Literal Notation
const fruits = ['Apple', 'Banana', 'Cherry'];


const array=["ajay","aman"]
array[2]="rohit"
array[3]="ankit"
// console.log(array)
const newArray= new Array(1,3,4,4)
// console.log("new arrray", newArray)



// Array Constructor
const numbers = new Array(1, 2, 3, 4, 5);

// Create array with specific length
const emptyArray = new Array(5); // Creates array with 5 empty slots

// Array.from() method
const arrayFromString = Array.from('Hello'); // ['H', 'e', 'l', 'l', 'o']

// --------------------------------------------------------
// 2. ARRAY MANIPULATION METHODS
// --------------------------------------------------------
/*
THEORY:
- Push/Pop: Work with end of array
- Shift/Unshift: Work with beginning of array
- Mutate the original array
*/

function arrayManipulationPractice() {
    // Push: Adds element to end of array
    const pushExample = [1, 2, 3];
    pushExample.push(4); // [1, 2, 3, 4]
    console.log("Push Result:", pushExample);

    // Pop: Removes last element
    const lastElement = pushExample.pop(); // 4
    console.log("Pop Result:", pushExample, "Removed:", lastElement);

    // Unshift: Adds element to beginning
    pushExample.unshift(0); // [0, 1, 2, 3]
    console.log("Unshift Result:", pushExample);

    // Shift: Removes first element
    const firstElement = pushExample.shift(); // 0
    console.log("Shift Result:", pushExample, "Removed:", firstElement);
}
// arrayManipulationPractice();


// --------------------------------------------------------
// 3. PRIMITIVE VS REFERENCE TYPES
// --------------------------------------------------------
/*
THEORY:
- Primitive Types: Copied by VALUE
  - Number, String, Boolean, null, undefined, Symbol
  - When assigned, a copy of the value is created

- Reference Types: Copied by REFERENCE
  - Objects, Arrays, Functions
  - When assigned, both variables point to same memory location
*/

function referenceVsPrimitiveDemo() {
    // Primitive Type (Copied by Value)
    let a = 5;
    let b = a;
    b = 10;
    console.log("Primitive Example:", a, b); // a remains 5, b is 10

    // Reference Type (Copied by Reference)
    const arr1 = [1, 2, 3];
    const arr2 = arr1;
    arr2.push(4);
    console.log("Reference Example:", arr1, arr2); // Both arr1 and arr2 are [1, 2, 3, 4]
}

// --------------------------------------------------------
// 4. ARRAY CLONING & SPREAD OPERATOR
// --------------------------------------------------------
/*
THEORY:
- Spread Operator (...): Creates shallow copy
- JSON.parse(JSON.stringify()) for deep clone
- Useful for creating new arrays without modifying original
*/

function arrayCloning() {
    const original = [1, 2, 3];
    
    // Shallow Clone
    const shallowClone = [...original];
    console.log("Shallow Clone:", shallowClone);

    // Combining Arrays
    const moreNumbers = [4, 5];
    const combinedArray = [...original, ...moreNumbers];
    console.log("Combined Array:", combinedArray);

    // Deep Clone (for nested arrays)
    const nestedArray = [1, [2, 3], 4];
    const deepClone = JSON.parse(JSON.stringify(nestedArray));
    console.log("Deep Clone:", deepClone);
}
arrayCloning()

// --------------------------------------------------------
// 5. ARRAY LOOPING TECHNIQUES
// --------------------------------------------------------
/*
THEORY:
- For Loop: Traditional, most control
- While Loop: Conditional iteration
- For...of: Modern, clean iteration over values
- For...in: Iterates over indices (use cautiously with arrays)
*/

function arrayLoopingPractice() {
    const fruits = ['Apple', 'Banana', 'Cherry'];

    // Traditional For Loop
    console.log("Traditional For Loop:");
    for (let i = 0; i < fruits.length; i++) {
        console.log(`Index ${i}: ${fruits[i]}`);
    }

    // While Loop
    console.log("\nWhile Loop:");
    let j = 0;
    while (j < fruits.length) {
        console.log(`While Loop: ${fruits[j]}`);
        j++;
    }

    // For...of Loop (Recommended)
    console.log("\nFor...of Loop:");
    for (const fruit of fruits) {
        console.log(`For...of: ${fruit}`);
    }

    // For...in Loop (Not recommended for arrays)
    console.log("\nFor...in Loop:");
    for (const index in fruits) {
        console.log(`For...in Index ${index}: ${fruits[index]}`);
    }
}

// --------------------------------------------------------
// 6. CONST WITH ARRAYS
// --------------------------------------------------------
/*
THEORY:
- Arrays declared with const can be modified
- Cannot reassign the entire array
- Properties can be changed
*/

function constArrayDemo() {
    const constantArray = [1, 2, 3];
    
    // Allowed: Modify array contents
    constantArray.push(4);
    console.log("Modified Array:", constantArray);

    // Not Allowed: Reassignment
    // constantArray = [5, 6, 7]; // This would cause an error
}

// --------------------------------------------------------
// 7. ARRAY DESTRUCTURING
// --------------------------------------------------------
/*
THEORY:
- Easily extract values from arrays
- Can skip elements
- Use rest operator to collect remaining elements
- Can provide default values
*/

function arrayDestructuringPractice() {
    const numbers = [1, 2, 3, 4, 5];

    // Basic Destructuring
    const [first, second, ...rest] = numbers;
    console.log("Basic Destructuring:", first, second, rest);

    // Skipping Elements
    const [a, , c] = numbers;
    console.log("Skipping Elements:", a, c);

    // Default Values
    const [x, y, z = 10] = [1, 2];
    console.log("Default Values:", x, y, z);
}

// --------------------------------------------------------
// 8. BONUS: ADVANCED ARRAY METHODS
// --------------------------------------------------------
/*
THEORY:
- Map: Transform array elements
- Filter: Create new array with conditional elements
- Reduce: Reduce array to single value
*/

function advancedArrayMethods() {
    const numbers = [1, 2, 3, 4, 5];

    // Map: Transform each element
    const doubled = numbers.map(num => num * 2);
    console.log("Mapped (Doubled):", doubled);

    // Filter: Keep only even numbers
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    console.log("Filtered (Even):", evenNumbers);

    // Reduce: Sum all numbers
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log("Reduced (Sum):", sum);
}

// Practice Function to Run All Demos
function runArrayPractice() {
    console.log("🚀 Array Manipulation Practice 🚀");
    arrayManipulationPractice();
    referenceVsPrimitiveDemo();
    arrayCloning();
    arrayLoopingPractice();
    constArrayDemo();
    arrayDestructuringPractice();
    advancedArrayMethods();
}

// Uncomment to run all demos
// runArrayPractice();