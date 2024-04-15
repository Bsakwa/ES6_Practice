// This program demonstrates the unary operators in JavaScript

var x = 10;

console.log("x = " + x);

// Unary plus operator
var y = +x;

console.log("y = +x = " + y);

// Unary minus operator
var z = -x;

console.log("z = -x = " + z);

// Logical NOT operator
var a = true;
var b = !a;

console.log("b = !a = " + b);

// Bitwise NOT operator
var c = 10;
var d = ~c;

console.log("d = ~c = " + d);
```

Run the above program using the following command:

```
$ node unary.js
```

The output of the above program will be:

```
x = 10
y = +x = 10
z = -x = -10
b = !a = false
d = ~c = -11
```

In the above program, we have used the unary plus operator, unary minus operator, logical NOT operator, and bitwise NOT operator. The unary plus operator is used to convert the operand into a number. The unary minus operator is used to negate the operand. The logical NOT operator is used to negate the boolean value of the operand. The bitwise NOT operator is used to perform bitwise negation of the operand.

In the above program, the variable `x` is initialized with the value `10`. The unary plus operator is used to convert the value of `x` into a number and store it in the variable `y`. The unary minus operator is used to negate the value of `x` and store it in the variable `z`. The logical NOT operator is used to negate the boolean value of the variable `a` and store it in the variable `b`. The bitwise NOT operator is used to perform bitwise negation of the value of `c` and store it in the variable `d`.

### Arithmetic Operators

Arithmetic operators are used to perform arithmetic operations on numerical values. The following arithmetic operators are supported in JavaScript:

- Addition (`+`): Adds two operands.
- Subtraction (`-`): Subtracts the right operand from the left operand.
- Multiplication (`*`): Multiplies two operands.
- Division (`/`): Divides the left operand by the right operand.
- Modulus (`%`): Returns the remainder of the division of the left operand by the right operand.
- Increment (`++`): Increases the value of the operand by 1.
- Decrement (`--`): Decreases the value of the operand by 1.

The following example demonstrates the use of arithmetic operators in JavaScript:

```javascript
//var c = 10;
