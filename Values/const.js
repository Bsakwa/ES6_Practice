/*
 * Declaring a variable using const
 * The idea of const is to prevent accidental re-assignment of a variable that is expected to remain constant.
 * In other words, const variables are block-scoped, much like variables declared using the let keyword.
 * The value of a constant cannot change through re-assignment, and it can't be redeclared.
 * const variables must be assigned a value when they are declared.
 * const variables are read-only.
 * const variables are NOT hoisted.
 * const variables have block scope.
 * const variables must be initialized when they are declared.
 */

// Example 1

function f () {
  const PI = 3.14;
  PI = 3.1415; // This will give an error
}

// call the function
f();
console.log(PI); // This will also give an error
