/*
 * Illustrate the use of var keyword in JavaScript
 * The idea is to demonstrate the scope of var keyword
 */

// Global variable
var globalVar = "globalVar";

// Function definition
function updateGlobalVar() {
    globalVar = "updatedGlobalVar";
}

// Call the function
console.log("globalVar before update: " + globalVar);

updateGlobalVar();

console.log("globalVar after update: " + globalVar);
