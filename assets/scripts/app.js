// import { apiKey, anotherOne as facts } from './util.js';
// When in regular js, use the extension; Not needed in React
// Above shows how to import multiple things.

// import * as utils from "./util.js"; // this calls everything that's offered by the file.
// console.log(utils.anotherOne);
// console.log(utils.apiKey);

// import anyName from "./util.js"; // This assigns a name to the default export from the file specified, because it knows you mean that one.

// console.log(apiKey);
// console.log(anyName);

// console.log(facts + '!');

// Foundations of Variables, Data and Operators
// String, Number, Boolean, Null, Undefined, Objects
console.log("Hello world!");
// Variables store values.
//let can change, const can't. You know. Simple shit.
let userMessage = "What it do?";
console.log(userMessage);
// Math
console.log(10 + 5);
console.log(11 % 3);

// Concat
console.log("Super" + "man");

// Equality, greater than, less than (boolean)
let thisWord = "Superman is actually Clark Kent";

function checkLength(thingToCheck) {
  if (thingToCheck.length < 9) {
    console.log("Naur");
  } else {
    console.log("Yup!");
  }
}

checkLength(thisWord);

// Functions (again)
function createGreeting(userName, message = "How are you?") {
  return "Hi, I am " + userName + ". " + message;
}

const greeting1 = createGreeting("Devin");
console.log(greeting1);

function combine(a, b, c) {
  return (a * b) / c;
}

function getDifference(value) {
  if (value >= 10) {
    console.log("All set");
    return;
  }
  console.log(
    "You only have " +
      value +
      " credits. You need " +
      difference +
      " more credits.",
  );
}

getDifference(combine(100, 4, 6));
