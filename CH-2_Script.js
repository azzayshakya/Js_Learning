/**
 * 🔥 JavaScript Variables & Functions - Interview Guide
 * =============================================
 * This file explains:
 * 1️⃣ Variable Declaration, Initialization & Assignment
 * 2️⃣ var, let, const - Differences & Best Practices
 * 3️⃣ Function Declarations & Expressions
 * 4️⃣ Hoisting Behavior
 * 5️⃣ Interview Takeaways 🚀
 */

/**
 * =============================================
 * 1️⃣ Variable Declaration, Initialization & Assignment
 * =============================================
 */

// ❗ Declaration: Reserving memory space but not assigning a value
theoryVar; // ❌ ReferenceError if accessed before assignment

// ❗ Initialization: Assigning an initial value
var theoryVar = 10; // ✅ Declared & initialized

// ❗ Assignment: Changing the value of an already declared variable
theoryVar = 20; // ✅ Allowed with var & let

/**
 * =============================================
 * 2️⃣ var, let, const - Differences & Best Practices
 * =============================================
 */

// 🚀 VAR: Function-scoped, can be re-declared & hoisted with 'undefined'
console.log(a); // ✅ Undefined (Hoisted, but value not assigned yet)
var a = 5;
console.log(a); // 5

// 🚀 LET: Block-scoped, cannot be re-declared, hoisted but in TDZ
// console.log(b); // ❌ ReferenceError (TDZ: Temporal Dead Zone)
let b = 10;
console.log(b); // ✅ 10

// 🚀 CONST: Block-scoped, must be initialized, cannot be reassigned
// console.log(c); // ❌ ReferenceError (TDZ)
const c = 15;
console.log(c); // ✅ 15
// c = 20; // ❌ TypeError (Cannot reassign a constant variable)

/**
 * 📌 Best Practices:
 * ✅ Use `const` by default.
 * ✅ Use `let` only when reassignment is needed.
 * ❌ Avoid `var` due to hoisting issues & unexpected redeclarations.
 */

/**
 * =============================================
 * 3️⃣ Function Declarations & Expressions
 * =============================================
 */

// ✅ FUNCTION DECLARATION: Hoisted, can be called before declaration
console.log(sum(5, 10)); // ✅ Works fine
function sum(x, y) {
  return x + y;
}

// ❌ FUNCTION EXPRESSION: Not hoisted (TDZ error)
// console.log(multiply(5, 10)); // ❌ ReferenceError
const multiply = function (x, y) {
  return x * y;
};
console.log(multiply(5, 10)); // ✅ 50

/**
 * =============================================
 * 4️⃣ Hoisting in JavaScript
 * =============================================
 * Hoisting moves variable & function declarations to the top of their scope.
 * 🚀 var: Hoisted with `undefined`
 * 🚀 let & const: Hoisted but remain in the Temporal Dead Zone (TDZ)
 * 🚀 Function Declarations: Fully hoisted
 */

// ❌ TDZ Error
// console.log(hoistLet); // ❌ ReferenceError
let hoistLet = "TDZ Example";
console.log(hoistLet); // ✅ "TDZ Example"

/**
 * =============================================
 * 5️⃣ Interview Takeaways 🚀
 * =============================================
 * 1️⃣ Always use `const` unless reassignment is needed (then use `let`).
 * 2️⃣ Avoid `var` to prevent scope & hoisting issues.
 * 3️⃣ Function declarations are hoisted, but function expressions are not.
 * 4️⃣ Understand TDZ & why `let` & `const` behave differently from `var`.
 * 5️⃣ Be ready to explain hoisting with examples in an interview.
 */

console.log("✅ JavaScript Variable & Function Concepts Loaded Successfully!");
