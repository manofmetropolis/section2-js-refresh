import { apiKey, anotherOne as facts } from './util.js';
// When in regular js, use the extension; Not needed in React
// Above shows how to import multiple things.

// import * as utils from "./util.js"; // this calls everything that's offered by the file.
// console.log(utils.anotherOne);
// console.log(utils.apiKey);

// import anyName from "./util.js"; // This assigns a name to the default export from the file specified, because it knows you mean that one.

// console.log(apiKey);
// console.log(anyName);

console.log(facts + '!');