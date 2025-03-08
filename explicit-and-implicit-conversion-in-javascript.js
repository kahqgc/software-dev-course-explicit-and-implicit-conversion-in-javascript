/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2; //explicitly converted string into a number
console.log("The result is: " + result);
console.log(typeof "5") // results as a string
console.log(typeof result) // results as a number

let isValid = Boolean("false"===false); // === makes a comparison between values without making any changes to the data type
if (isValid) {
    console.log("This is valid")
    ;
}
console.log(typeof "false") // results as string
console.log(typeof false) // results as boolean

let age = Number("25"); //explicitly converted string to number
let totalAge = age + 5;
console.log("Total Age: " + totalAge);
console.log(typeof age) // reads as a number

//examples
 
let number = 360;
console.log(typeof number) //reads as number
let greeting = "hello";
let final = number + greeting;
console.log(final);
console.log(typeof final); // converted explicitly to string

let space = "";
console.log(Boolean(space)); //reads as false implicitly