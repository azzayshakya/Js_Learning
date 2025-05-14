/*
🔥 What is Hoisting in JavaScript?
-----------------------------------
Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope before execution.

👉 Variables are hoisted but behave differently depending on var, let, and const.
👉 Functions are fully hoisted and can be used before their declaration.
*/

console.log("\n🚀 Hoisting with var (Gets hoisted with undefined)\n");

console.log(a); // ✅ undefined (Hoisted, but value is not assigned yet)
var a = 10;
console.log(a); // ✅ 10

/*
🔹 Why undefined?
👉 var a is hoisted to the top, but its value (10) is assigned later.

Internally, JS sees this like:
var a;
console.log(a); // undefined
a = 10;
console.log(a); // 10
*/

console.log("\n🚀 Hoisting with let & const (Hoisted but not initialized)\n");

// console.log(b); ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // ✅ 20

// console.log(c); ❌ ReferenceError
const c = 30;
console.log(c); // ✅ 30

/*
👉 Unlike var, let is hoisted but remains in the "Temporal Dead Zone (TDZ)" until it’s assigned a value.
👉 Same for const, but const also requires an initial value.
*/

console.log("\n📌 Key Differences in Hoisting\n");
console.table([
  {
    Variable: "var",
    Hoisted: "✅ Yes",
    DefaultValue: "undefined",
    Accessible_Before_Declaration: "✅ Yes",
  },
  {
    Variable: "let",
    Hoisted: "✅ Yes",
    DefaultValue: "❌ Not Initialized",
    Accessible_Before_Declaration: "❌ No (TDZ)",
  },
  {
    Variable: "const",
    Hoisted: "✅ Yes",
    DefaultValue: "❌ Not Initialized",
    Accessible_Before_Declaration: "❌ No (TDZ)",
  },
]);

console.log("\n🛠 Function Hoisting\n");

hello(); // ✅ Works fine (Function is fully hoisted)
function hello() {
  console.log("Hello, Ajay!");
}

// greet(); ❌ Error: Cannot access 'greet' before initialization
const greet = function () {
  console.log("Hello");
};

greet(); // ✅ Works after definition

/*
🚀 🔥 BEST PRACTICES FOR HOISTING
---------------------------------
✅ Always declare variables (let or const) at the top of their scope.
✅ Avoid using var to prevent unexpected undefined values.
✅ Define functions before calling them if using function expressions.
*/

console.log("\n🔥 Interview Takeaways\n");
console.log(`
1️⃣ var is hoisted with undefined, but let and const remain in the Temporal Dead Zone (TDZ).
2️⃣ Function declarations are fully hoisted, but function expressions are not.
3️⃣ Avoid using var to prevent scope-related issues.
4️⃣ Always define let and const before use to avoid ReferenceErrors.
5️⃣ Understand TDZ to prevent errors when using let and const.
`);

/*
🔴 EXPLAINING HOISTING CONCEPT
--------------------------------
Hoisting is JavaScript’s way of moving **variable and function declarations** to the top of their scope **before execution**.
`
🔹 **With var**: Variables declared with `var` are hoisted but initialized as `undefined`, meaning they can be accessed before assignment.
🔹 **With let & const**: Variables declared with `let` and `const` are hoisted but NOT initialized, causing a **ReferenceError** if accessed before assignment. This is called the **Temporal Dead Zone (TDZ)**.
🔹 **With functions**: Function declarations are hoisted **completely**, allowing them to be used before being defined.
🔹 **With function expressions**: If assigned to `let` or `const`, they behave like variables and stay in the TDZ until assignment.

⚡ **Summary**: Always declare variables and functions properly to avoid unexpected hoisting behavior.
*/

// practice
