// We will explore the use of logical operators in JavaScript

// Logical operators are used to determine the logic between variables or values
// There are three logical operators in JavaScript: || (OR), && (AND), ! (NOT)

// OR (||) - Returns true if either of the operands is true
console.log(true || false); // true
console.log(true || true); // true
console.log(false || false); // false

// AND (&&) - Returns true if both of the operands are true
console.log(true && false); // false
console.log(true && true); // true
console.log(false && false); // false

// NOT (!) - Returns true if the operand is false
console.log(!true); // false
console.log(!false); // true

// Example
let a = 10;
let b = 20;
let c = 30;
let d = 40;

// OR operator
if (a > b || c > d) {
  console.log("At least one condition is true");
} else {
  console.log("Both conditions are false");
}

// AND operator
if (a < b && c < d) {
  console.log("Both conditions are true");
} else {
  console.log("At least one condition is false");
}

// NOT operator
if (!(a > b)) {
  console.log("The condition is false");
} else {
  console.log("The condition is true");
}

// Short-circuiting
// JavaScript uses short-circuiting to optimize the evaluation process
// When using the OR operator, if the first operand is true, the second operand is not evaluated
// When using the AND operator, if the first operand is false, the second operand is not evaluated

// Example
let x = 10;
let y = 20;
let z = 30;
let w = 40;

// OR operator
if (x < y || y < z) {
  console.log("At least one condition is true");
} else {
  console.log("Both conditions are false");
}

// AND operator
if (x < y && y < z) {
  console.log("Both conditions are true");
} else {
  console.log("At least one condition is false");
}

// NOT operator
if (!(x > y)) {
  console.log("The condition is false");
} else {
  console.log("The condition is true");
}

// Example
let user = "admin";
let isAuthenticated =────────────────────────────────────────────────────────────────────────
