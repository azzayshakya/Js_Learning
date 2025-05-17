// 🧩 Comprehensive Guide to Objects in JavaScript

// ===== 1. INTRODUCTION TO OBJECTS =====
/**
 * THEORY: Objects are complex data types that store collections of key-value pairs
 * They are fundamental to JavaScript and represent real-world entities
 */

// Object Creation Methods
// 1. Object Literal
const person = {
    name: "John Doe",
    age: 30,
    city: "New York"
};

// 2. Constructor Method
const car = new Object();
car.brand = "Toyota";
car.model = "Camry";

const ajay ={
    name:"ajay kr shakya",
    age:17,
    country:"india",
    number:[2,3,5,7,7],
    greet:()=>
        "hey what is going on"
    
}

ajay.father="chander pal";
console.log("ajay",ajay)
console.log("ajay dot notation",ajay.greet)
console.log("ajay bracet notation notation",ajay["age"])


console.log("ajay object function greet",ajay.greet())
console.log("looping")
// looping 
for(let key in ajay){
    console.log(`${key} : ${ajay[key]}`)
}


// ===== 2. DOT VS BRACKET NOTATION =====
/**
 * THEORY: Two ways to access and set object properties
 */

// Dot Notation
console.log(person.name); // "John Doe"
person.job = "Developer"; // Adding new property

// Bracket Notation
console.log(person['age']); // 30
const propertyName = "city";
console.log(person[propertyName]); // "New York"

// Advanced Bracket Notation Example
const dynamicKey = "specialSkill";
const developer = {
    [dynamicKey]: "Problem Solving"
};
console.log("advanced bracet notaion")
console.log(developer.specialSkill); // "Problem Solving"

// ===== 3. ITERATING OBJECTS =====
/**
 * THEORY: Multiple ways to loop through object properties
 */
console.log("topic three")
// for...in loop
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Object.keys()
const keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'city', 'job']

// Object.values()
const values = Object.values(person);
console.log(values); // ["John Doe", 30, "New York", "Developer"]

// Object.entries()
const entries = Object.entries(person);
console.log(entries);
// [['name', 'John Doe'], ['age', 30], ...]

// ===== 4. COMPUTED PROPERTIES =====
/**
 * THEORY: Ability to use expressions as property names
 */
const prefix = "user_";
const dynamicObject = {
    [prefix + "id"]: 42,
    [prefix + "name"]: "Alice"
};
console.log(dynamicObject.user_id); // 42
console.log(dynamicObject.user_name); // "Alice"

// ===== 5. SPREAD OPERATOR IN OBJECTS =====
/**
 * THEORY: Creates a shallow copy of an object
 */

// Copying Objects
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };

// Merging Objects
const defaults = { color: "red", size: "medium" };
const userPreferences = { color: "blue" };
const finalPreferences = { ...defaults, ...userPreferences };
console.log(finalPreferences); // { color: "blue", size: "medium" }

// ===== 6. OBJECT DESTRUCTURING =====
/**
 * THEORY: Extract values from objects into distinct variables
 */

const student = {
    studentName: "Emily",
    age: 22,
    major: "Computer Science",
    address: {
        city: "New York",
        country: "USA"
    }
};

// Basic Destructuring
const { studentName, age } = student;
console.log(studentName, age); // "Emily", 22

// Renaming Variables
const { studentName: fullName } = student;
console.log(fullName); // "Emily"

// Default Values
const { gpa = 4.0 } = student;
console.log(gpa); // 4.0

// ===== 7. OBJECTS INSIDE ARRAYS =====
/**
 * THEORY: Arrays can contain complex objects
 */

const users = [
    { id: 1, name: "Alice", role: "admin" },
    { id: 2, name: "Bob", role: "user" },
    { id: 3, name: "Charlie", role: "manager" }
];

// Filtering Objects in Array
const admins = users.filter(user => user.role === "admin");
console.log(admins);

// Mapping Objects in Array
const userNames = users.map(user => user.name);
console.log(userNames); // ["Alice", "Bob", "Charlie"]

// ===== 8. NESTED DESTRUCTURING =====
/**
 * THEORY: Destructuring nested objects and arrays
 */

const company = {
    name: "TechCorp",
    details: {
        employees: [
            { id: 1, name: "John", department: "IT" },
            { id: 2, name: "Jane", department: "HR" }
        ]
    }
};

// Nested Destructuring
const { 
    name: companyName, 
    details: { 
        employees: [
            { name: firstEmployeeName }, 
            { name: secondEmployeeName }
        ] 
    } 
} = company;

console.log(companyName, firstEmployeeName, secondEmployeeName);
// "TechCorp", "John", "Jane"

// ===== PRACTICE EXERCISES =====
/**
 * Challenges to Master Object Manipulation
 */

// Exercise 1: Create a User Management System
function createUser(name, age, skills = []) {
    return {
        name,
        age,
        skills,
        addSkill(skill) {
            this.skills.push(skill);
        },
        hasSkill(skill) {
            return this.skills.includes(skill);
        }
    };
}

const developer1 = createUser("Alice", 28, ["JavaScript", "React"]);
developer1.addSkill("Node.js");
console.log(developer1.hasSkill("Node.js")); // true

// Exercise 2: Deep Clone Object
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const originalData = { 
    name: "Sample", 
    nested: { value: 42 } 
};
const clonedData = deepClone(originalData);

// NOTE: Best Practices and Pro Tips
/**
 * 1. Use const for objects to prevent reassignment
 * 2. Use spread operator for immutable updates
 * 3. Destructure only the properties you need
 * 4. Use computed properties for dynamic key generation
 * 5. Prefer Object.entries() for complex iterations
 */

// Export for module systems (if needed)
// export {
//     person,
//     createUser,
//     deepClone
// };