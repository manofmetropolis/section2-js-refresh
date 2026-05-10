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
// console.log("Hello world!");
// Variables store values.
//let can change, const can't. You know. Simple shit.
// let userMessage = "What it do?";
// console.log(userMessage);
// // Math
// console.log(10 + 5);
// console.log(11 % 3);

// // Concat
// console.log("Super" + "man");

// Equality, greater than, less than (boolean)
// let thisWord = "Superman is actually Clark Kent";

// function checkLength(thingToCheck) {
//   if (thingToCheck.length < 9) {
//     console.log("Naur");
//   } else {
//     console.log("Yup!");
//   }
// }

// checkLength(thisWord);

// Functions (again)
// function createGreeting(userName, message = "How are you?") {
//   return "Hey, I am " + userName + ". " + message;
// }

// const greeting1 = createGreeting("Devin");
// console.log(greeting1);

// function combine(a, b, c) {
//   return (a * b) / c;
// }

// function getDifference(value) {
//   if (value >= 10) {
//     console.log("All set");
//     return;
//   }
//   console.log(
//     `You only have ${value} credits. You need ${10 - value} more credits.`,
//   );
// }

// getDifference(combine(100, 4, 6));

// Arrow Functions

// export default function() {
//     console.log(11 + 9);
// }

// export default (username, message) => {
//     console.log(`Hi, ${username}! Let me ask you: ${message}`);
// }

// Values: Objects
// Can be used to group values together:

// const userName = "Rob";
// const userAge = "43";

// const user = {
//   name: "Rob",
//   age: 43,
//   greet() {
//     console.log("Hi.");
//     console.log(this.age);
//   },
// };

// console.log(user);
// console.log(user.name, user.age);
// user.greet();

// class keyword: you can create a blueprint to use later, which creates an object
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Hi");
//   }
// }

// const robGraff = new User('Rob', 35);
// console.log(robGraff);

// Arrays and Array Methods
// const hobbies = ['Sports', 'Comic Books', 'Reading'];
// console.log(hobbies[0]); // logs 'Sports'

// Utilities for Arrays
// hobbies.push('Dancing'); // add a value to the array
// console.log(hobbies[3]);

// Runs the function on every item. It compares every item to the search term. If found, it will return the index. Else, "false."
// const index = hobbies.findIndex((item) => item === 'Comic Books');

// console.log(index);

// Map — Transforms items to new items and makes that a new array.
// const excitedHobbies = hobbies.map((item) => item + '!');
// console.log(excitedHobbies);

// I guess this turns the items into objects?
// const editedHobbies = hobbies.map((item) => ({text:item}));
// console.log(editedHobbies);

// Destructuring Arrays and Objects
// const userNameData = ['Rob', 'Graff'];

// const firstName = userNameData[0];
// const firstName = userNameData[1];

// const [firstName, lastName] = ['Rob', 'Graff'];
// console.log(firstName);
// console.log(lastName);

// For objects:
const {name, age} = {
    name: 'Rob',
    age: 43
};

console.log(name, age);

// const name = user.name;
// const age = user.age;

// SPREAD
// const hobbies = ['Drawing', 'Reading', 'Stand Up Comedy', 'Map Collecting'];
// const newHobbies = ['Coin collecting', 'Funny voices', 'Front-end Development'];
// const mergedHobbies = [...hobbies, ...newHobbies]
// console.log(mergedHobbies);

// const user = {
//   name: "Rob",
//   age: 43,
// //   greet() {
// //     console.log("Hi.");
// //     console.log(this.age);
// //   },
// };

// const extendedUser = {
//     isAdmin: true,
//     ...user
// }
// console.log(extendedUser);

// Control Structures
if (10 === 10) {
    console.log('Equal');
} else {
    console.log('Not equal');
}

const password = prompt('Your password');

if (password === 'Superman') {
    console.log('Welcome')
} else if (password === 'Luthor') {
    console.log('Get Out!')
} else {
    console.log('Nothing to see here.')
}