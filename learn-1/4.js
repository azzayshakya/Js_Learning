// Comprehensive Guide to undefined, null, and BigInt in JavaScript

// 1. UNDEFINED
// Undefined represents a variable that has been declared but not assigned a value
let undefinedExample;
console.log(undefinedExample); // Outputs: undefined

// Functions return undefined by default if no return value is specified
function noReturnValue() {
    // No return statement
}
console.log(noReturnValue()); // Outputs: undefined

// Checking for undefined
function checkUndefined(param) {
    if (param === undefined) {
        console.log("Parameter is undefined");
    }
}

// Different ways undefined can occur
let uninitializedVariable; // Automatically undefined
console.log(typeof uninitializedVariable); // "undefined"

// Difference between == and === with undefined
console.log(null == undefined);   // true (loose equality)
console.log(null === undefined);  // false (strict equality)

// 2. NULL
// Null represents an intentional absence of any object value
let nullExample = null;
console.log(nullExample); // Outputs: null

// Typical use cases for null
function findUser(id) {
    if (id === 0) {
        return null; // Explicitly indicating no user found
    }
    return { id: id, name: "John" };
}

// Checking for null
function checkNull(value) {
    if (value === null) {
        console.log("Value is explicitly set to null");
    }
}

// Type of null is interesting
console.log(typeof null); // Outputs: "object" (historical JavaScript quirk)

// 3. BIGINT


// note - normally we can store the value maxinum 2^53 - 1 in any variable if we want to store more then this than we can use the big int


// BigInt allows representation of integers larger than 2^53 - 1
// Created by adding 'n' to the end of an integer or using BigInt() function
const bigIntLiteral = 1234567890123456789012345678901234567890n;
const bigIntFunction = BigInt("1234567890123456789012345678901234567890");

// Performing operations with BigInt
const largeNumber1 = 1234567890123456789012345678901234567890n;
const largeNumber2 = 9876543210987654321098765432109876543210n;
const sum = largeNumber1 + largeNumber2;
console.log(sum); // Outputs the exact sum of two enormous numbers

// Cannot mix BigInt with regular numbers
try {
    // This will throw an error
    // const mixed = 42 + 42n;
} catch (error) {
    console.log("Cannot mix BigInt with regular numbers");
}

// BigInt use cases
function calculateVeryLargeFactorial(n) {
    let result = 1n;
    for (let i = 2n; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(calculateVeryLargeFactorial(50n)); // Calculates factorial without precision loss

// Comparison and Conversion
console.log(typeof bigIntLiteral);  // "bigint"
console.log(BigInt(42));            // 42n
console.log(Number(42n));           // 42 (be careful with large numbers)

// Key Differences and Comparisons
function compareTypes() {
    console.log("Undefined characteristics:");
    console.log("- Represents uninitialized variables");
    console.log("- Default return value for functions");
    console.log("- Type is 'undefined'");
    
    console.log("\nNull characteristics:");
    console.log("- Intentional absence of any object value");
    console.log("- Must be explicitly assigned");
    console.log("- Type is 'object' (historical quirk)");
    
    console.log("\nBigInt characteristics:");
    console.log("- Represents integers larger than 2^53 - 1");
    console.log("- Created with 'n' suffix or BigInt() function");
    console.log("- Cannot be mixed with regular numbers");
}

// Interview-style Type Checking Function
function typeChecker(value) {
    if (value === undefined) {
        return "Undefined: Variable declared but not assigned";
    }
    if (value === null) {
        return "Null: Intentional absence of object value";
    }
    if (typeof value === 'bigint') {
        return "BigInt: Large integer beyond standard number precision";
    }
    return "Other type";
}