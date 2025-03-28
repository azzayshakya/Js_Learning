// Comprehensive Guide to Equality in JavaScript

// 1. EQUALITY TYPES
// Two main types of equality comparison in JavaScript

// Loose Equality (==)
// Performs type coercion before comparison
function looseEqualityExamples() {
    // Number and String
    console.log(5 == "5");  // true (coerces string to number)
    console.log(0 == false);  // true (coerces boolean to number)
    
    // Null and Undefined
    console.log(null == undefined);  // true (special case)
    
    // Different type comparisons
    console.log(1 == true);   // true (boolean coerced to number)
    console.log(0 == false);  // true (boolean coerced to number)
    
    // More complex coercions
    console.log([] == 0);     // true (empty array coerced to 0)
    console.log([] == "");    // true (empty array coerced to empty string)
}

// Strict Equality (===)
// Compares both value and type without type coercion
function strictEqualityExamples() {
    // Number and String
    console.log(5 === "5");  // false (different types)
    console.log(0 === false);  // false (different types)
    
    // Null and Undefined
    console.log(null === undefined);  // false
    
    // Precise comparisons
    console.log(1 === true);   // false (different types)
    console.log(0 === false);  // false (different types)
    
    // Object comparisons
    const obj1 = { value: 5 };
    const obj2 = { value: 5 };
    const obj3 = obj1;
    
    console.log(obj1 === obj2);  // false (different object references)
    console.log(obj1 === obj3);  // true (same object reference)
}

// Practical Equality Comparison Function
function advancedEqualityCheck(a, b) {
    console.log("Loose Equality (==):", a == b);
    console.log("Strict Equality (===):", a === b);
    
    console.log("Type of a:", typeof a);
    console.log("Type of b:", typeof b);
}

// Demonstration of Coercion in Loose Equality
function equalityCoercionDemo() {
    console.log("Coercion Examples:");
    
    // Numeric coercion
    console.log("'' == 0:", '' == 0);        // true
    console.log("'0' == 0:", '0' == 0);      // true
    console.log("[] == 0:", [] == 0);        // true
    console.log("[] == '':", [] == '');      // true
    
    // Boolean coercion
    console.log("true == 1:", true == 1);    // true
    console.log("false == 0:", false == 0); // true
}

// Best Practices for Equality Comparison
function equalityBestPractices() {
    console.log("Equality Best Practices:");
    console.log("1. Use === (strict equality) by default");
    console.log("2. Only use == when type coercion is intentional");
    console.log("3. Be explicit about type conversions");
}

// Type Conversion Rules Demonstration
function typeConversionRules() {
    console.log("Type Conversion in Loose Equality:");
    
    // Null and Undefined
    console.log("null == undefined:", null == undefined);
    
    // Number conversions
    console.log("'5' == 5:", '5' == 5);  // true
    console.log("true == 1:", true == 1);  // true
    console.log("false == 0:", false == 0);  // true
    
    // Object to Primitive conversions
    const obj = { 
        valueOf() { return 42; }
    };
    console.log("obj == 42:", obj == 42);  // true
}

// Comprehensive Equality Checker
function comprehensiveEqualityChecker(a, b) {
    console.group("Equality Comparison");
    console.log("Value a:", a);
    console.log("Value b:", b);
    console.log("Type of a:", typeof a);
    console.log("Type of b:", typeof b);
    console.log("Loose Equality (==):", a == b);
    console.log("Strict Equality (===):", a === b);
    console.groupEnd();
}

// Previous content (undefined, null, BigInt) remains the same...
// [Previous artifact content continues...]