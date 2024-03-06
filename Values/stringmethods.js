// We will explore string methods in JS

// 1. length
// The length property returns the length of a string
const str = "Hello World!";

console.log(str.length); // 12

// 2. toUpperCase
// The toUpperCase() method returns the value of the string converted to upper case
const str1 = "Hello World!";

console.log(str1.toUpperCase()); // HELLO WORLD!

// 3. toLowerCase
// The toLowerCase() method returns the value of the string converted to lower case
const str2 = "Hello World!";

console.log(str2.toLowerCase()); // hello world!

// 4. charAt
// The charAt() method returns the character at a specified index in a string
const str3 = "Hello World!";

console.log(str3.charAt(0)); // H

// 5. charCodeAt
// The charCodeAt() method returns the Unicode of the character at a specified index in a string
const str4 = "Hello World!";

console.log(str4.charCodeAt(0)); // 72

// 6. concat
// The concat() method is used to join two or more strings
const str5 = "Hello";
const str6 = "World!";

console.log(str5.concat(" ", str6)); // Hello World!

// 7. includes
// The includes() method determines whether a string contains the characters of a specified string
const str7 = "Hello World!";

console.log(str7.includes("World")); // true

// 8. indexOf
// The indexOf() method returns the position of the first occurrence of a specified value in a string
// This method returns -1 if the value to search for never occurs
const str8 = "Hello World!";

console.log(str8.indexOf("World")); // 6

// 9. lastIndexOf
// The lastIndexOf() method returns the position of the last occurrence of a specified value in a string
const str9 = "Hello World!";

console.log(str9.lastIndexOf("o")); // 7

// 10. match
// The match() method searches a string for a match against a regular expression, and returns the matches

const str10 = "The rain in SPAIN stays mainly in the plain";

console.log(str10.match(/ain/g)); // [ 'ain', 'ain', 'ain' ]

// 11. repeat
// The repeat() method returns a new string with a specified number of copies of the string it was called on

const str11 = "Hello World!";

console.log(str11.repeat(2)); // Hello World!Hello World!

// 12. replace
// The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced

const str12 = "Hello World!";

console.log(str12.replace("World", "Universe")); // Hello Universe!
