// JavaScript Data Types (Updated for Modern JavaScript)

// 1. Primitive Data Types
// Immutable, stored directly in memory

// Number (includes integers and floating-point)
const integer = 42;
const float = 3.14;
const bigNumber = 1_000_000; // Readable number formatting
const scientificNotation = 1.23e4; // 12300

// BigInt for very large numbers
const bigIntValue = 1234567890123456789012345678901234567890n;

// String
const singleQuote = 'Hello';
const doubleQuote = "World";
const templateLiteral = `Multiline 
    and interpolation ${integer}`;

// Boolean
const isTrue = true;
const isFalse = false;

// Undefined
let undefinedVar;

// Null
const nullVar = null;

// Symbol (unique identifier)
const uniqueSymbol = Symbol('description');
const anotherSymbol = Symbol('description');
console.log(uniqueSymbol === anotherSymbol); // false

// 2. Reference Data Types
// Stored by reference, mutable

// Object
const person = {
    name: "John",
    age: 30,
    // Modern object methods
    greet() {
        return `Hello, ${this.name}!`;
    }
};

// Array (special type of object)
const fruits = ['Apple', 'Banana', 'Cherry'];
const mixedArray = [1, 'two', { key: 'value' }, true];

// Function (special object type)
function greet(name) {
    return `Hello, ${name}!`;
}
const arrowFunction = (name) => `Hello, ${name}!`;
