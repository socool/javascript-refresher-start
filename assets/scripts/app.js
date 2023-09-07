// CH17 1. normal import
// import {apiKey} from './util.js';

// CH17 2. default import
// import apiKey from './util.js';

// CH17 3. import multiple variable and default variable
// import {abc as bbb,apiKey} from './util.js'
// import anyName from './util.js'

// console.log(apiKey,":",bbb,"default var:",anyName);

// CH17 4. import *
import * as util from "./util.js";

console.log(util.default, ":", util.abc, ":", util.apiKey);

// CH18 revisting varibale & values
// use let can change value
let userMessage = "Hello world";
userMessage = "Goodbye world";

const customerMessage = "Hi there";
//customerMessage = "Bye there"; // found type error is read-only

// CH19 revisiting operators
console.log("hello" + "world");
console.log(10 > 5);
if (10 === 10) {
  console.log("10 is equal to 10");
}

// CH20 revisiting functions & parameters
function greet(userName, message) {
  return `Hello! ${userName} ${message}`;
}
const greet1 = greet("John", "How are you?");
console.log(greet1);

// exercise: working with functions
function combine(a, b, c) {
  return (a * b) / c;
}

// CH21 arrow function
//export default function(){
export default (userName, message) => {
  return `Hello! ${userName} ${message}`;
};

console.log(userMessage);
